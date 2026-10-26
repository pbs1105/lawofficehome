/**
 * inspect_org_fields.js — 법인 원고 폼의 당사자(btprt) 입력 필드 실측 덤프.
 * 현재 ECFS가 '원고 입력 · 인격구분=법인' 상태(사업자등록번호 칸 노출)일 때 실행하면,
 * 사업자등록번호 앞/중간/뒷자리 등 법인 전용 필드의 정확한 id를 알아낼 수 있다.
 *
 * 사용법: ecfs-automation 폴더에서  node inspect_org_fields.js
 * 결과: 콘솔 출력 + inspect_org_result.txt 저장
 */
const fs = require('fs');
const { attachToExistingBrowser } = require('./ecfs_party_input');

(async () => {
  const { page } = await attachToExistingBrowser();

  const data = await page.evaluate(() => {
    const els = document.querySelectorAll('[id^="mf_pfwork_wfm_btprt_"]');
    const nearLabel = (el) => {
      let node = el.closest('td, div, li, span');
      for (let i = 0; i < 5 && node; i += 1) {
        const prev = node.previousElementSibling;
        const t = prev && (prev.innerText || '').trim();
        if (t && t.length < 40) return t;
        node = node.parentElement;
      }
      return '';
    };
    const fields = [];
    els.forEach((el) => {
      const tag = el.tagName.toLowerCase();
      if (!['input', 'select', 'textarea'].includes(tag)) return;
      const st = window.getComputedStyle(el);
      const r = el.getBoundingClientRect();
      const visible = st.display !== 'none' && st.visibility !== 'hidden' && r.width > 0 && r.height > 0;
      const f = {
        id: el.id,
        tag,
        type: el.type || '',
        visible,
        disabled: !!el.disabled,
        maxLength: el.maxLength > 0 ? el.maxLength : undefined,
        value: (el.value || '').slice(0, 20),
        label: nearLabel(el),
      };
      if (tag === 'select') {
        f.options = Array.from(el.options).map((o) => ({ v: o.value, t: (o.text || '').trim() }));
      }
      fields.push(f);
    });
    return fields;
  });

  const visibleEnabled = data.filter((f) => f.visible && !f.disabled);
  // 사업자/법인/등록번호 관련 후보만 별도 추림(숨김 포함)
  const idNum = data.filter((f) => /(bzno|bzentyNo|crno|cmpnyNo|rgno|enrrno|regno|bizno|corp|bsn|licens)/i.test(f.id) || /(사업자|법인|등록번호)/.test(f.label || ''));
  // 인격구분·대표자구분 등 select의 옵션 전체(법인 하위유형 확인용)
  const selects = data.filter((f) => f.tag === 'select');
  // 전체 필드 compact (숨김 여부 포함) — 놓치는 필드 없도록
  const allCompact = data.map((f) => `${f.visible ? 'V' : '.'}${f.disabled ? 'D' : ' '} ${f.id}  [${f.type}${f.maxLength ? ' max' + f.maxLength : ''}]  ${f.label || ''}`);
  const out = {
    총필드: data.length,
    표시_활성: visibleEnabled.length,
    번호칸_후보: idNum,
    select_옵션들: selects,
    전체_필드_compact: allCompact,
  };
  const txt = JSON.stringify(out, null, 2);
  fs.writeFileSync('inspect_org_result.txt', txt);
  console.log(txt);
  console.log('\n=== inspect_org_result.txt 저장 완료 ===');
  process.exit(0);
})().catch((e) => { console.error('실패:', e.message); process.exit(1); });
