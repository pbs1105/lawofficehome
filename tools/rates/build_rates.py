# rates.json 생성기 — 공과금·보수 요율표 단일 출처 (1단계 초안, 2026-11-23)
# 실행: tools/rates 폴더에서 python3 build_rates.py  → rates.json + 요율표_검토.html
import json, html

FT = json.load(open('_fee_table_from_calc.json', encoding='utf-8'))
C = '2026-11-23'
C2 = '2026-11-28'
def L(law, art): return f'https://www.law.go.kr/법령/{law}/{art}'

SRC = {
 'acq':   {'name':'지방세법 제11조(부동산 취득의 세율)', 'url':L('지방세법','제11조'), 'effective':'2026-07-01', 'checked':C, 'status':'ok', 'memo':'6억~9억 계산식은 원문이 그림 — 알려진 계산식 사용'},
 'acq9':  {'name':'지방세법 제9조 제3항(신탁 취득세 비과세)', 'url':L('지방세법','제9조'), 'effective':'2026-07-01', 'checked':C, 'status':'ok'},
 'reg':   {'name':'지방세법 제28조(등록면허세 세율)', 'url':L('지방세법','제28조'), 'effective':'2026-07-01', 'checked':C, 'status':'ok'},
 'edu':   {'name':'지방세법 제151조(지방교육세)', 'url':L('지방세법','제151조'), 'effective':'2026-07-01', 'checked':C, 'status':'ok'},
 'agri':  {'name':'농어촌특별세법 제5조(과세표준과 세율)', 'url':L('농어촌특별세법','제5조'), 'effective':'2026-05-12', 'checked':C, 'status':'check', 'memo':'세율표가 그림 — 표준세율 2% 기준 10% 산식은 실무 통례로 확인'},
 'agriEx':{'name':'농어촌특별세법 제4조 제11호(서민주택 비과세)', 'url':L('농어촌특별세법','제4조'), 'effective':'2026-05-12', 'checked':C, 'status':'ok'},
 'bond':  {'name':'주택도시기금법 시행령 별표 부표(제1종국민주택채권 매입대상 및 금액표)', 'url':'https://www.law.go.kr/LSW/flDownload.do?flSeq=170789201', 'effective':'2025-08-26', 'checked':C, 'status':'ok'},
 'stamp': {'name':'인지세법 제3조·제6조', 'url':L('인지세법','제3조'), 'effective':'2026-01-02', 'checked':C2, 'status':'check', 'memo':'제3조 금액표가 그림 — 11-28 외부 자료 3곳과 재대조(2만·4만·7만·15만·35만 일치). 제6조 제5호(주택 1억 이하 비과세)는 원문 확인'},
 'feeRe': {'name':'등기사항증명서 등 수수료규칙 제5조의2·제5조의5', 'url':L('등기사항증명서등수수료규칙','제5조의2'), 'effective':'2025-08-01', 'checked':C, 'status':'ok'},
 'feeCo': {'name':'등기사항증명서 등 수수료규칙 제5조의3·제5조의5', 'url':L('등기사항증명서등수수료규칙','제5조의3'), 'effective':'2025-08-01', 'checked':C, 'status':'ok'},
 'inji':  {'name':'민사소송 등 인지법(제2조·제3조·제7조·제9조·전자소송 특례)', 'url':L('민사소송등인지법','제2조'), 'effective':'2025-03-01', 'checked':C, 'status':'ok'},
 'gasa':  {'name':'가사소송수수료규칙 제3조', 'url':L('가사소송수수료규칙','제3조'), 'effective':'2016-07-01', 'checked':C, 'status':'ok'},
 'song':  {'name':'송달료규칙의 시행에 따른 업무처리요령(재일 87-4) 별표1', 'url':'https://korea.legal/실무자료/법원-송달료-1회분-5640원으로-인상-2026-07-01/', 'effective':'2026-07-01', 'checked':C2, 'status':'check', 'memo':'법원 예규 원문 사이트 미접속. 11-28 재확인: 1회분 5,640원·공탁(우표) 5,420원·민사 가합/가단 15·가소 10·나 12·다 8회·상속포기 6회 — 정리 자료 수치와 일치'},
 'bosu':  {'name':'대한법무사협회 법무사 보수기준(2026. 8. 20. 개정본)', 'url':'https://korea.legal/wp-content/uploads/2026/10/법무사보수기준2026.8.20.pdf', 'effective':'2026-08-20', 'checked':C2, 'status':'ok', 'memo':'11-28 개정본 PDF와 금액·요율 대조: 부동산 기본·담보권 추가설정·법인 설립·자본증감·소송서류·개인회생파산 6개 표 일치(구간 연결값까지 검산). 공탁 표는 1억~5억 구간 정정. 부동산 추가(2~10개) 금액은 원문에서 확인 안 됨'},
 'court': {'name':'법원 예납 기준(부산지방법원·창원지방법원·부산회생법원)', 'url':'', 'effective':'', 'checked':'', 'status':'todo', 'memo':'사무소 최근 사건의 예납명령서로 기준값 확정'},
}

