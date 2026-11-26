(()=>{
"use strict";
const T={ar:{nav_home:"الرئيسية",nav_bank:"بنك الأسئلة",nav_stats:"إحصائيات",eyebrow:"قفل المذاكرة بامتحان",h1:"التليفون مقفول لحد ما تثبت إنك ذاكرت.",lead:"ابدأ جلسة مذاكرة، وقفلو بيقفل الشاشة عليك. ولما الوقت يخلص، مفيش فتح غير لما تحل امتحان قصير في اللي ذاكرته.",s1:"اختار المادة والوقت",s2:"ذاكر والشاشة مقفولة",s3:"حل الامتحان وافتح",start_h:"ابدأ جلسة",subject:"المادة",minutes:"مدة المذاكرة (دقيقة)",qcount:"عدد أسئلة الامتحان",pass:"نسبة النجاح %",skip:"تخطى للمحتوى",strict:"وضع صارم: كل خروج من الصفحة يزوّد 30 ثانية",penalty:"+30 ثانية عقوبة خروج",resumed:"كملنا الجلسة اللي كانت شغالة",faq_h:"أسئلة شائعة",f1q:"هو بيقفل التليفون كله؟",f1a:"لأ. النسخة دي بتقفل صفحة قفلو بس، ومعاها وضع صارم بيزوّد الوقت لو خرجت. القفل على مستوى النظام جاي في تطبيق الأندرويد.",f2q:"الأسئلة بتيجي منين؟",f2a:"من بنك الأسئلة بتاعك. ممكن تضيف بإيدك، أو تلصق ملخصك وقفلو يولّد منه أسئلة اختيار من متعدد على جهازك من غير إنترنت.",f3q:"بياناتي فين؟",f3a:"كل حاجة متخزنة في المتصفح عندك. مفيش حساب ولا تتبع. تقدر تصدّر نسخة احتياطية في أي وقت.",f4q:"لو رفرشت الصفحة وهي مقفولة؟",f4a:"الجلسة بتكمل من مكانها، وفي الوضع الصارم بتتحسب خروجة.",share:"شارك قفلو",shared:"اتنسخ اللينك",start_btn:"اقفل وابدأ المذاكرة",honest:"النسخة دي بتشتغل في المتصفح وبتقفل صفحة قفلو نفسها. القفل على مستوى النظام كله جاي في تطبيق الأندرويد (موجود في خطة المشروع).",bank_h:"المواد",new_subject:"اسم مادة جديدة",add:"إضافة",gen_h:"ولّد أسئلة من ملاحظاتك",gen_p:"الصق ملخصك. قفلو بيطلع جمل مهمة ويخفي الكلمة المفتاحية ويعملها اختيار من متعدد، كله على جهازك.",notes_ph:"الصق ملاحظات المذاكرة هنا (جمل كاملة، كل جملة في سطر أو تنتهي بنقطة)",gen_btn:"ولّد أسئلة",mat_btn:"احفظها كمادة مذاكرة",mat_p:"المادة المحفوظة بتظهر لك وقت المذاكرة، وجزء من الامتحان بيتولد منها كل مرة.",mat_saved:"اتحفظت المادة",material:"مادة المذاكرة",from_notes:"من ملاحظاتك",manual_h:"أضف سؤال بإيدك",q_ph:"نص السؤال",a_right:"الإجابة الصح",a_wrong1:"غلط 1",a_wrong2:"غلط 2",a_wrong3:"غلط 3",export:"تصدير",import:"استيراد",stats_h:"إحصائياتك",foot:"Qeflo - مشروع مفتوح المصدر. صُنع لطلاب مصر.",locked:"مقفول",studying:"ذاكر دلوقتي. الشاشة مقفولة.",left_cnt:"خرجت من الصفحة",finish_early:"خلصت بدري؟ ابدأ الامتحان",give_up:"استسلام (بيتسجل في الإحصائيات)",hold:"اضغط مطوّلاً 5 ثواني للخروج الطارئ",holding:"كمّل ضغط...",exam_time:"وقت الامتحان",q_of:"سؤال",need:"المطلوب للنجاح",passed:"عدّيت. مبروك، اتفتح.",failed:"لسه. ذاكر شوية وجرّب امتحان جديد.",unlock:"افتح",retry:"امتحان جديد (بعد 20 ثانية)",wait:"استنى",score:"نتيجتك",no_q:"المادة دي مفيهاش أسئلة كفاية (محتاج 3 على الأقل). ضيف من بنك الأسئلة.",gen_ok:"اتضافت أسئلة:",gen_none:"ملقيتش جمل مناسبة. اكتب جمل أطول.",sessions:"جلسات",passrate:"نسبة النجاح",mins:"دقايق مذاكرة",streak:"أيام متتالية",qs:"سؤال",del:"حذف",view_q:"عرض الأسئلة",hide_q:"إخفاء",missed:"غلطت فيه",empty_s:"لسه مفيش أسئلة",conf:"متأكد إنك عايز تستسلم؟",none:"لسه مفيش جلسات.",week:"آخر 7 أيام (دقايق)",bysub:"حسب المادة",best:"أطول سلسلة",clear:"مسح السجل",leftn:"خروج"},
en:{nav_home:"Home",nav_bank:"Question bank",nav_stats:"Stats",eyebrow:"STUDY LOCK, UNLOCKED BY AN EXAM",h1:"Your phone stays locked until you prove you studied.",lead:"Start a study session and Qeflo locks the screen on you. When time is up, the only way out is a short exam on what you just studied.",s1:"Pick subject and time",s2:"Study, screen locked",s3:"Pass the exam, unlock",start_h:"Start a session",subject:"Subject",minutes:"Study time (minutes)",qcount:"Exam questions",pass:"Pass mark %",skip:"Skip to content",strict:"Strict mode: every time you leave the page adds 30 seconds",penalty:"+30 s leave penalty",resumed:"Resumed your running session",faq_h:"FAQ",f1q:"Does it lock my whole phone?",f1a:"No. This web version locks the Qeflo page only, and strict mode adds time when you leave. System-wide locking is planned for the Android app.",f2q:"Where do the questions come from?",f2a:"From your own question bank. Add them by hand, or paste your summary and Qeflo generates multiple-choice questions on your device, offline.",f3q:"Where is my data?",f3a:"Everything stays in your browser. No account, no tracking. Export a backup any time.",f4q:"What if I refresh while locked?",f4a:"The session continues where it was, and in strict mode it counts as leaving.",share:"Share Qeflo",shared:"Link copied",start_btn:"Lock in and start",honest:"This web version locks the Qeflo page itself. System-wide locking comes with the Android app (see the project roadmap).",bank_h:"Subjects",new_subject:"New subject name",add:"Add",gen_h:"Generate questions from your notes",gen_p:"Paste your summary. Qeflo picks key sentences, hides the key term and makes a multiple-choice question. Everything stays on your device.",notes_ph:"Paste study notes here (full sentences, one per line or ending with a period)",gen_btn:"Generate questions",mat_btn:"Save as study material",mat_p:"Saved material shows during study time, and part of every exam is generated from it.",mat_saved:"Material saved",material:"Study material",from_notes:"from your notes",manual_h:"Add a question by hand",q_ph:"Question text",a_right:"Right answer",a_wrong1:"Wrong 1",a_wrong2:"Wrong 2",a_wrong3:"Wrong 3",export:"Export",import:"Import",stats_h:"Your stats",foot:"Qeflo - open source. Built for students.",locked:"Locked",studying:"Study now. The screen is locked.",left_cnt:"times you left the page",finish_early:"Done early? Start the exam",give_up:"Give up (logged in stats)",hold:"Hold 5 seconds for emergency exit",holding:"Keep holding...",exam_time:"Exam time",q_of:"Question",need:"Needed to pass",passed:"Passed. You're unlocked.",failed:"Not yet. Review and try a fresh exam.",unlock:"Unlock",retry:"New exam (after 20 s)",wait:"Wait",score:"Your score",no_q:"This subject needs at least 3 questions. Add some in the question bank.",gen_ok:"Questions added:",gen_none:"No usable sentences found. Write longer sentences.",sessions:"Sessions",passrate:"Pass rate",mins:"Minutes studied",streak:"Day streak",qs:"questions",del:"Delete",view_q:"View questions",hide_q:"Hide",missed:"missed",empty_s:"No questions yet",conf:"Really give up?",none:"No sessions yet.",week:"Last 7 days (minutes)",bysub:"By subject",best:"Best streak",clear:"Clear history",leftn:"left"}};
const SEED=[
["Computer Science / علوم حاسب",[["What does CPU stand for?","Central Processing Unit","Central Program Unit","Computer Power Unit","Core Processing Utility"],["Which data structure uses LIFO order?","Stack","Queue","Heap","Graph"],["What is the time complexity of binary search?","O(log n)","O(n)","O(n log n)","O(1)"],["Which keyword defines a function in Python?","def","func","function","lambda only"],["What does SQL stand for?","Structured Query Language","Simple Query Logic","Sequential Query Language","Structured Question List"],["أي من هذه ليس نظام تشغيل؟","Python","Linux","Windows","Android"],["ما وحدة قياس سرعة المعالج؟","جيجاهرتز","جيجابايت","ميجابكسل","واط"]]],
["علوم عامة",[["ما العضية المسؤولة عن إنتاج الطاقة في الخلية؟","الميتوكوندريا","النواة","الريبوسومات","جهاز جولجي"],["ما الغاز الذي تمتصه النباتات في عملية البناء الضوئي؟","ثاني أكسيد الكربون","الأكسجين","النيتروجين","الهيدروجين"],["كم عدد كواكب المجموعة الشمسية؟","8","7","9","10"],["ما الرمز الكيميائي للماء؟","H2O","CO2","O2","NaCl"],["ما أسرع حيوان بري؟","الفهد","الأسد","الغزال","النمر"]]],
["English Grammar",[["She ___ to school every day.","goes","go","going","gone"],["Choose the correct form: They ___ playing football now.","are","is","am","be"],["The past tense of 'buy' is:","bought","buyed","boughten","buying"],["Which word is a noun?","happiness","quickly","beautiful","run"],["I have lived here ___ 2020.","since","for","from","during"]]]];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let lang=localStorage.getItem("qeflo.lang")||"ar";
const t=k=>T[lang][k]||k;
let S=load();
function load(){try{const s=JSON.parse(localStorage.getItem("qeflo.state"));if(s&&s.subjects)return s}catch(e){}
 return{subjects:SEED.map(([n,qs])=>({id:uid(),name:n,qs:qs.map(q=>({q:q[0],a:q[1],w:q.slice(2)}))})),log:[]}}
function dev(){let d=localStorage.getItem("qeflo.dev");if(!d){d=uid()+uid()+uid();localStorage.setItem("qeflo.dev",d)}return d}
function uid(){return Math.random().toString(36).slice(2,9)}
function save(){localStorage.setItem("qeflo.state",JSON.stringify(S));fetch("api/state",{method:"PUT",headers:{"content-type":"application/json","x-device":dev()},body:JSON.stringify(S)}).catch(()=>{})}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};

function applyLang(){document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 $$("[data-i]").forEach(e=>e.textContent=t(e.dataset.i));$$("[data-ip]").forEach(e=>e.placeholder=t(e.dataset.ip));$("#lang").textContent=lang==="ar"?"EN":"عربي"}
$("#lang").onclick=()=>{lang=lang==="ar"?"en":"ar";localStorage.setItem("qeflo.lang",lang);applyLang();render()};

function route(){const v=(location.hash||"#home").slice(1);$$(".view").forEach(s=>s.hidden=s.id!==v);$$("nav a").forEach(a=>a.classList.toggle("on",a.dataset.v===v));render()}
addEventListener("hashchange",route);

function subjOpts(){return S.subjects.map(s=>`<option value="${s.id}">${esc(s.name)} (${s.qs.length})</option>`).join("")}
function render(){
 ["#subjectSel","#genSubject","#mSubject"].forEach(id=>{const e=$(id),v=e.value;e.innerHTML=subjOpts();if(v)e.value=v});
 $("#subjectList").innerHTML=S.subjects.map(s=>`<details class="subj"><summary><span dir="auto">${esc(s.name)}</span> <span class="chip">${s.qs.length} ${t("qs")}</span> <button type="button" class="ghost dsub" data-del="${s.id}">${t("del")}</button></summary>${s.qs.length?s.qs.map((q,i)=>`<div class="qitem"><span dir="auto">${esc(q.q)}</span><br><b dir="auto" class="okc">✔ ${esc(q.a)}</b>${q.miss?` <span class="chip">${t("missed")} ×${q.miss}</span>`:""} <button type="button" class="ghost dq" data-s="${s.id}" data-i="${i}" aria-label="${t("del")}">✕</button></div>`).join(""):`<p class="hint">${t("empty_s")}</p>`}</details>`).join("");
 $$("[data-del]").forEach(b=>b.onclick=e=>{e.preventDefault();if(confirm(t("del")+"?")){S.subjects=S.subjects.filter(s=>s.id!==b.dataset.del);save();render()}});
 $$(".dq").forEach(b=>b.onclick=()=>{const s=S.subjects.find(x=>x.id===b.dataset.s);s.qs.splice(+b.dataset.i,1);save();render();const d=$$(".subj").find(x=>x.querySelector(`[data-del="${s.id}"]`));if(d)d.open=true});
 renderStats()}

$("#addSubject").onclick=()=>{const n=$("#newSubject").value.trim();if(!n)return;S.subjects.push({id:uid(),name:n,qs:[]});$("#newSubject").value="";save();render()};
$("#mAdd").onclick=()=>{const s=S.subjects.find(x=>x.id===$("#mSubject").value),q=$("#mQ").value.trim(),a=$("#mA").value.trim(),w=["#mB","#mC","#mD"].map(i=>$(i).value.trim()).filter(Boolean);
 if(!s||!q||!a||w.length<1)return;s.qs.push({q,a,w});["#mQ","#mA","#mB","#mC","#mD"].forEach(i=>$(i).value="");save();render()};

// Question generator: cloze from notes. Key term = longest capitalised/long word; distractors from other notes' terms.
function norm(w){return w.replace(/[\u064B-\u0652\u0640]/g,"").replace(/[إأآ]/g,"ا").replace(/ى/g,"ي").replace(/ة/g,"ه")}
function stem(w){w=norm(w);return /^[\u0600-\u06FF]/.test(w)?w.replace(/^(وال|بال|كال|فال|لل|ال)/,""):w.toLowerCase()}
const STOP=new Set(("this that with from have been were which their there about because these those will would could should into than then also each other when what where while using used uses "+"التي الذي الذين هذا هذه ذلك تلك هناك عندما حيث كان كانت يكون تكون يمكن عن علي الي هو هي هم كما لكن ثم او ان اذا بين خلال بعد قبل عند منذ لان ايضا جدا كل بعض").split(" "));
function genQuestions(text){
 const sents=text.split(/(?<=[.!؟?۔\n])\s+|\n+/).map(s=>s.trim().replace(/^[-•*\d.)\s]+/,"")).filter(s=>s.split(/\s+/).length>=5);
 const words=s=>(s.match(/[\p{L}\p{N}][\p{L}\p{N}'-]{2,}/gu)||[]).filter(w=>!STOP.has(w.toLowerCase())&&!STOP.has(stem(w)));
 const pool=[...new Set(sents.flatMap(words))];
 const isAr=w=>/[\u0600-\u06FF]/.test(w);
 const out=[];
 for(const s of sents){const ws=words(s);if(!ws.length)continue;
  const key=[...ws].sort((a,b)=>((/^[A-Z0-9]/.test(b)||/\d/.test(b))-(/^[A-Z0-9]/.test(a)||/\d/.test(a)))||b.length-a.length)[0];
  const d=shuffle(pool.filter(p=>stem(p)!==stem(key)&&isAr(p)===isAr(key)&&Math.abs(p.length-key.length)<=4)).slice(0,3);
  if(d.length<3)continue;
  out.push({q:s.replace(key,"_____"),a:key,w:d})}
 return out}
$("#genBtn").onclick=()=>{const s=S.subjects.find(x=>x.id===$("#genSubject").value);const qs=genQuestions($("#notes").value);
 if(!qs.length){$("#genOut").innerHTML=`<p class="hint">${t("gen_none")}</p>`;return}
 s.qs.push(...qs);save();$("#notes").value="";render();$("#genOut").innerHTML=`<p class="hint">${t("gen_ok")} ${qs.length}</p>`+qs.slice(0,5).map(q=>`<div class="qitem">${esc(q.q)} <b>→ ${esc(q.a)}</b></div>`).join("")};
$("#matBtn").onclick=()=>{const s=S.subjects.find(x=>x.id===$("#genSubject").value),n=$("#notes").value.trim();if(!s||!n)return;s.notes=((s.notes||"")+"\n"+n).trim();save();$("#genOut").innerHTML=`<p class="hint">${t("mat_saved")}</p>`};
$$(".pre").forEach(b=>b.onclick=()=>{$("#minutes").value=b.dataset.m});
$("#shareBtn").onclick=async()=>{const u="https://yousefkhames.github.io/qeflo/",d={title:"Qeflo",text:t("h1"),url:u};try{if(navigator.share)await navigator.share(d);else{await navigator.clipboard.writeText(u);$("#shareBtn").textContent=t("shared")}}catch(e){}};
$("#exportBtn").onclick=()=>{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(S,null,2)],{type:"application/json"}));a.download="qeflo-backup.json";a.click()};
$("#importFile").onchange=async e=>{try{const d=JSON.parse(await e.target.files[0].text());if(d.subjects){S=d;save();render()}}catch(_){}};

