# GEO 고정 질문 검토용 html 생성: python3 scripts/geo/build_review.py (홈페이지 폴더에서)
import json,re,html
from collections import Counter
d=json.load(open('scripts/geo/geo_questions.json',encoding='utf-8'))
import os
def title(p):
    if not p.endswith('.html'): return '게시 전 (유언대용신탁 원고 승인 완료, 홈페이지 반영 대기)'
    t=open('guide/'+p,encoding='utf-8').read()
    m=re.search(r'<title>(.*?)</title>',t,re.S); return html.unescape(m.group(1)).split('|')[0].strip() if m else p
qs=d['questions']; reg=[q for q in qs if q['유형']=='지역']
rows=''
for q in qs:
    r=q['유형']=='지역'
    badge=f"<span class='b r'>📍 지역 · {q['지역']}</span>" if r else "<span class='b i'>📘 정보</span>"
    link=("<a href='https://lawofficehome.vercel.app/guide/%s' target=_blank>%s</a>"%(q['목표'],q['목표'])) if q['목표'].endswith('.html') else "<span class=p>%s</span>"%q['목표']
    rows+=f"<tr class={'s' if q['구분']=='특수' else 'g'}><td class=n>{q['no']}</td><td>{q['분야']}</td><td>{badge}</td><td class=q>{html.escape(q['질문'])}</td><td class=t>{link}<br><small>{html.escape(title(q['목표']))}</small></td></tr>"
dist=' · '.join(f"{k} {v}" for k,v in Counter(q['분야'] for q in qs).items())
city=' · '.join(f"{k} {v}" for k,v in Counter(q['지역'] for q in reg).items())
out=f"""<!DOCTYPE html><html lang=ko><head><meta charset=utf-8><title>GEO 고정 질문 (검토용)</title><style>
body{{background:#14213a;color:#d5dbe6;font-family:'Malgun Gothic',sans-serif;margin:0;padding:28px;line-height:1.6}}
h1{{color:#e3cfa2;font-size:22px;margin:0 0 6px}} .sub{{color:#9aa7bd;font-size:14px;margin-bottom:18px}}
.box{{background:#1c2c4a;border-left:4px solid #b89a5e;padding:12px 16px;margin:0 0 18px;border-radius:6px;font-size:14px}}
table{{border-collapse:collapse;width:100%;font-size:14px}} th{{background:#22355a;color:#e3cfa2;text-align:left;padding:9px}}
td{{border-bottom:1px solid #2a3d62;padding:9px;vertical-align:top}} td.n{{color:#9aa7bd;width:28px}} td.q{{color:#eef1f6;font-weight:600}}
a{{color:#8fc6d6}} small{{color:#8b97ab}} .b{{padding:2px 8px;border-radius:10px;font-size:12px;white-space:nowrap}}
.r{{background:#3a2a4a;color:#e0b6e6}} .i{{background:#1f3e48;color:#9fd6d9}} td.t{{width:30%}} tr.s td:first-child{{border-left:4px solid #b89a5e}} tr.g td:first-child{{border-left:4px solid #3a4c6e}} .p{{color:#e0b6e6}}
</style></head><body>
<h1>GEO 고정 질문 {len(qs)}개 — 검토용 ({d['version']})</h1>
<div class=sub>작성 {d['작성일']} · 측정 대상: {' · '.join(d['측정대상'])} · {d['주기']}</div>
<div class=box><b>쓰는 법</b> — 매달 같은 문장을 네 AI에 그대로 물어보고, 답변마다 <b>인용</b>(사무소 페이지 링크가 출처로 나옴) / <b>언급</b>(이름만 나옴) / <b>없음</b> 셋 중 하나로 적습니다.<br>
📍 <b>지역형 {len(reg)}개</b>({city}): AI가 그 지역 법무사로 사무소를 <i>추천</i>하는지 봅니다. &nbsp; 📘 <b>정보형 {len(qs)-len(reg)}개</b>: AI가 법률 설명의 <i>출처</i>로 사무소 페이지를 쓰는지 봅니다.<br>
분야 배분: {dist}<br>좌측 금색 줄 = 특수 분야, 회색 줄 = 일반 분야<br><small>{d.get('방침','')}</small></div>
<table><tr><th>#</th><th>분야</th><th>유형</th><th>질문 (이 문장 그대로)</th><th>인용되길 바라는 페이지</th></tr>{rows}</table>
</body></html>"""
open('scripts/geo/GEO_고정질문_검토.html','w',encoding='utf-8').write(out); print('done')