def item(id, label, kind, value=None, unit='원', src=(), note='', status=None):
    d = {'id':id, 'label':label, 'kind':kind, 'value':value, 'unit':unit, 'sources':list(src), 'note':note}
    if status is None:
        status = 'ok' if src and all(SRC[s]['status']=='ok' for s in src) else 'check'
    d['status'] = status
    return d

DEPOSIT_FIX = json.loads(json.dumps(FT['FEE_TABLE']['deposit']))
DEPOSIT_FIX['ranges'][2].update({'base':195000,'rate':0.0008})
DEPOSIT_FIX['ranges'][3].update({'base':355000,'rate':0.0006})

BOND = {'cols':['특별시·광역시','그 밖의 지역'], 'unit':'시가표준액의 1천분의',
  'house':[[2e7,5e7,13,13],[5e7,1e8,19,14],[1e8,1.6e8,21,16],[1.6e8,2.6e8,23,18],[2.6e8,6e8,26,21],[6e8,None,31,26]],
  'land':[[5e6,5e7,25,20],[5e7,1e8,40,35],[1e8,None,50,45]],
  'other':[[1e7,1.3e8,10,8],[1.3e8,2.5e8,16,14],[2.5e8,None,20,18]],
  'gratuitous':[[1e7,5e7,18,14],[5e7,1.5e8,28,25],[1.5e8,None,42,39]],
  'mortgage':{'min':2e7,'rate':10,'cap':1e9},
  'rounding':'1만원 미만 단수: 5천원 이상 올림·미만 버림, 최저 1만원',
  'exempt':'공유지분대로 분할 이전, 신탁·신탁 종료에 따른 이전은 매입 제외'}