// Stats
function dayKey(d){return new Date(d).toDateString()}
function streaks(){const days=new Set(S.log.filter(l=>l.passed).map(l=>dayKey(l.t)));let cur=0,d=new Date();while(days.has(d.toDateString())){cur++;d.setDate(d.getDate()-1)}
 const ts=[...days].map(x=>+new Date(x)).sort((a,b)=>a-b);let best=0,run=0,prev=null;for(const x of ts){run=prev!==null&&Math.round((x-prev)/864e5)===1?run+1:1;best=Math.max(best,run);prev=x}return{cur,best}}
function renderStats(){const L=S.log,ok=L.filter(l=>l.passed).length,st=streaks();
 $("#kpis").innerHTML=[[L.length,t("sessions")],[L.length?Math.round(100*ok/L.length)+"%":"-",t("passrate")],[L.reduce((a,l)=>a+(l.mins||0),0),t("mins")],[st.cur,t("streak")],[st.best,t("best")]].map(([a,b])=>`<div class="kpi"><b>${a}</b>${b}</div>`).join("");
 const days=[...Array(7)].map((_,i)=>{const d=new Date();d.setDate(d.getDate()-6+i);return{d,m:L.filter(l=>l.passed&&dayKey(l.t)===d.toDateString()).reduce((a,l)=>a+l.mins,0)}});const mx=Math.max(1,...days.map(x=>x.m));
 const wk=`<h3>${t("week")}</h3><div class="chart" role="img" aria-label="${t("week")}">${days.map(x=>`<div class="col"><i style="height:${Math.round(100*x.m/mx)}%"></i><b>${x.m||""}</b><span>${x.d.toLocaleDateString(lang==="ar"?"ar-EG":"en-GB",{weekday:"narrow"})}</span></div>`).join("")}</div>`;
 const by={};L.forEach(l=>{(by[l.subject]=by[l.subject]||{n:0,ok:0}).n++;if(l.passed)by[l.subject].ok++});
 const bs=Object.keys(by).length?`<h3>${t("bysub")}</h3>`+Object.entries(by).map(([k,v])=>`<div class="qitem"><div class="rowb"><span dir="auto">${esc(k)}</span><b>${Math.round(100*v.ok/v.n)}%</b></div><div class="mini"><i style="width:${100*v.ok/v.n}%"></i></div></div>`).join(""):"";
 $("#history").innerHTML=wk+bs+(L.length?`<h3>${t("sessions")}</h3>`+L.slice(-15).reverse().map(l=>`<div class="qitem">${l.passed?"✅":"❌"} <span dir="auto">${esc(l.subject)}</span> · ${l.mins} min · ${l.score}/${l.total}${l.left?` · ${l.left} ${t("leftn")}`:""} · ${new Date(l.t).toLocaleString(lang==="ar"?"ar-EG":"en-GB")}</div>`).join("")+`<button class="ghost" id="clearLog">${t("clear")}</button>`:`<p class="hint">${t("none")}</p>`);
 const c=$("#clearLog");if(c)c.onclick=()=>{if(confirm(t("clear")+"?")){S.log=[];save();render()}}}

