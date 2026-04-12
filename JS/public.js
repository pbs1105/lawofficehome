/* ============================================================
   박배선 법무사 사무소 - 공개 홈페이지 JavaScript (public.js)
   ============================================================ */

'use strict';

/* ---------- 상담 신청 URL (n8n 외부 폼) ---------- */
const CONSULT_URLS = {
  personal:  'https://n8npark.app.n8n.cloud/form/abd1f9d0-4ae9-428c-949d-a8bd1e90a12c',
  corporate: 'https://n8npark.app.n8n.cloud/form/92ea9eaf-074c-474a-b48c-3c30198101f4',
};

/* ============================================================
   1. 슬라이더 배너
   ============================================================ */
let currentSlide = 0;
let slideTimer = null;
const SLIDE_INTERVAL = 5000; // 5초

/** 슬라이더 초기화 */
function initSlider() {
  const track = document.getElementById('bannerTrack');
  const dots  = document.querySelectorAll('.banner-dot');
  if (!track || dots.length === 0) return;

  // 자동 재생 시작
  startAutoSlide();

  // 도트 클릭 이벤트
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => goToSlide(idx));
  });

  // 터치 스와이프 지원
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  });
}

/** 지정 슬라이드로 이동 */
function goToSlide(index) {
  const track = document.getElementById('bannerTrack');
  const dots  = document.querySelectorAll('.banner-dot');
  const total = dots.length;

  currentSlide = ((index % total) + total) % total;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));

  // 타이머 리셋
  resetAutoSlide();
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startAutoSlide() {
  slideTimer = setInterval(nextSlide, SLIDE_INTERVAL);
}
function resetAutoSlide() {
  clearInterval(slideTimer);
  startAutoSlide();
}

/* ============================================================
   2. 네비게이션
   ============================================================ */

/** 스크롤 시 헤더 그림자 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  });
}

/** 부드러운 앵커 스크롤 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 70;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset - 20;
        window.scrollTo({ top, behavior: 'smooth' });

        // 카테고리 카드 하이라이트 효과
        if (target.classList.contains('category-card')) {
          setTimeout(() => {
            target.classList.add('highlight');
            setTimeout(() => target.classList.remove('highlight'), 1500);
          }, 600);
        }

        // 모바일 메뉴 닫기
        closeMenu();
      }
    });
  });
}

/** 모바일 햄버거 메뉴 토글 */
function toggleMenu() {
  const menu   = document.getElementById('navMenu');
  const burger = document.getElementById('navBurger');
  if (menu) menu.classList.toggle('open');
  if (burger) burger.classList.toggle('open');
}

function closeMenu() {
  const menu   = document.getElementById('navMenu');
  const burger = document.getElementById('navBurger');
  if (menu) menu.classList.remove('open');
  if (burger) burger.classList.remove('open');
}

// 화면 크기 변경 시 모바일 메뉴 자동 닫기
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});

/* ============================================================
   3. 상담 신청 폼
   ============================================================ */

/** 폼 유효성 검사 및 제출 */
function initConsultForm() {
  const form = document.getElementById('consultForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 필수 필드 검사
    const name    = form.querySelector('#formName');
    const phone   = form.querySelector('#formPhone');
    const privacy = form.querySelector('#formPrivacy');

    // 이름 검사
    if (!name.value.trim()) {
      alert('이름을 입력해 주세요.');
      name.focus();
      return;
    }

    // 연락처 검사
    if (!phone.value.trim()) {
      alert('연락처를 입력해 주세요.');
      phone.focus();
      return;
    }

    // 연락처 형식 간단 검사 (숫자, 하이픈만)
    const phoneClean = phone.value.replace(/[\s-]/g, '');
    if (!/^[0-9]{9,11}$/.test(phoneClean)) {
      alert('올바른 연락처를 입력해 주세요.');
      phone.focus();
      return;
    }

    // 개인정보 동의 검사
    if (!privacy.checked) {
      alert('개인정보 수집·이용에 동의해 주세요.');
      return;
    }

    // 제출 버튼 비활성화
    const submitBtn = form.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = '전송 중...';

    // 성공 메시지 표시 (실제 서버 연동 시 fetch로 대체)
    setTimeout(() => {
      const formCard = document.querySelector('.consult-form-card');
      formCard.innerHTML = `
        <div class="form-success">
          <div class="success-icon">✅</div>
          <h4>상담 신청이 완료되었습니다</h4>
          <p>영업일 기준 24시간 이내에 연락드리겠습니다.<br>빠른 상담을 원하시면 <strong>055-312-9345</strong>로 전화해 주세요.</p>
        </div>
      `;
    }, 800);
  });
}

/* ============================================================
   4. 스크롤 애니메이션 (IntersectionObserver)
   ============================================================ */
function initFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   5. 상담 선택 모달
   ============================================================ */
function openConsultModal() {
  const modal = document.getElementById('consultModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  // 모바일 메뉴 닫기
  closeMenu();
}

function closeConsultModal() {
  const modal = document.getElementById('consultModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/** 모달 초기화 (배경 클릭·ESC 닫기) */
function initConsultModal() {
  const modal = document.getElementById('consultModal');
  if (!modal) return;

  // 오버레이(배경) 클릭 시 닫기
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeConsultModal();
  });

  // ESC 키 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeConsultModal();
    }
  });
}

/** 상담 폼 이동 (개인/법인) */
function goConsult(type) {
  const url = CONSULT_URLS[type];
  if (url) {
    closeConsultModal();
    window.open(url, '_blank');
  }
}

/* ============================================================
   초기화
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initHeaderScroll();
  initSmoothScroll();
  initConsultForm();
  initConsultModal();
  initFadeIn();
});