realestate = [
 item('acq.house.buy','취득세 — 유상거래 주택','formula',{'6억 이하':0.01,'6억 초과 9억 이하':'(가액×2/3억−3)×1/100, 소수점 이하 다섯째자리 반올림','9억 초과':0.03},'세율',['acq'],'다주택·법인 중과(제13조의2)는 별도 확인'),
 item('acq.other.buy','취득세 — 그 밖의 유상(농지 외)','rate',0.04,'세율',['acq']),
 item('acq.farm.buy','취득세 — 농지 유상','rate',0.03,'세율',['acq']),
 item('acq.gift','취득세 — 증여 등 무상','rate',0.035,'세율',['acq'],'과세표준은 시가인정액 원칙. 조정대상지역 시가표준액 3억 이상 주택 증여는 중과 가능'),
 item('acq.original','취득세 — 원시취득(보존)','rate',0.028,'세율',['acq']),
 item('acq.partition','취득세 — 공유물 분할(본인 지분 이내)','rate',0.023,'세율',['acq']),
 item('edu.acq','지방교육세(취득분)','formula','(취득세율−2%)×20% · 유상 주택은 (세율×50%)×20% · 중과는 (4%−2%)×20%','산식',['edu']),
 item('agri.acq','농어촌특별세(취득분)','formula','과세표준×2%×10% (전용 85㎡ 이하 주택 비과세)','산식',['agri','agriEx']),
 item('reg.mortgage','등록면허세 — 저당권 설정·이전','rate',0.002,'채권금액의 비율',['reg'],'최저 6,000원'),
 item('reg.lease','등록면허세 — 전세권·임차권','rate',0.002,'전세금·월 임대차금액의 비율',['reg']),
 item('reg.provisional','등록면허세 — 경매신청·가압류·가처분·가등기','rate',0.002,'채권금액(가등기는 가액 또는 채권금액)의 비율',['reg']),
 item('reg.other','등록면허세 — 그 밖의 부동산 등기(말소·변경 등)','fixed',6000,'원/건',['reg']),
 item('edu.reg','지방교육세(등록분)','rate',0.2,'등록면허세의 비율',['edu']),
 item('bond.table','국민주택채권 매입 기준표','table',BOND,'',['bond']),
 item('stamp.transfer','인지세 — 소유권 이전 증서','table',[[1e7,0],[3e7,20000],[5e7,40000],[1e8,70000],[1e9,150000],[None,350000]],'기재금액 상한 → 세액',['stamp'],'주택은 기재금액 1억원 이하 비과세'),
 item('fee.re','등기신청수수료 — 부동산(보존·이전·설정·가등기)','table',{'서면':18000,'e-Form':15000,'전자':10000},'원/부동산',['feeRe']),
 item('fee.re.other','등기신청수수료 — 그 밖의 부동산등기(말소·변경 등)','table',{'서면':4000,'e-Form':3000,'전자':1000},'원/부동산',['feeRe'],'표시변경·분필·합필 등은 면제'),
 item('bosu.re.base','보수 — 부동산등기 기본보수(누진)','table',FT['FEE_TABLE']['realEstate']['ranges'],'구간',['bosu']),
 item('bosu.re.mortgageAdd','보수 — 담보권 추가설정','table',FT['FEE_TABLE']['realEstate']['mortgageAddRanges'],'구간',['bosu']),
 item('bosu.agency.deed','대행료 — 등기원인증서 작성·검인·거래신고','fixed',50000,'원/건',['bosu'],'개정 기준 제25조와 일치(2026-11-23 대조)',status='ok'),
 item('bosu.agency.bond','대행료 — 국민주택채권 매입·즉시매도','fixed',40000,'원/건',['bosu'],'개정 기준 제25조와 일치(2026-11-23 대조)',status='ok'),
 item('bosu.re.addProperty','가산 — 부동산 추가','table',{'2~10개(1개마다)':30000,'10개 초과분(1개마다)':20000},'원/개',['bosu'],'10개 초과분 20,000원은 원문(제10조 제1항) 확인. 2~10개 1개마다 30,000원은 법무사 결정(2026-11-28, 기존 계산기 금액 유지)',status='ok'),
 item('bosu.foreign','가산 — 외국인·재외국민 포함 등기','rate',1.0,'기본보수 대비 상한',['bosu'],'100% 이내 재량 가산(제10조)'),
]

