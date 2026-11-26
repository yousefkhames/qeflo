// End-to-end test: drives the real app in headless Chrome over the DevTools protocol (no dependencies, Node 22+).
// Usage: node tests/e2e.mjs   (needs google-chrome or chromium on PATH)
import {spawn} from "child_process";
const PORT=3199,DBG=9399;
const srv=spawn("node",["server/server.js"],{env:{...process.env,PORT:String(PORT)}});
const bin=process.env.CHROME||"google-chrome";
const ch=spawn(bin,["--headless","--no-sandbox","--disable-gpu",`--remote-debugging-port=${DBG}`,"--window-size=420,900","about:blank"]);
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
await sleep(2500);
const tabs=await (await fetch(`http://localhost:${DBG}/json`)).json();
const ws=new WebSocket(tabs.find(t=>t.type==="page").webSocketDebuggerUrl);await new Promise(r=>ws.onopen=r);
let id=0;const pend={};
ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.method==="Page.javascriptDialogOpening")ws.send(JSON.stringify({id:90000+(id++),method:"Page.handleJavaScriptDialog",params:{accept:true}}));if(m.id&&pend[m.id])pend[m.id](m)};
const send=(method,params={})=>new Promise(r=>{pend[++id]=r;ws.send(JSON.stringify({id,method,params}))});
const ev=async x=>(await send("Runtime.evaluate",{expression:x,returnByValue:true,awaitPromise:true})).result.result.value;
let fails=0;const ok=(n,c)=>{console.log((c?"PASS ":"FAIL ")+n);if(!c)fails++};
const answer=right=>ev(`(()=>{const st=JSON.parse(localStorage.getItem('qeflo.state'));const qq=document.querySelector('.q').textContent;const it=st.subjects.flatMap(s=>s.qs).find(x=>x.q===qq);if(!it)return false;const b=[...document.querySelectorAll('.opt')].find(o=>(o.dataset.o===it.a)===${right});b.click();return true})()`);
async function exam(rights){for(const r of rights){await answer(r);await sleep(1100)}}
await send("Page.enable");
for(const lang of ["ar","en"]){
 await send("Page.navigate",{url:`http://localhost:${PORT}/`});await sleep(800);
 await ev(`localStorage.clear();localStorage.setItem('qeflo.lang','${lang}')`);await ev("location.reload()");await sleep(900);
 ok(`[${lang}] page renders`,await ev(`document.documentElement.lang==='${lang}'&&document.querySelector('#startBtn').textContent.length>3`));
 await ev(`document.querySelector('#minutes').value='1';document.querySelector('#startBtn').click()`);await sleep(500);
 ok(`[${lang}] lock appears`,await ev(`!document.querySelector('#lock').hidden`));
 await ev("location.reload()");await sleep(1000);
 ok(`[${lang}] lock survives reload`,await ev(`!document.querySelector('#lock').hidden&&!!document.querySelector('#early')`));
 await ev(`document.querySelector('#early').click()`);await sleep(300);
 await exam([true,true,false,false,false]);
 ok(`[${lang}] failing exam stays locked`,await ev(`!document.querySelector('#lock').hidden&&!!document.querySelector('#again')`));
 await ev("location.reload()");await sleep(1000);
 await ev(`localStorage.removeItem('qeflo.run');location.reload()`);await sleep(900);
 await ev(`document.querySelector('#minutes').value='1';document.querySelector('#startBtn').click();document.querySelector('#early').click()`);await sleep(300);
 await exam([true,true,true,true,true]);
 ok(`[${lang}] passing exam unlocks`,await ev(`!!document.querySelector('#done')`));
 await ev(`document.querySelector('#done').click()`);await sleep(300);
 ok(`[${lang}] lock closes`,await ev(`document.querySelector('#lock').hidden`));
 await ev(`document.querySelector('#practiceBtn').click()`);await sleep(400);
 ok(`[${lang}] practice starts at exam`,await ev(`!!document.querySelector('.q')`));
 await exam([true,true,true,true,true]);
 ok(`[${lang}] practice finishes and closes`,await ev(`!!document.querySelector('#done')`));
 await ev(`document.querySelector('#done').click()`);await sleep(300);
 ok(`[${lang}] practice not logged`,await ev(`JSON.parse(localStorage.getItem('qeflo.state')).log.length===1`));
 await ev(`location.hash='#bank'`);await sleep(300);
 await ev(`document.querySelector('#notes').value='Photosynthesis converts light energy into chemical energy inside chloroplasts. Mitochondria produce most of the ATP needed by the cell. Ribosomes assemble proteins from amino acids using messenger RNA. The nucleus stores genetic information as DNA molecules.';document.querySelector('#genBtn').click()`);await sleep(300);
 ok(`[${lang}] generator makes questions`,await ev(`document.querySelectorAll('#genOut .qitem').length>=3`));
 await ev(`location.hash='#stats'`);await sleep(300);
 ok(`[${lang}] stats count the session`,await ev(`/1/.test(document.querySelector('.kpi b').textContent)`));
}
ch.kill();srv.kill();console.log(fails?`${fails} FAILED`:"ALL PASSED");process.exit(fails?1:0);
