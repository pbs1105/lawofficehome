"""
법무사 홈페이지 컨텐츠 제작용 PDF 텍스트 추출 스크립트
-------------------------------------------------------
사용법:
  pip install pdfplumber
  python pdf_extract.py

결과물:
  - 교재명_전체.txt          : 전체 텍스트 (검색용)
  - 교재명_챕터별/           : 챕터별 분리 파일
      01_총설.txt
      02_현행민법상속.txt
      03_상속인에의한등기.txt
      ...
"""

import pdfplumber
import os
import re

# ── 설정 ──────────────────────────────────────────────
PDF_FILES = [
    r"C:\법무사_홈페이지\원본교재\상속등기실무1.pdf",
    r"C:\법무사_홈페이지\원본교재\2_재산상속_김현선_.pdf",
    # 파일 경로를 여기에 추가하세요
]

OUTPUT_DIR = r"C:\법무사_홈페이지\03_추출텍스트"
# ─────────────────────────────────────────────────────


def extract_pdf(pdf_path: str, output_dir: str):
    """PDF에서 텍스트를 추출하고 챕터별로 저장"""
    
    book_name = os.path.splitext(os.path.basename(pdf_path))[0]
    book_dir = os.path.join(output_dir, book_name)
    os.makedirs(book_dir, exist_ok=True)

    print(f"\n처리 중: {book_name}")

    all_text = []
    chapters = {}
    current_chapter = "00_서문"
    chapter_text = []

    # 챕터 감지 패턴 (제1장, 제2장 ... 형식)
    chapter_pattern = re.compile(r'제\s*(\d+)\s*장\s+(.{2,20})')

    with pdfplumber.open(pdf_path) as pdf:
        total = len(pdf.pages)
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            if not text:
                continue

            # 진행 표시
            if (i + 1) % 20 == 0:
                print(f"  {i+1}/{total} 페이지 처리 중...")

            # 챕터 감지
            match = chapter_pattern.search(text)
            if match:
                # 이전 챕터 저장
                if chapter_text:
                    chapters[current_chapter] = '\n'.join(chapter_text)

                num = match.group(1).zfill(2)
                title = match.group(2).strip()
                current_chapter = f"{num}_{title}"
                chapter_text = []

            chapter_text.append(f"[p.{i+1}]\n{text}\n")
            all_text.append(text)

    # 마지막 챕터 저장
    if chapter_text:
        chapters[current_chapter] = '\n'.join(chapter_text)

    # ① 전체 텍스트 저장
    full_path = os.path.join(book_dir, f"{book_name}_전체.txt")
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write('\n\n'.join(all_text))
    print(f"  ✓ 전체 텍스트 저장: {os.path.basename(full_path)}")

    # ② 챕터별 저장
    chapter_dir = os.path.join(book_dir, "챕터별")
    os.makedirs(chapter_dir, exist_ok=True)
    for ch_name, ch_text in chapters.items():
        ch_path = os.path.join(chapter_dir, f"{ch_name}.txt")
        with open(ch_path, 'w', encoding='utf-8') as f:
            f.write(ch_text)
    print(f"  ✓ 챕터별 파일 {len(chapters)}개 저장: {chapter_dir}")

    return len(all_text)


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    print("=" * 50)
    print("PDF 텍스트 추출 시작")
    print("=" * 50)

    for pdf_path in PDF_FILES:
        if not os.path.exists(pdf_path):
            print(f"\n⚠ 파일 없음: {pdf_path}")
            continue
        extract_pdf(pdf_path, OUTPUT_DIR)

    print("\n" + "=" * 50)
    print("완료! Claude에게 올릴 파일:")
    print(f"  {OUTPUT_DIR}")
    print()
    print("사용 방법:")
    print("  원하는 챕터의 .txt 파일을 Claude에 업로드하면")
    print("  PDF보다 훨씬 빠르게 컨텐츠를 추출할 수 있습니다.")
    print("=" * 50)


if __name__ == "__main__":
    main()