CATS = [
 {'id':'inheritance','name':'상속','items':[
   item('acq.inherit','취득세 — 상속','table',{'농지':0.023,'농지 외':0.028},'세율',['acq']),
   item('fee.re.inherit','등기신청수수료 — 상속등기','table',{'서면':20000,'e-Form':17000},'원/부동산',['feeRe']),
   item('gasa.ra','인지 — 상속포기·한정승인 신고(라류 가사비송)','fixed',5000,'원/건',['gasa']),
   item('song.renounce','송달료 — 상속포기·한정승인(느단)','formula','당사자 수×6회분×5,640원','산식',['song']),
   item('bond.gratuitous','국민주택채권 — 상속·증여 등 무상 이전','ref','부동산등기 › 국민주택채권 기준표 › 무상취득','',['bond']),
 ]},
 {'id':'willtrust','name':'신탁','items':[
   item('acq.trust','취득세 — 위탁자→수탁자 이전·신탁 종료로 위탁자 복귀·수탁자 변경','fixed',0,'비과세',['acq9'],'주택조합 관련 제외. 수익자에게 이전하면 과세'),
   item('fee.trust','등기신청수수료 — 신탁등기','table',{'서면':8000,'e-Form':6000,'전자':4000},'원/부동산',['feeRe']),
   item('reg.trust','등록면허세 — 신탁등기','fixed',6000,'원/건',['reg'],'그 밖의 등기 건당 6,000원(제28조 제1항 제1호 마목) + 지방교육세 1,200원. 취득시기 전 신탁등기는 비과세(대법원 2021두61178)'),
   item('bond.trust','국민주택채권 — 신탁·신탁 종료 이전','fixed',0,'매입 제외',['bond']),
 ]},
 {'id':'foreign','name':'외국인·재외국민','items':[
   item('ref.re','공과금 — 부동산등기 항목 전부 공용','ref','부동산등기','',[] ,status='ok'),
   item('bosu.foreign.ref','가산 — 외국인·재외국민 포함 등기','ref','부동산등기 › 가산 — 외국인·재외국민','',['bosu']),
   item('cost.apostille','번역·공증·아포스티유 실비','baseline',None,'원',['court'],'사무소 실비 기준값 입력 필요',status='todo'),
 ]},
 {'id':'insolvency','name':'회생·파산','items':[
   item('inji.rehab','인지 — 개인회생·회생·간이회생·채권자 파산신청','fixed',30000,'원',['inji'],'전자소송은 10분의 9'),
   item('song.personalRehab','송달료 — 개인회생','formula','(10회 + 채권자 수×8회)×5,640원','산식',['song'],'기존 계산기는 채권자 수×2회 — 2단계 엔진에서 교체'),
   item('court.rehabCommissioner','예납 — 회생위원 보수(영업소득자 등)','baseline',150000,'원',['court'],'2차 자료 값 — 부산회생법원 예납명령으로 확정',status='todo'),
   item('court.bankruptcyTrustee','예납 — 파산관재인 비용','baseline',None,'원',['court'],'부산회생법원 기준 입력 필요',status='todo'),
   item('bosu.insolvency','보수 — 개인회생·파산','table',FT['FEE_TABLE']['insolvency'],'구간',['bosu']),
 ]},
 {'id':'realestate','name':'부동산등기','items':realestate},
 {'id':'corporation','name':'법인등기','items':[
   item('reg.corp.establish','등록면허세 — 영리법인 설립·증자','rate',0.004,'납입금액의 비율',['reg'],'최저 112,500원'),
   item('reg.corp.nonprofit','등록면허세 — 비영리법인 설립·출자 증가','rate',0.002,'납입금액의 비율',['reg']),
   item('reg.corp.hq','등록면허세 — 본점·주사무소 이전','fixed',112500,'원/건',['reg']),
   item('reg.corp.branch','등록면허세 — 지점 설치','fixed',40200,'원/건',['reg']),
   item('reg.corp.other','등록면허세 — 그 밖의 법인등기(임원변경 등)','fixed',40200,'원/건',['reg']),
   item('reg.corp.metro','등록면허세 — 대도시 중과','rate',3.0,'해당 세율의 배수',['reg'],'대도시 설립·지점 설치·대도시 전입(5년 내 증자 포함). 그 밖의 등기는 제외'),
   item('edu.corp','지방교육세(등록분)','rate',0.2,'등록면허세의 비율',['edu']),
   item('fee.corp.establish','등기신청수수료 — 설립·관할 외 본점이전','table',{'서면':35000,'e-Form':28000,'전자':20000},'원/건',['feeCo']),
   item('fee.corp.other','등기신청수수료 — 그 밖의 상업등기','table',{'서면':7000,'e-Form':5000,'전자':2000},'원/등기 목적',['feeCo']),
   item('cost.notary','의사록 인증 공증료','baseline',None,'원',['court'],'공증인 수수료규칙 확인 후 기준값 입력',status='todo'),
   item('bosu.corp.establish','보수 — 설립','table',FT['FEE_TABLE']['corporateEstablish']['ranges'],'구간',['bosu']),
   item('bosu.corp.capital','보수 — 자본증감','table',FT['FEE_TABLE']['corporateCapital']['ranges'],'구간',['bosu']),
 ]},
 {'id':'lawsuit','name':'민사소송','items':[
   item('inji.complaint','인지 — 소장','table',[[1e7,'소가×50/10000'],[1e8,'소가×45/10000+5,000'],[1e9,'소가×40/10000+55,000'],[None,'소가×35/10000+555,000']],'소가 상한 → 산식',['inji'],'1천원 미만은 1천원, 100원 미만 버림(기존 계산기는 올림 — 수정 대상). 항소 1.5배·상고 2배'),
   item('inji.electronic','인지 — 전자소송 특례','rate',0.9,'인지액의 비율',['inji']),
   item('inji.paymentOrder','인지 — 지급명령','rate',0.1,'소장 인지의 비율',['inji'],'1천원 미만은 1천원, 100원 미만 버림'),
   item('song.unit','송달료 1회분','fixed',5640,'원',['song'],'2026. 7. 1.부터'),
   item('song.basis.civil','송달료 납부 기준(민사)','table',{'가합·가단':15,'가소':10,'항소(나)':12,'상고(다)':8},'당사자 1인당 회분',['song']),
   item('bosu.litigation','보수 — 소장 등 서류 작성','table',FT['FEE_TABLE']['litigation'],'구간',['bosu'],'고난도 사건 250% 가산(제24조 제2항, 2026. 8. 20.)'),
 ]},
 {'id':'enforcement','name':'민사집행','items':[
   item('inji.provisional','인지 — 가압류·가처분 신청','fixed',10000,'원',['inji'],'임시지위 가처분은 본안 인지의 1/2, 상한 50만원'),
   item('inji.auction','인지 — 부동산 경매 신청','fixed',5000,'원',['inji']),
   item('inji.seizure','인지 — 채권압류 등 강제집행 신청','fixed',2000,'원',['inji']),
   item('reg.provisional.ref','등록면허세 — 가압류·가처분·경매기입 등기','ref','부동산등기 › 등록면허세 — 경매신청·가압류·가처분·가등기','',['reg']),
   item('court.auctionDeposit','예납 — 부동산 경매 예납금(감정료·현황조사·매각수수료·신문공고료)','baseline',None,'원',['court'],'부산·창원지법 예납명령 기준으로 사무소 기준값 입력',status='todo'),
 ]},
 {'id':'family','name':'가사·공탁','items':[   # 9번째 카테고리 (2026-11-28) — 공탁 항목을 민사집행에서 이동
   item('song.deposit','송달료 — 공탁(우표 사용 업무) 1회분','fixed',5420,'원',['song']),
   item('bosu.deposit','보수 — 공탁','table',DEPOSIT_FIX,'구간',['bosu'],'11-28 개정본 원문 대조로 정정: 1억~3억 195,000+8/10,000, 3억~5억 355,000+6/10,000 (기존 계산기는 195,000+10/10,000·395,000+4/10,000 — 1억 초과 공탁 보수가 틀리게 나옴)'),
 ]},
]

