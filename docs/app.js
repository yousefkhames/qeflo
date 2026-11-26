(()=>{
"use strict";
const T={ar:{nav_home:"الرئيسية",nav_bank:"بنك الأسئلة",nav_stats:"إحصائيات",eyebrow:"قفل المذاكرة بامتحان",h1:"التليفون مقفول لحد ما تثبت إنك ذاكرت.",lead:"ابدأ جلسة مذاكرة، وقفلو بيقفل الشاشة عليك. ولما الوقت يخلص، مفيش فتح غير لما تحل امتحان قصير في اللي ذاكرته.",s1:"اختار المادة والوقت",s2:"ذاكر والشاشة مقفولة",s3:"حل الامتحان وافتح",start_h:"ابدأ جلسة",subject:"المادة",minutes:"مدة المذاكرة (دقيقة)",qcount:"عدد أسئلة الامتحان",pass:"نسبة النجاح %",start_btn:"اقفل وابدأ المذاكرة",honest:"النسخة دي بتشتغل في المتصفح وبتقفل صفحة قفلو نفسها. القفل على مستوى النظام كله جاي في تطبيق الأندرويد (موجود في خطة المشروع).",bank_h:"المواد",new_subject:"اسم مادة جديدة",add:"إضافة",gen_h:"ولّد أسئلة من ملاحظاتك",gen_p:"الصق ملخصك. قفلو بيطلع جمل مهمة ويخفي الكلمة المفتاحية ويعملها اختيار من متعدد، كله على جهازك.",notes_ph:"الصق ملاحظات المذاكرة هنا (جمل كاملة، كل جملة في سطر أو تنتهي بنقطة)",gen_btn:"ولّد أسئلة",manual_h:"أضف سؤال بإيدك",q_ph:"نص السؤال",a_right:"الإجابة الصح",a_wrong1:"غلط 1",a_wrong2:"غلط 2",a_wrong3:"غلط 3",export:"تصدير",import:"استيراد",stats_h:"إحصائياتك",foot:"Qeflo - مشروع مفتوح المصدر. صُنع لطلاب مصر.",locked:"مقفول",studying:"ذاكر دلوقتي. الشاشة مقفولة.",left_cnt:"خرجت من الصفحة",finish_early:"خلصت بدري؟ ابدأ الامتحان",give_up:"استسلام (بيتسجل في الإحصائيات)",exam_time:"وقت الامتحان",q_of:"سؤال",need:"المطلوب للنجاح",passed:"عدّيت. مبروك، اتفتح.",failed:"لسه. ذاكر شوية وجرّب امتحان جديد.",unlock:"افتح",retry:"امتحان جديد (بعد 20 ثانية)",wait:"استنى",score:"نتيجتك",no_q:"المادة دي مفيهاش أسئلة كفاية (محتاج 3 على الأقل). ضيف من بنك الأسئلة.",gen_ok:"اتضافت أسئلة:",gen_none:"ملقيتش جمل مناسبة. اكتب جمل أطول.",sessions:"جلسات",passrate:"نسبة النجاح",mins:"دقايق مذاكرة",streak:"أيام متتالية",qs:"سؤال",del:"حذف",conf:"متأكد إنك عايز تستسلم؟",none:"لسه مفيش جلسات."},
en:{nav_home:"Home",nav_bank:"Question bank",nav_stats:"Stats",eyebrow:"STUDY LOCK, UNLOCKED BY AN EXAM",h1:"Your phone stays locked until you prove you studied.",lead:"Start a study session and Qeflo locks the screen on you. When time is up, the only way out is a short exam on what you just studied.",s1:"Pick subject and time",s2:"Study, screen locked",s3:"Pass the exam, unlock",start_h:"Start a session",subject:"Subject",minutes:"Study time (minutes)",qcount:"Exam questions",pass:"Pass mark %",start_btn:"Lock in and start",honest:"This web version locks the Qeflo page itself. System-wide locking comes with the Android app (see the project roadmap).",bank_h:"Subjects",new_subject:"New subject name",add:"Add",gen_h:"Generate questions from your notes",gen_p:"Paste your summary. Qeflo picks key sentences, hides the key term and makes a multiple-choice question. Everything stays on your device.",notes_ph:"Paste study notes here (full sentences, one per line or ending with a period)",gen_btn:"Generate questions",manual_h:"Add a question by hand",q_ph:"Question text",a_right:"Right answer",a_wrong1:"Wrong 1",a_wrong2:"Wrong 2",a_wrong3:"Wrong 3",export:"Export",import:"Import",stats_h:"Your stats",foot:"Qeflo - open source. Built for students.",locked:"Locked",studying:"Study now. The screen is locked.",left_cnt:"times you left the page",finish_early:"Done early? Start the exam",give_up:"Give up (logged in stats)",exam_time:"Exam time",q_of:"Question",need:"Needed to pass",passed:"Passed. You're unlocked.",failed:"Not yet. Review and try a fresh exam.",unlock:"Unlock",retry:"New exam (after 20 s)",wait:"Wait",score:"Your score",no_q:"This subject needs at least 3 questions. Add some in the question bank.",gen_ok:"Questions added:",gen_none:"No usable sentences found. Write longer sentences.",sessions:"Sessions",passrate:"Pass rate",mins:"Minutes studied",streak:"Day streak",qs:"questions",del:"Delete",conf:"Really give up?",none:"No sessions yet."}};
const SEED=[["Computer Science / علوم حاسب",[["What does CPU stand for?","Central Processing Unit","Central Program Unit","Computer Power Unit","Core Processing Utility"],["Which data structure uses LIFO order?","Stack","Queue","Heap","Graph"],["What is the time complexity of binary search?","O(log n)","O(n)","O(n log n)","O(1)"],["Which keyword defines a function in Python?","def","func","function","lambda only"],["What does SQL stand for?","Structured Query Language","Simple Query Logic","Sequential Query Language","Structured Question List"]]]];
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
 $("#subjectList").innerHTML=S.subjects.map(s=>`<div><span class="chip">${esc(s.name)} · ${s.qs.length} ${t("qs")} <button data-del="${s.id}" title="${t("del")}">✕</button></span></div>`).join("");
 $$("[data-del]").forEach(b=>b.onclick=()=>{S.subjects=S.subjects.filter(s=>s.id!==b.dataset.del);save();render()});
 renderStats()}

$("#addSubject").onclick=()=>{const n=$("#newSubject").value.trim();if(!n)return;S.subjects.push({id:uid(),name:n,qs:[]});$("#newSubject").value="";save();render()};
$("#mAdd").onclick=()=>{const s=S.subjects.find(x=>x.id===$("#mSubject").value),q=$("#mQ").value.trim(),a=$("#mA").value.trim(),w=["#mB","#mC","#mD"].map(i=>$(i).value.trim()).filter(Boolean);
 if(!s||!q||!a||w.length<1)return;s.qs.push({q,a,w});["#mQ","#mA","#mB","#mC","#mD"].forEach(i=>$(i).value="");save();render()};

// Question generator: cloze from notes. Key term = longest capitalised/long word; distractors from other notes' terms.
function genQuestions(text){
 const sents=text.split(/(?<=[.!؟?\n])\s+|\n+/).map(s=>s.trim()).filter(s=>s.split(/\s+/).length>=6);
 const stop=new Set("this that with from have been were which their there about because these those will would could should into than then also each other when what where while using used uses".split(" "));
 const words=s=>(s.match(/[\p{L}\p{N}][\p{L}\p{N}'-]{3,}/gu)||[]).filter(w=>!stop.has(w.toLowerCase()));
 const pool=[...new Set(sents.flatMap(words))];
 const out=[];
 for(const s of sents){const ws=words(s);if(!ws.length)continue;
  const key=[...ws].sort((a,b)=>(/^[A-Z0-9]/.test(b)-/^[A-Z0-9]/.test(a))||b.length-a.length)[0];
  const d=shuffle(pool.filter(p=>p.toLowerCase()!==key.toLowerCase()&&Math.abs(p.length-key.length)<=4)).slice(0,3);
  if(d.length<3)continue;
  out.push({q:s.replace(key,"_____"),a:key,w:d})}
 return out}
$("#genBtn").onclick=()=>{const s=S.subjects.find(x=>x.id===$("#genSubject").value);const qs=genQuestions($("#notes").value);
 if(!qs.length){$("#genOut").innerHTML=`<p class="hint">${t("gen_none")}</p>`;return}
 s.qs.push(...qs);save();$("#notes").value="";render();$("#genOut").innerHTML=`<p class="hint">${t("gen_ok")} ${qs.length}</p>`+qs.slice(0,5).map(q=>`<div class="qitem">${esc(q.q)} <b>→ ${esc(q.a)}</b></div>`).join("")};
$("#exportBtn").onclick=()=>{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(S,null,2)],{type:"application/json"}));a.download="qeflo-backup.json";a.click()};
$("#importFile").onchange=async e=>{try{const d=JSON.parse(await e.target.files[0].text());if(d.subjects){S=d;save();render()}}catch(_){}};

// Stats
function streak(){const days=new Set(S.log.filter(l=>l.passed).map(l=>new Date(l.t).toDateString()));let n=0,d=new Date();while(days.has(d.toDateString())){n++;d.setDate(d.getDate()-1)}return n}
function renderStats(){const L=S.log,ok=L.filter(l=>l.passed).length;
 $("#kpis").innerHTML=[[L.length,t("sessions")],[L.length?Math.round(100*ok/L.length)+"%":"-",t("passrate")],[L.reduce((a,l)=>a+(l.mins||0),0),t("mins")],[streak(),t("streak")]].map(([a,b])=>`<div class="kpi"><b>${a}</b>${b}</div>`).join("");
 $("#history").innerHTML=L.length?L.slice(-15).reverse().map(l=>`<div class="qitem">${l.passed?"✅":"❌"} ${esc(l.subject)} · ${l.mins} min · ${l.score}/${l.total} · ${new Date(l.t).toLocaleString(lang==="ar"?"ar-EG":"en-GB")}</div>`).join(""):`<p class="hint">${t("none")}</p>`}

// Lock session
let run=null,tick=null;
const guard=e=>{e.preventDefault();e.returnValue=""};
function lockUI(h){$("#lockState").innerHTML=h}
$("#startBtn").onclick=()=>{
 const s=S.subjects.find(x=>x.id===$("#subjectSel").value);
 if(!s||s.qs.length<3){alert(t("no_q"));return}
 const mins=Math.max(1,Math.min(240,+$("#minutes").value||25));
 run={s,mins,total:mins*60,end:Date.now()+mins*60000,count:Math.max(3,Math.min(20,+$("#qcount").value||5)),pass:Math.max(50,Math.min(100,+$("#passPct").value||80)),left:0,phase:"study"};
 $("#lock").hidden=false;document.body.style.overflow="hidden";
 addEventListener("beforeunload",guard);
 (document.documentElement.requestFullscreen||(()=>{})).call(document.documentElement).catch(()=>{});
 studyUI();clearInterval(tick);tick=setInterval(step,500)};
document.addEventListener("visibilitychange",()=>{if(run&&run.phase==="study"&&document.hidden){run.left++;const e=$("#lcnt");if(e)e.textContent=run.left}});
function fmt(s){s=Math.max(0,s);return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0")}
function studyUI(){lockUI(`<p class="muted">🔒 ${t("locked")} · ${esc(run.s.name)}</p><div class="timer" id="tm"></div><div class="bar"><i id="pb"></i></div><p>${t("studying")}</p><p class="muted"><b id="lcnt">${run.left}</b> ${t("left_cnt")}</p><button class="primary" id="early">${t("finish_early")}</button><br><button class="ghost" id="giveup">${t("give_up")}</button>`);
 $("#early").onclick=startExam;$("#giveup").onclick=()=>{if(confirm(t("conf")))end(false,0,run.count,true)};step()}
function step(){if(!run||run.phase!=="study")return;const r=Math.ceil((run.end-Date.now())/1000);const tm=$("#tm");if(tm){tm.textContent=fmt(r);$("#pb").style.width=(100*(1-r/run.total))+"%"}if(r<=0)startExam()}
function startExam(){run.phase="exam";clearInterval(tick);run.qs=shuffle(run.s.qs).sort((a,b)=>(b.miss||0)-(a.miss||0)+(Math.random()-.5)).slice(0,run.count);run.wrong=[];run.i=0;run.ok=0;showQ()}
function showQ(){const q=run.qs[run.i],opts=shuffle([q.a,...shuffle(q.w).slice(0,3)]);
 lockUI(`<p class="muted">${t("exam_time")} · ${t("q_of")} ${run.i+1}/${run.qs.length}</p><div class="bar"><i style="width:${100*run.i/run.qs.length}%"></i></div><div class="q">${esc(q.q)}</div>${opts.map(o=>`<button class="opt" data-o="${esc(o)}">${esc(o)}</button>`).join("")}`);
 $$(".opt").forEach(b=>b.onclick=()=>{const good=b.dataset.o===q.a;if(good){run.ok++;if(q.miss)q.miss--}else{q.miss=(q.miss||0)+1;run.wrong.push(q)}$$(".opt").forEach(x=>{x.disabled=true;if(x.dataset.o===q.a)x.classList.add("right")});if(!good)b.classList.add("wrong");setTimeout(()=>{run.i++;run.i<run.qs.length?showQ():result()},900)})}
function result(){const pct=Math.round(100*run.ok/run.qs.length),ok=pct>=run.pass;
 if(ok){end(true,run.ok,run.qs.length);return}
 lockUI(`<h2>${t("failed")}</h2><p>${t("score")}: <b>${run.ok}/${run.qs.length}</b> (${pct}%) · ${t("need")}: ${run.pass}%</p><div style="text-align:start">${run.wrong.map(q=>`<div class="qitem muted">${esc(q.q)}<br><b style="color:#F5B83D">✔ ${esc(q.a)}</b></div>`).join("")}</div><button class="primary" id="again" disabled></button>`);save();
 let w=20;const b=$("#again");b.textContent=`${t("wait")} 20`;const iv=setInterval(()=>{b.textContent=`${t("wait")} ${w}`;if(w--<=0){clearInterval(iv);b.disabled=false;b.textContent=t("retry")}},1000);b.onclick=()=>{run.attempts=(run.attempts||1)+1;startExam()}}
function end(passed,ok,total,gaveUp){S.log.push({t:Date.now(),subject:run.s.name,mins:run.mins,passed,score:ok,total,left:run.left,gaveUp:!!gaveUp,attempts:run.attempts||1});save();
 removeEventListener("beforeunload",guard);clearInterval(tick);if(document.fullscreenElement)document.exitFullscreen().catch(()=>{});
 if(gaveUp){close();return}
 lockUI(`<div style="font-size:64px">🔓</div><h2>${t("passed")}</h2><p>${t("score")}: <b>${ok}/${total}</b></p><button class="primary" id="done">${t("unlock")}</button>`);$("#done").onclick=close}
function close(){$("#lock").hidden=true;document.body.style.overflow="";run=null;render()}

save();applyLang();route();
if("serviceWorker"in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{});
})();
