#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
LOAS PDF 텍스트 추출기 (Legal Office Automation System)
========================================================
법무사 사무소 업무 자동화를 위한 PDF 텍스트 추출 스크립트.

기능:
  - 텍스트 레이어 PDF: pdfplumber / PyMuPDF 직접 추출
  - 스캔본(이미지 PDF): pytesseract + pdf2image OCR 처리
  - 단일 파일 및 폴더 일괄 처리(배치) 지원
  - 처리 결과 CSV 로그 자동 생성

사용법:
  python pdf_extractor.py --input <파일|폴더> --output <출력폴더>
  python pdf_extractor.py --input <파일|폴더> --output <출력폴더> --ocr-only

작성: LOAS 자동화팀
Python 3.10+ | Windows 11
"""

from __future__ import annotations

import argparse
import csv
import logging
import os
import sys
from datetime import datetime
from pathlib import Path
from typing import NamedTuple

import fitz  # PyMuPDF
import pdfplumber
import pytesseract
from pdf2image import convert_from_path
from PIL import Image

# ---------------------------------------------------------------------------
# Windows 환경 Tesseract 기본 경로 설정
# 설치 경로가 다를 경우 아래 값을 수정하거나 --tesseract-cmd CLI 옵션을 사용하세요.
# ---------------------------------------------------------------------------
DEFAULT_TESSERACT_CMD = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
DEFAULT_POPPLER_PATH = r"C:\Program Files\poppler\Library\bin"

# OCR 신뢰도 임계값 (퍼센트)
OCR_CONFIDENCE_THRESHOLD = 60

# 텍스트 레이어 판별 임계값 (페이지당 최소 문자 수)
TEXT_LAYER_MIN_CHARS = 30

# 로깅 설정
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger("pdf_extractor")


# ---------------------------------------------------------------------------
# 데이터 클래스
# ---------------------------------------------------------------------------
class PageResult(NamedTuple):
    """단일 페이지 처리 결과."""
    page_num: int
    text: str
    method: str          # "text_layer" | "ocr"
    confidence: float    # OCR 평균 신뢰도 (텍스트 레이어인 경우 100.0)
    warning: str         # 경고 메시지 (없으면 빈 문자열)


class FileResult(NamedTuple):
    """단일 파일 처리 결과."""
    filename: str
    processed_at: str
    total_pages: int
    method: str          # "text_layer" | "ocr" | "mixed"
    success: bool
    error_message: str


# ---------------------------------------------------------------------------
# 핵심 함수
# ---------------------------------------------------------------------------
def detect_text_layer(pdf_path: str, sample_pages: int = 3) -> bool:
    """PDF에 텍스트 레이어가 있는지 감지한다.

    처음 sample_pages 페이지를 검사하여 추출 가능한 텍스트가
    TEXT_LAYER_MIN_CHARS 이상이면 텍스트 레이어가 있다고 판단한다.

    Args:
        pdf_path: PDF 파일 경로.
        sample_pages: 검사할 최대 페이지 수.

    Returns:
        텍스트 레이어 존재 여부.
    """
    try:
        doc = fitz.open(pdf_path)
        pages_to_check = min(sample_pages, len(doc))
        for i in range(pages_to_check):
            page = doc[i]
            text = page.get_text().strip()
            if len(text) >= TEXT_LAYER_MIN_CHARS:
                doc.close()
                return True
        doc.close()
        return False
    except Exception as e:
        logger.warning("텍스트 레이어 감지 실패 (%s): %s", pdf_path, e)
        return False


def extract_text_layer(pdf_path: str) -> list[PageResult]:
    """pdfplumber를 사용하여 텍스트 레이어에서 텍스트를 추출한다.

    pdfplumber 추출 실패 시 PyMuPDF(fitz)로 대체하여 시도한다.

    Args:
        pdf_path: PDF 파일 경로.

    Returns:
        페이지별 PageResult 리스트.
    """
    results: list[PageResult] = []

    try:
        with pdfplumber.open(pdf_path) as pdf:
            for i, page in enumerate(pdf.pages, start=1):
                try:
                    text = page.extract_text() or ""

                    # pdfplumber에서 텍스트가 부족하면 fitz로 대체
                    if len(text.strip()) < TEXT_LAYER_MIN_CHARS:
                        text = _extract_page_with_fitz(pdf_path, i - 1)

                    warning = ""
                    if not text.strip():
                        warning = f"페이지 {i}: 빈 페이지 (텍스트 없음)"
                        logger.warning(warning)

                    results.append(PageResult(
                        page_num=i,
                        text=text,
                        method="text_layer",
                        confidence=100.0,
                        warning=warning,
                    ))
                except Exception as e:
                    logger.error("페이지 %d 텍스트 추출 실패: %s", i, e)
                    results.append(PageResult(
                        page_num=i,
                        text="",
                        method="text_layer",
                        confidence=0.0,
                        warning=f"페이지 {i}: 추출 오류 - {e}",
                    ))
    except Exception as e:
        logger.error("pdfplumber 파일 열기 실패, fitz로 전환: %s", e)
        results = _extract_all_with_fitz(pdf_path)

    return results


def _extract_page_with_fitz(pdf_path: str, page_index: int) -> str:
    """PyMuPDF(fitz)로 특정 페이지의 텍스트를 추출한다.

    Args:
        pdf_path: PDF 파일 경로.
        page_index: 0-based 페이지 인덱스.

    Returns:
        추출된 텍스트.
    """
    try:
        doc = fitz.open(pdf_path)
        text = doc[page_index].get_text()
        doc.close()
        return text
    except Exception:
        return ""


def _extract_all_with_fitz(pdf_path: str) -> list[PageResult]:
    """PyMuPDF(fitz)로 전체 페이지의 텍스트를 추출한다.

    Args:
        pdf_path: PDF 파일 경로.

    Returns:
        페이지별 PageResult 리스트.
    """
    results: list[PageResult] = []
    doc = fitz.open(pdf_path)
    for i in range(len(doc)):
        text = doc[i].get_text()
        warning = ""
        if not text.strip():
            warning = f"페이지 {i + 1}: 빈 페이지 (텍스트 없음)"
        results.append(PageResult(
            page_num=i + 1,
            text=text,
            method="text_layer",
            confidence=100.0,
            warning=warning,
        ))
    doc.close()
    return results


def extract_with_ocr(
    pdf_path: str,
    poppler_path: str | None = None,
    lang: str = "kor+eng",
) -> list[PageResult]:
    """OCR을 사용하여 PDF에서 텍스트를 추출한다.

    pdf2image로 각 페이지를 이미지로 변환한 후 pytesseract로 OCR을 수행한다.
    신뢰도가 OCR_CONFIDENCE_THRESHOLD 미만인 페이지는 경고를 표시한다.

    Args:
        pdf_path: PDF 파일 경로.
        poppler_path: poppler bin 폴더 경로 (Windows에서 필요).
        lang: Tesseract 언어팩 (기본: kor+eng).

    Returns:
        페이지별 PageResult 리스트.
    """
    results: list[PageResult] = []

    convert_kwargs = {"pdf_path": pdf_path, "dpi": 300}
    if poppler_path and os.path.isdir(poppler_path):
        convert_kwargs["poppler_path"] = poppler_path

    try:
        images = convert_from_path(**convert_kwargs)
    except Exception as e:
        logger.error("PDF → 이미지 변환 실패 (%s): %s", pdf_path, e)
        raise

    for i, image in enumerate(images, start=1):
        try:
            # OCR 수행 (텍스트 + 신뢰도 데이터)
            ocr_data = pytesseract.image_to_data(
                image, lang=lang, output_type=pytesseract.Output.DICT
            )

            # 텍스트 조합
            text = pytesseract.image_to_string(image, lang=lang)

            # 평균 신뢰도 계산 (유효한 값만)
            confidences = [
                int(c)
                for c in ocr_data["conf"]
                if str(c).lstrip("-").isdigit() and int(c) >= 0
            ]
            avg_confidence = (
                sum(confidences) / len(confidences) if confidences else 0.0
            )

            warning = ""
            if avg_confidence < OCR_CONFIDENCE_THRESHOLD:
                warning = (
                    f"페이지 {i}: OCR 신뢰도 낮음 "
                    f"({avg_confidence:.1f}% < {OCR_CONFIDENCE_THRESHOLD}%)"
                )
                logger.warning(warning)

            results.append(PageResult(
                page_num=i,
                text=text,
                method="ocr",
                confidence=round(avg_confidence, 1),
                warning=warning,
            ))
        except Exception as e:
            logger.error("OCR 실패 (페이지 %d): %s", i, e)
            results.append(PageResult(
                page_num=i,
                text="",
                method="ocr",
                confidence=0.0,
                warning=f"페이지 {i}: OCR 오류 - {e}",
            ))

    return results


# ---------------------------------------------------------------------------
# 출력 함수
# ---------------------------------------------------------------------------
def build_output_text(
    filename: str,
    total_pages: int,
    method: str,
    page_results: list[PageResult],
) -> str:
    """추출 결과를 메타데이터 헤더 포함 텍스트로 조합한다.

    Args:
        filename: 원본 파일명.
        total_pages: 총 페이지 수.
        method: 처리 방식 ("text_layer" | "ocr" | "mixed").
        page_results: 페이지별 추출 결과.

    Returns:
        헤더 + 페이지별 텍스트가 포함된 전체 문자열.
    """
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    header_lines = [
        "=" * 72,
        f"  LOAS PDF 텍스트 추출 결과",
        "=" * 72,
        f"  파일명      : {filename}",
        f"  처리일시    : {now}",
        f"  총 페이지   : {total_pages}",
        f"  처리 방식   : {method}",
        "=" * 72,
        "",
    ]
    header = "\n".join(header_lines)

    body_parts: list[str] = []
    for pr in page_results:
        page_header = f"--- 페이지 {pr.page_num} [{pr.method}] "
        if pr.method == "ocr":
            page_header += f"(신뢰도: {pr.confidence:.1f}%) "
        page_header += "-" * max(0, 60 - len(page_header))

        if pr.warning:
            page_header += f"\n⚠ {pr.warning}"

        body_parts.append(page_header)
        body_parts.append(pr.text if pr.text.strip() else "(텍스트 없음)")
        body_parts.append("")

    return header + "\n".join(body_parts)


def save_text_file(content: str, output_path: Path) -> None:
    """텍스트 내용을 UTF-8 파일로 저장한다.

    Args:
        content: 저장할 텍스트.
        output_path: 출력 파일 경로.
    """
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(content, encoding="utf-8")
    logger.info("저장 완료: %s", output_path)


# ---------------------------------------------------------------------------
# CSV 로그
# ---------------------------------------------------------------------------
CSV_COLUMNS = ["파일명", "처리일시", "페이지수", "처리방식", "성공여부", "오류메시지"]


def init_csv_log(csv_path: Path) -> None:
    """CSV 로그 파일을 초기화한다 (헤더 작성).

    이미 존재하는 경우 건너뛴다.

    Args:
        csv_path: CSV 파일 경로.
    """
    if csv_path.exists():
        return
    csv_path.parent.mkdir(parents=True, exist_ok=True)
    with open(csv_path, "w", newline="", encoding="utf-8-sig") as f:
        writer = csv.writer(f)
        writer.writerow(CSV_COLUMNS)


def append_csv_log(csv_path: Path, result: FileResult) -> None:
    """처리 결과 한 행을 CSV 로그에 추가한다.

    Args:
        csv_path: CSV 파일 경로.
        result: 파일 처리 결과.
    """
    with open(csv_path, "a", newline="", encoding="utf-8-sig") as f:
        writer = csv.writer(f)
        writer.writerow([
            result.filename,
            result.processed_at,
            result.total_pages,
            result.method,
            "성공" if result.success else "실패",
            result.error_message,
        ])


# ---------------------------------------------------------------------------
# 파일 처리 메인 로직
# ---------------------------------------------------------------------------
def is_pdf_encrypted(pdf_path: str) -> bool:
    """PDF가 암호화되어 있는지 확인한다.

    Args:
        pdf_path: PDF 파일 경로.

    Returns:
        암호화 여부.
    """
    try:
        doc = fitz.open(pdf_path)
        encrypted = doc.is_encrypted
        doc.close()
        return encrypted
    except Exception:
        return False


def process_single_pdf(
    pdf_path: Path,
    output_dir: Path,
    ocr_only: bool = False,
    poppler_path: str | None = None,
    lang: str = "kor+eng",
) -> FileResult:
    """단일 PDF 파일을 처리하여 텍스트를 추출하고 저장한다.

    처리 흐름:
      1. 암호화/손상 검사
      2. 텍스트 레이어 감지 (ocr_only가 아닌 경우)
      3. 적절한 방식으로 텍스트 추출
      4. 결과 텍스트 파일 저장

    Args:
        pdf_path: 입력 PDF 파일 경로.
        output_dir: 출력 폴더 경로.
        ocr_only: True이면 무조건 OCR 처리.
        poppler_path: poppler bin 경로.
        lang: Tesseract 언어팩.

    Returns:
        FileResult 처리 결과.
    """
    filename = pdf_path.name
    now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    logger.info("처리 시작: %s", filename)

    # 1) 암호화 검사
    if is_pdf_encrypted(str(pdf_path)):
        msg = "암호화된 PDF - 건너뜀"
        logger.warning("%s: %s", filename, msg)
        return FileResult(filename, now_str, 0, "N/A", False, msg)

    # 2) 파일 열기 및 페이지 수 확인
    try:
        doc = fitz.open(str(pdf_path))
        total_pages = len(doc)
        doc.close()
    except Exception as e:
        msg = f"파일 열기 실패 (손상 가능): {e}"
        logger.error("%s: %s", filename, msg)
        return FileResult(filename, now_str, 0, "N/A", False, msg)

    if total_pages == 0:
        msg = "페이지가 없는 PDF"
        logger.warning("%s: %s", filename, msg)
        return FileResult(filename, now_str, 0, "N/A", False, msg)

    # 3) 추출 방식 결정 및 텍스트 추출
    try:
        if ocr_only:
            method = "ocr"
            page_results = extract_with_ocr(
                str(pdf_path), poppler_path=poppler_path, lang=lang
            )
        elif detect_text_layer(str(pdf_path)):
            method = "text_layer"
            page_results = extract_text_layer(str(pdf_path))
        else:
            method = "ocr"
            page_results = extract_with_ocr(
                str(pdf_path), poppler_path=poppler_path, lang=lang
            )
    except Exception as e:
        msg = f"텍스트 추출 실패: {e}"
        logger.error("%s: %s", filename, msg)
        return FileResult(filename, now_str, total_pages, "N/A", False, msg)

    # 혼합 방식 판별
    methods_used = set(pr.method for pr in page_results)
    if len(methods_used) > 1:
        method = "mixed"

    # 4) 텍스트 파일 저장
    output_text = build_output_text(filename, total_pages, method, page_results)
    stem = pdf_path.stem
    output_path = output_dir / f"{stem}_extracted.txt"
    save_text_file(output_text, output_path)

    # 경고 요약
    warnings = [pr.warning for pr in page_results if pr.warning]
    error_msg = "; ".join(warnings) if warnings else ""

    logger.info(
        "처리 완료: %s (%d페이지, %s)", filename, total_pages, method
    )
    return FileResult(filename, now_str, total_pages, method, True, error_msg)


# ---------------------------------------------------------------------------
# 배치 처리
# ---------------------------------------------------------------------------
def collect_pdf_files(input_path: Path) -> list[Path]:
    """입력 경로에서 처리할 PDF 파일 목록을 수집한다.

    Args:
        input_path: 파일 또는 폴더 경로.

    Returns:
        PDF 파일 경로 리스트.

    Raises:
        FileNotFoundError: 경로가 존재하지 않을 때.
        ValueError: PDF 파일이 아닐 때.
    """
    if not input_path.exists():
        raise FileNotFoundError(f"경로를 찾을 수 없습니다: {input_path}")

    if input_path.is_file():
        if input_path.suffix.lower() != ".pdf":
            raise ValueError(f"PDF 파일이 아닙니다: {input_path}")
        return [input_path]

    if input_path.is_dir():
        pdf_files = sorted(input_path.glob("*.pdf"))
        if not pdf_files:
            logger.warning("폴더에 PDF 파일이 없습니다: %s", input_path)
        return pdf_files

    raise ValueError(f"유효하지 않은 경로입니다: {input_path}")


def run_batch(
    input_path: Path,
    output_dir: Path,
    ocr_only: bool = False,
    poppler_path: str | None = None,
    lang: str = "kor+eng",
) -> list[FileResult]:
    """PDF 파일을 일괄 처리한다.

    개별 파일 오류 시 건너뛰고 다음 파일을 계속 처리한다.
    처리 결과는 CSV 로그에 기록한다.

    Args:
        input_path: 입력 파일 또는 폴더 경로.
        output_dir: 출력 폴더 경로.
        ocr_only: OCR 강제 적용 여부.
        poppler_path: poppler bin 경로.
        lang: Tesseract 언어팩.

    Returns:
        전체 FileResult 리스트.
    """
    pdf_files = collect_pdf_files(input_path)
    if not pdf_files:
        logger.info("처리할 PDF 파일이 없습니다.")
        return []

    # 출력 폴더 생성
    output_dir.mkdir(parents=True, exist_ok=True)

    # CSV 로그 초기화
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    csv_path = output_dir / f"processing_log_{timestamp}.csv"
    init_csv_log(csv_path)

    results: list[FileResult] = []
    total = len(pdf_files)

    logger.info("=" * 60)
    logger.info("LOAS PDF 텍스트 추출기 시작")
    logger.info("입력: %s (%d개 파일)", input_path, total)
    logger.info("출력: %s", output_dir)
    logger.info("모드: %s", "OCR 강제" if ocr_only else "자동 감지")
    logger.info("=" * 60)

    for idx, pdf_file in enumerate(pdf_files, start=1):
        logger.info("[%d/%d] %s", idx, total, pdf_file.name)
        try:
            result = process_single_pdf(
                pdf_file,
                output_dir,
                ocr_only=ocr_only,
                poppler_path=poppler_path,
                lang=lang,
            )
        except Exception as e:
            # 예상치 못한 오류 — 건너뛰고 계속 진행
            now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            result = FileResult(
                pdf_file.name, now_str, 0, "N/A", False, f"예상치 못한 오류: {e}"
            )
            logger.error("치명적 오류 (%s): %s", pdf_file.name, e)

        results.append(result)
        append_csv_log(csv_path, result)

    # 최종 요약
    success_count = sum(1 for r in results if r.success)
    fail_count = total - success_count
    logger.info("=" * 60)
    logger.info("처리 완료: 성공 %d / 실패 %d / 전체 %d", success_count, fail_count, total)
    logger.info("로그 파일: %s", csv_path)
    logger.info("=" * 60)

    return results


# ---------------------------------------------------------------------------
# CLI 인터페이스
# ---------------------------------------------------------------------------
def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    """명령줄 인자를 파싱한다.

    Args:
        argv: 인자 리스트 (None이면 sys.argv 사용).

    Returns:
        파싱된 Namespace 객체.
    """
    parser = argparse.ArgumentParser(
        prog="pdf_extractor",
        description="LOAS PDF 텍스트 추출기 — 법무사 사무소 업무 자동화",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""\
사용 예시:
  # 단일 파일 처리
  python pdf_extractor.py --input 계약서.pdf --output ./결과

  # 폴더 일괄 처리
  python pdf_extractor.py --input ./등기서류 --output ./추출결과

  # OCR 강제 적용
  python pdf_extractor.py --input ./스캔본 --output ./추출결과 --ocr-only

  # Tesseract 경로 직접 지정
  python pdf_extractor.py --input 문서.pdf --output ./결과 \\
      --tesseract-cmd "D:\\Tesseract\\tesseract.exe"
""",
    )
    parser.add_argument(
        "--input", "-i",
        required=True,
        help="입력 PDF 파일 또는 폴더 경로",
    )
    parser.add_argument(
        "--output", "-o",
        required=True,
        help="출력 폴더 경로 (자동 생성됨)",
    )
    parser.add_argument(
        "--ocr-only",
        action="store_true",
        default=False,
        help="텍스트 레이어 무시, OCR 강제 적용",
    )
    parser.add_argument(
        "--tesseract-cmd",
        default=None,
        help=f"Tesseract 실행 파일 경로 (기본: {DEFAULT_TESSERACT_CMD})",
    )
    parser.add_argument(
        "--poppler-path",
        default=None,
        help=f"Poppler bin 폴더 경로 (기본: {DEFAULT_POPPLER_PATH})",
    )
    parser.add_argument(
        "--lang",
        default="kor+eng",
        help="Tesseract OCR 언어팩 (기본: kor+eng)",
    )
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    """메인 진입점.

    Args:
        argv: 명령줄 인자 (None이면 sys.argv 사용).

    Returns:
        종료 코드 (0=성공, 1=실패).
    """
    args = parse_args(argv)

    # Tesseract 경로 설정
    tesseract_cmd = args.tesseract_cmd or DEFAULT_TESSERACT_CMD
    if os.path.isfile(tesseract_cmd):
        pytesseract.pytesseract.tesseract_cmd = tesseract_cmd
    else:
        logger.warning(
            "Tesseract를 찾을 수 없습니다: %s  "
            "(OCR 사용 시 --tesseract-cmd 옵션으로 경로를 지정하세요)",
            tesseract_cmd,
        )

    # Poppler 경로
    poppler_path = args.poppler_path or DEFAULT_POPPLER_PATH
    if not os.path.isdir(poppler_path):
        poppler_path = None  # 시스템 PATH에서 찾도록 함

    input_path = Path(args.input).resolve()
    output_dir = Path(args.output).resolve()

    try:
        results = run_batch(
            input_path,
            output_dir,
            ocr_only=args.ocr_only,
            poppler_path=poppler_path,
            lang=args.lang,
        )
    except (FileNotFoundError, ValueError) as e:
        logger.error(str(e))
        return 1

    # 하나라도 실패하면 종료 코드 1
    if any(not r.success for r in results):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