out = {'meta':{'name':'법무사 사무소 공과금·보수 요율표','version':'1.0','generated':C2,
               'approved':True,'approvedBy':'박배선 법무사','approvedAt':'2026-11-28','approvalNote':'○ 값 미정(todo) 항목은 사무소 기준값을 두지 않고 견적서·영수증에 "법원 예납명령(공증인 수수료) 확정 후 기재"로 표시한다. ◆ 2차 출처 항목은 수치 일치를 확인하고 승인. 법령·예규 개정 시 이 파일을 고치고 버전을 올린다.',
               'rule':'세율·수수료·보수의 단일 출처. 법무사 승인 전 값은 계산기에 쓰지 않는다. status: ok=원문 확인 · check=2차 출처·부분 확인 · todo=값 미정'},
       'sources':SRC, 'categories':CATS}
json.dump(out, open('rates.json','w',encoding='utf-8'), ensure_ascii=False, indent=1)

# ---------- 승인용 검토 화면 ----------
E = html.escape
def won(v):
    if v is None: return '—'
    if isinstance(v,(int,float)):
        if 0 < v < 1 or (isinstance(v,float) and v != int(v) and v < 10): return f'{v*100:g}%' if v < 1 else f'{v:g}배'
        return f'{int(v):,}'
    return E(str(v))
