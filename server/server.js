// Zero-dependency backend: serves /public and stores state per device id in data/*.json
const http=require("http"),fs=require("fs"),path=require("path");
const PUB=path.join(__dirname,"..","public"),DATA=path.join(__dirname,"..","data");
fs.mkdirSync(DATA,{recursive:true});
const MIME={".html":"text/html",".js":"text/javascript",".css":"text/css",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"};
http.createServer((req,res)=>{
 const u=new URL(req.url,"http://x");
 if(u.pathname==="/api/state"){
  const id=(req.headers["x-device"]||"default").replace(/[^a-z0-9]/gi,"").slice(0,40)||"default",f=path.join(DATA,id+".json");
  if(req.method==="GET"){res.setHeader("content-type","application/json");return res.end(fs.existsSync(f)?fs.readFileSync(f):"{}")}
  if(req.method==="PUT"){let b="";req.on("data",c=>{b+=c;if(b.length>2e6)req.destroy()});req.on("end",()=>{try{JSON.parse(b);fs.writeFileSync(f,b);res.end("{\"ok\":true}")}catch(e){res.statusCode=400;res.end("{}")}});return}
 }
 let p=path.normalize(path.join(PUB,u.pathname==="/"?"index.html":u.pathname));
 if(!p.startsWith(PUB)||!fs.existsSync(p)){res.statusCode=404;return res.end("not found")}
 res.setHeader("content-type",MIME[path.extname(p)]||"application/octet-stream");res.end(fs.readFileSync(p));
}).listen(process.env.PORT||3000,()=>console.log("Qeflo on http://localhost:"+(process.env.PORT||3000)));