// Sound and haptics
let mute=localStorage.getItem("qeflo.mute")==="1";let AC=null;
function beep(f,d,type){if(mute)return;try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();const o=AC.createOscillator(),g=AC.createGain();o.type=type||"sine";o.frequency.value=f;g.gain.value=.06;o.connect(g);g.connect(AC.destination);o.start();g.gain.exponentialRampToValueAtTime(.0001,AC.currentTime+d);o.stop(AC.currentTime+d)}catch(e){}}
const buzz=p=>{if(!mute&&navigator.vibrate)navigator.vibrate(p)};
const sfx={good(){beep(660,.15);setTimeout(()=>beep(880,.2),110);buzz(30)},bad(){beep(180,.3,"square");buzz([60,40,60])},win(){[523,659,784,1046].forEach((f,i)=>setTimeout(()=>beep(f,.25),i*120));buzz([40,30,40,30,120])}};
function syncSnd(){const b=$("#snd");b.textContent=mute?"🔇":"🔊";b.setAttribute("aria-pressed",String(!mute))}
$("#snd").onclick=()=>{mute=!mute;localStorage.setItem("qeflo.mute",mute?"1":"0");syncSnd();if(!mute)sfx.good()};syncSnd();
function confetti(){const box=document.createElement("div");box.className="confetti";box.setAttribute("aria-hidden","true");const cols=["#F5B83D","#1f9d6b","#4aa3ff","#ff6b8a","#fff"];for(let i=0;i<60;i++){const s=document.createElement("i");s.style.cssText=`left:${Math.random()*100}%;background:${cols[i%5]};animation-delay:${Math.random()*.6}s;animation-duration:${1.6+Math.random()*1.4}s;transform:rotate(${Math.random()*360}deg)`;box.appendChild(s)}$("#lock").appendChild(box);setTimeout(()=>box.remove(),3500)}
// Lock session
let run=null,tick=null;
const guard=e=>{e.preventDefault();e.returnValue=""};
function lockUI(h){const L=$("#lockState");L.innerHTML=h;const f=L.querySelector("button:not([disabled])");(f||L).focus({preventScroll:true})}
$("#startBtn").onclick=()=>{
 const s=S.subjects.find(x=>x.id===$("#subjectSel").value);
 if(!s||s.qs.length<3){alert(t("no_q"));return}
 const mins=Math.max(1,Math.min(240,+$("#minutes").value||25));
 begin({s,mins,total:mins*60,end:Date.now()+mins*60000,count:Math.max(3,Math.min(20,+$("#qcount").value||5)),pass:Math.max(50,Math.min(100,+$("#passPct").value||80)),left:0,phase:"study",strict:$("#strict").checked})};