def fmt_value(it):
    v, k = it['value'], it['kind']
    if v is None: return '<span class="tbd">값 미정</span>'
    if k in ('rate',):
        return f'{v*100:g}%' if v < 1 else (f'{v:g}배' if it['unit'].endswith('배수') else f'{v*100:g}%')
    if k in ('fixed','baseline'):
        return f'{int(v):,}원' if isinstance(v,(int,float)) and v else ('0원 · ' + E(it['unit']) if v == 0 else E(str(v)))
    if k in ('formula','ref'):
        if isinstance(v,dict): return '<br>'.join(f'{E(a)}: {won(b)}' for a,b in v.items())
        return E(str(v))
    if k == 'table':
        if isinstance(v,dict) and 'house' in v:
            def rows(name,key):
                r = ''.join(f'<tr><td>{E(name) if i==0 else ""}</td><td>{lo/1e4:,.0f}만 이상{" ~ "+format(hi/1e4,",.0f")+"만 미만" if hi else ""}</td><td>{a}</td><td>{b}</td></tr>' for i,(lo,hi,a,b) in enumerate(v[key]))
                return r
            t = '<table class="sub"><tr><th>구분</th><th>시가표준액</th><th>특별시·광역시</th><th>그 밖의 지역</th></tr>'
            t += rows('주택(매매 등)','house')+rows('토지','land')+rows('주택·토지 외','other')+rows('상속·증여 등 무상','gratuitous')
            t += f'<tr><td>저당권 설정</td><td>설정금액 2천만 이상</td><td colspan="2">10 (매입액 상한 10억)</td></tr></table>'
            return t + f'<div class="nt">단위: 1천분의 · {E(v["rounding"])} · {E(v["exempt"])}</div>'
        if isinstance(v,dict) and 'ranges' in v or (isinstance(v,list) and v and isinstance(v[0],dict) and 'base' in v[0]):
            ranges = v['ranges'] if isinstance(v,dict) else v
            t = '<table class="sub"><tr><th>가액 구간</th><th>기준액</th><th>초과분 요율</th></tr>'
            for r in ranges:
                mx = r['max']; mxs = '이상' if mx in ('Infinity',None) else f'~ {mx/1e4:,.0f}만'
                t += f'<tr><td>{r["prevMax"]/1e4:,.0f}만 {mxs}</td><td>{r["base"]:,}</td><td>{r["rate"]*10000:g}/10,000</td></tr>'
            t += '</table>'
            if isinstance(v,dict):
                extra = {k2:v2 for k2,v2 in v.items() if k2 != 'ranges'}
                if extra: t += '<div class="nt">그 밖의 값: ' + E(json.dumps(extra, ensure_ascii=False))[:400] + '</div>'
            return t
        if isinstance(v,dict) and all(isinstance(x,dict) for x in v.values()):
            return '<div class="nt">' + E(json.dumps(v, ensure_ascii=False))[:600] + '</div>'
        if isinstance(v,dict):
            return '<br>'.join(f'{E(a)}: {won(b)}{"원" if isinstance(b,int) and b>=1000 else ""}' for a,b in v.items())
        if isinstance(v,list):
            return '<br>'.join(f'{("~ "+format(a/1e4,",.0f")+"만") if a else "그 초과"}: {won(b)}{"원" if isinstance(b,int) else ""}' for a,b in v)
    return E(str(v))

LABEL = {'ok':('✔','원문 확인'),'check':('◆','부분·2차 확인'),'todo':('○','값 미정')}
cnt = {'ok':0,'check':0,'todo':0}
secs = []
for c in CATS:
    rows = []
    for it in c['items']:
        cnt[it['status']] += 1
        ic, lb = LABEL[it['status']]
        srcs = ' '.join(f'<a href="{E(SRC[s]["url"])}" target="_blank" rel="noopener">{E(SRC[s]["name"])}</a>' if SRC[s]['url'] else E(SRC[s]['name']) for s in it['sources'])
        rows.append(f'<tr class="st-{it["status"]}"><td class="rail"></td><td class="ic" title="{lb}">{ic}</td><td><b>{E(it["label"])}</b><div class="id">{E(it["id"])}</div></td><td>{fmt_value(it)}</td><td class="src">{srcs}{"<div class=nt>"+E(it["note"])+"</div>" if it["note"] else ""}</td></tr>')
    secs.append(f'<section id="{c["id"]}"><h2>{E(c["name"])} <small>{len(c["items"])}개</small></h2><table class="main"><thead><tr><th></th><th></th><th>항목</th><th>값</th><th>근거 · 메모</th></tr></thead><tbody>{"".join(rows)}</tbody></table></section>')
srcrows = ''.join(f'<tr class="st-{s["status"]}"><td class="rail"></td><td class="ic">{LABEL[s["status"]][0]}</td><td>{E(s["name"])}</td><td>{E(s["effective"] or "—")}</td><td>{E(s.get("memo",""))}</td></tr>' for s in SRC.values())
nav = ''.join(f'<a href="#{c["id"]}">{E(c["name"])}</a>' for c in CATS)
page = f'''<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>요율표 — 공과금·보수 1.0 (승인)</title>
<style>
:root{{--bg:#131c2b;--panel:#1a2639;--panel2:#22314a;--line:#2e3f5c;--text:#cdd5e0;--muted:#8e9bb0;--gold:#bfa46a;--teal:#45a29e;--mag:#b0628f;--amber:#b89b4e}}
*{{box-sizing:border-box}} body{{margin:0;background:var(--bg);color:var(--text);font-family:'Noto Sans KR','Apple SD Gothic Neo',sans-serif;font-size:14px;line-height:1.6}}
.wrap{{max-width:1240px;margin:0 auto;padding:28px 18px 60px}} h1{{font-size:1.45rem;color:#e0d4b4;margin:0 0 6px}} h2{{font-size:1.1rem;color:#d9cba7;margin:30px 0 10px;border-left:3px solid var(--gold);padding-left:9px}} h2 small{{color:var(--muted);font-weight:400}}
.sub0{{color:var(--muted)}} .bar{{display:flex;gap:10px;flex-wrap:wrap;margin:16px 0}} .chip{{background:var(--panel);border:1px solid var(--line);border-radius:8px;padding:8px 14px}}
.chip b{{font-size:1.15rem}} .k-ok b{{color:var(--teal)}} .k-check b{{color:var(--amber)}} .k-todo b{{color:var(--mag)}}
nav{{position:sticky;top:0;background:var(--bg);padding:8px 0;border-bottom:1px solid var(--line);display:flex;gap:6px;flex-wrap:wrap;z-index:2}} nav a{{color:var(--text);text-decoration:none;padding:4px 10px;border:1px solid var(--line);border-radius:14px;font-size:.85rem}}
table.main{{width:100%;border-collapse:collapse;background:var(--panel);border-radius:8px;overflow:hidden}} .main th{{background:var(--panel2);color:#d9cba7;text-align:left;padding:8px;font-weight:600;font-size:.82rem}}
.main td{{padding:9px 8px;border-top:1px solid var(--line);vertical-align:top}} td.rail{{width:4px;padding:0}} .st-ok td.rail{{background:var(--teal)}} .st-check td.rail{{background:var(--amber)}} .st-todo td.rail{{background:var(--mag)}}
td.ic{{width:26px;text-align:center;font-weight:700}} .st-ok .ic{{color:var(--teal)}} .st-check .ic{{color:var(--amber)}} .st-todo .ic{{color:var(--mag)}}
.id{{font-family:monospace;font-size:.75rem;color:var(--muted)}} .src a{{color:#9db8dc}} .nt{{color:var(--muted);font-size:.8rem;margin-top:4px}} .tbd{{color:var(--mag);font-weight:600}}
table.sub{{border-collapse:collapse;font-size:.8rem;margin:2px 0}} .sub th,.sub td{{border:1px solid var(--line);padding:3px 6px}} .sub th{{color:var(--muted);font-weight:500}}
.box{{background:var(--panel);border:1px solid var(--line);border-left:3px solid var(--teal);border-radius:8px;padding:12px 16px;margin-top:14px}}
@media(max-width:760px){{.main td:nth-child(5),.main th:nth-child(5){{display:none}}}}
</style></head><body><div class="wrap">
<h1>공과금·보수 요율표 검토 <span class="sub0">초안 0.1 · {C}</span></h1>
<div class="sub0">계산기 통합 1단계 산출물 — 원본은 <code>tools/rates/rates.json</code>. 법무사님 승인 전에는 계산기에 쓰지 않습니다.</div>
<div class="bar"><div class="chip k-ok">✔ 원문 확인 <b>{cnt["ok"]}</b></div><div class="chip k-check">◆ 부분·2차 확인 <b>{cnt["check"]}</b></div><div class="chip k-todo">○ 값 미정 <b>{cnt["todo"]}</b></div></div>
<div class="box"><b>✔ 승인 — 1.0 (2026-11-28, 박배선 법무사)</b><br>
원문 확인 53건과 2차 출처 수치 일치 7건을 그대로 승인했습니다. 부동산 추가 가산은 2~10개 1개마다 30,000원, 10개 초과분 1개마다 20,000원입니다. 공탁 보수 1억~5억 구간은 개정본 원문대로 정정했습니다.<br>
○ 값 미정 5건(경매 예납금·회생위원 보수 예납·파산관재인 비용·의사록 인증 공증료·번역·공증·아포스티유 실비)은 기준값 없이 견적서에 "법원 예납명령(공증인 수수료) 확정 후 기재"로 나옵니다. 이 요율표가 계산 엔진·견적서의 단일 출처입니다.</div>
<nav>{nav}<a href="#sources">근거 목록</a></nav>
{"".join(secs)}
<section id="sources"><h2>근거 목록</h2><table class="main"><thead><tr><th></th><th></th><th>근거</th><th>시행·개정</th><th>메모</th></tr></thead><tbody>{srcrows}</tbody></table></section>
</div></body></html>'''
open('요율표_검토.html','w',encoding='utf-8').write(page)
print('items', sum(cnt.values()), cnt)