function persist(){if(!run){localStorage.removeItem("qeflo.run");return}localStorage.setItem("qeflo.run",JSON.stringify({sid:run.s.id,mins:run.mins,total:run.total,end:run.end,count:run.count,pass:run.pass,left:run.left,strict:run.strict,phase:run.phase}))}
function begin(r){run=r;persist();
 $("#lock").hidden=false;document.body.style.overflow="hidden";
 addEventListener("beforeunload",guard);
 (document.documentElement.requestFullscreen||(()=>{})).call(document.documentElement).catch(()=>{});
 if(run.phase==='exam'){startExam()}else studyUI();clearInterval(tick);tick=setInterval(step,500);try{navigator.wakeLock&&navigator.wakeLock.request('screen').then(w=>{run.wl=w}).catch(()=>{})}catch(e){}}
document.addEventListener("visibilitychange",()=>{if(run&&run.phase==="study"&&document.hidden){run.left++;if(run.strict){run.end+=30000;run.total+=30}persist();const e=$("#lcnt");if(e)e.textContent=run.left;const p=$("#pen");if(p&&run.strict)p.textContent=t("penalty")}});
function fmt(s){s=Math.max(0,s);return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")}
function studyUI(){lockUI(`<p class="muted">🔒 ${t("locked")} · ${esc(run.s.name)}</p><div class="ringwrap"><svg class="ring" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="54" class="rb"/><circle cx="60" cy="60" r="54" class="rf" id="rf"/></svg><div class="timer" id="tm" role="timer"></div></div><p>${t("studying")}</p><p class="muted"><b id="lcnt">${run.left}</b> ${t("left_cnt")} <span id="pen" style="color:#F5B83D"></span></p>${run.s.notes?`<details class="mat" open><summary>${t("material")}</summary><div dir="auto">${esc(run.s.notes).replace(/\n/g,"<br>")}</div></details>`:""}<button class="primary" id="early">${t("finish_early")}</button><br><button class="ghost" id="giveup">${t("give_up")}</button>`);
 $("#early").onclick=startExam;const g=$("#giveup");g.textContent=t("hold");let ht=null;const startH=()=>{g.textContent=t("holding");ht=setTimeout(()=>{if(confirm(t("conf")))end(false,0,run.count,true);else g.textContent=t("hold")},5000)},stopH=()=>{clearTimeout(ht);g.textContent=t("hold")};g.onpointerdown=startH;g.onpointerup=g.onpointerleave=g.onpointercancel=stopH;g.onkeydown=e=>{if((e.key==="Enter"||e.key===" ")&&!ht)startH()};g.onkeyup=stopH;step()}
function step(){if(!run||run.phase!=="study")return;const r=Math.ceil((run.end-Date.now())/1000);const tm=$("#tm");if(tm){tm.textContent=fmt(r);$("#rf").style.strokeDashoffset=339.3*(r/run.total)}if(r<=0)startExam()}
function startExam(){run.phase="exam";persist();clearInterval(tick);const gen=run.s.notes?shuffle(genQuestions(run.s.notes)).slice(0,Math.floor(run.count*0.4)):[];
 run.qs=shuffle([...shuffle(run.s.qs).sort((a,b)=>(b.miss||0)-(a.miss||0)+(Math.random()-.5)).slice(0,run.count-gen.length),...gen]);run.wrong=[];run.i=0;run.ok=0;showQ()}
function showQ(){const q=run.qs[run.i],opts=shuffle([q.a,...shuffle(q.w).slice(0,3)]);
 lockUI(`<p class="muted">${t("exam_time")} · ${t("q_of")} ${run.i+1}/${run.qs.length}</p><div class="bar"><i style="width:${100*run.i/run.qs.length}%"></i></div><div class="q" dir="auto">${esc(q.q)}</div>${opts.map((o,i)=>`<button class="opt" data-o="${esc(o)}"><kbd>${i+1}</kbd><span dir="auto">${esc(o)}</span></button>`).join("")}`);
 $$(".opt").forEach(b=>b.onclick=()=>{const good=b.dataset.o===q.a;if(good){sfx.good();run.ok++;if(q.miss)q.miss--}else{sfx.bad();q.miss=(q.miss||0)+1;run.wrong.push(q)}$$(".opt").forEach(x=>{x.disabled=true;if(x.dataset.o===q.a)x.classList.add("right")});if(!good)b.classList.add("wrong");setTimeout(()=>{run.i++;run.i<run.qs.length?showQ():result()},900)})}
function result(){const pct=Math.round(100*run.ok/run.qs.length),ok=pct>=run.pass;
 if(ok){end(true,run.ok,run.qs.length);return}
 lockUI(`<h2>${t("failed")}</h2><p>${t("score")}: <b>${run.ok}/${run.qs.length}</b> (${pct}%) · ${t("need")}: ${run.pass}%</p><div style="text-align:start">${run.wrong.map(q=>`<div class="qitem muted">${esc(q.q)}<br><b style="color:#F5B83D">✔ ${esc(q.a)}</b></div>`).join("")}</div><button class="primary" id="again" disabled></button>`);save();
 let w=20;const b=$("#again");b.textContent=`${t("wait")} 20`;const iv=setInterval(()=>{b.textContent=`${t("wait")} ${w}`;if(w--<=0){clearInterval(iv);b.disabled=false;b.textContent=t("retry")}},1000);b.onclick=()=>{run.attempts=(run.attempts||1)+1;startExam()}}
function end(passed,ok,total,gaveUp){try{run.wl&&run.wl.release()}catch(e){}localStorage.removeItem("qeflo.run");S.log.push({t:Date.now(),subject:run.s.name,mins:run.mins,passed,score:ok,total,left:run.left,gaveUp:!!gaveUp,attempts:run.attempts||1});save();
 removeEventListener("beforeunload",guard);clearInterval(tick);if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});
 if(gaveUp){close();return}
 sfx.win();confetti();lockUI(`<div class="pop" style="font-size:64px">🔓</div><h2>${t("passed")}</h2><p>${t("score")}: <b>${ok}/${total}</b></p><button class="primary" id="done">${t("unlock")}</button>`);$("#done").onclick=close}
function close(){$("#lock").hidden=true;document.body.style.overflow="";run=null;render()}

save();document.addEventListener("keydown",e=>{if(!run||run.phase!=="exam")return;const n=+e.key;if(n>=1&&n<=4){const b=$$(".opt")[n-1];if(b&&!b.disabled)b.click()}});
addEventListener("focusin",e=>{if(run&&!$("#lock").hidden&&!$("#lock").contains(e.target))$("#lockState").focus()});
applyLang();route();
try{const r=JSON.parse(localStorage.getItem("qeflo.run")||"null");const s=r&&S.subjects.find(x=>x.id===r.sid);if(s&&s.qs.length>=3){begin({s,mins:r.mins,total:r.total+(r.strict?30:0),end:r.end+(r.strict?30000:0),count:r.count,pass:r.pass,left:r.left+1,strict:r.strict,phase:r.phase})}else localStorage.removeItem("qeflo.run")}catch(e){}
if("serviceWorker"in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{});
})();
