import{f as B,h as k,F,N as a,d as K,m as E,u as S}from"./index-fcgqg5a3.js";function O(){const e=["indexedDB","webkitIndexedDB","mozIndexedDB","OIndexedDB","msIndexedDB"];for(let s=0,n=e.length;s<n;s++){const u=e[s];if(window[u])return window[u]}}const b=O();function I(e,s){if(typeof e!=typeof s)return!1;if(typeof e!="object")return e===s;const n=Object.keys(e),u=Object.keys(s);if(n.length!==u.length)return!1;for(let d of n)if(!I(e[d],s[d]))return!1;return!0}function P(e){return new Promise(s=>{const n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.send(),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(n.status===200?s(n.response):s(e))}})}const g="ocstore";function h(e){const s=e.dbName,n=e.keypath,u=e.version,d=e.type||(n?"getItem":"clear"),w=!!e.isFile;return new Promise((p,i)=>{if(b||i({result:"error",msg:"indexedDB在该设备不兼容"}),d!=="clear"&&!n&&i({result:"error",msg:"keypath不能为空"}),d==="clear"){const r=b.deleteDatabase(s);r.onsuccess=function(){p({result:"success",msg:"成功删除数据库"})},r.onerror=function(){i({result:"error",msg:"删除数据库失败"})};return}const l=b.open(s,typeof u!="number"?1:u);let m;const D=(r="readwrite")=>m.transaction([g],r).objectStore(g),x=r=>new Promise((t,c)=>{try{const o=D().get(r);o.onerror=function(){c("onerror")},o.onsuccess=function(){const f=o.result;t(f)}}catch(o){c(o)}});function v(r,t){return new Promise((c,o)=>{try{const f=D().put(t,r);f.onerror=function(){o()},f.onsuccess=function(){c(r)}}catch(f){o(f)}})}function q(r){return new Promise((t,c)=>{try{const o=D().delete(r);o.onerror=function(){c()},o.onsuccess=function(){t(r)}}catch(o){c(o)}})}l.onupgradeneeded=()=>{m=l.result,m.objectStoreNames.contains(g)||m.createObjectStore(g)},l.onsuccess=()=>{if(m=l.result,m.onerror=function(){i({result:"error",msg:"Error creating/accessing IndexedDB database"})},d==="getItem"){x(n).then(t=>{p({result:"success",data:t,msg:"success"})},t=>{i({result:"error",msg:t})});return}if(d==="removeItem"){q(n).then(()=>{p({result:"success",data:null,msg:"success"})},t=>{i({result:"error",msg:t})});return}const r=t=>{v(n,t).then(()=>{p({result:"success",msg:"success"})},c=>{i({result:"error",msg:c})})};x(n).then(t=>{if(w){if(!t||typeof t=="string"&&/^https?:\/\//.test(t)){P(e.data).then(c=>{r(c)},()=>{i({result:"error",msg:"error"})});return}}else if(!I(t,e.data)){r(e.data);return}p({result:"success",msg:"success"})})},l.onerror=function(){i({result:"error",msg:"数据库打开报错"})},l.onblocked=function(){i({result:"error",msg:"Your database version can't be upgraded because the app is open somewhere else."})}})}const R=a("h1",null,"@reaf-toolkit/indexedDB",-1),U=a("blockquote",null,[a("p",null,"indexedDB 封装")],-1),$=a("h1",null,"Installation",-1),z=a("h2",null,"Using npm:",-1),M=a("pre",null,[a("code",{class:"language-zsh","v-pre":"true"},"$ npm i -g npm\n$ npm i --save @reaf-toolkit/indexedDB\n")],-1),V=a("h2",null,"Using yarn:",-1),C=a("pre",null,[a("code",{class:"language-zsh","v-pre":"true"},"$ yarn add @reaf-toolkit/indexedDB\n")],-1),H=a("h2",null,"Usage",-1),L=a("pre",null,[a("code",{class:"language-ts","v-pre":"true"},'import indexedDB from "@reaf-toolkit/indexedDB";\n\nconst dbName = "imgFile";\nconst fileKey = "favicon.png";\n\nindexedDB({\n  dbName,\n  keypath: fileKey,\n  type: "setItem",\n  isFile: true,\n  data: fileKey,\n});\n\nindexedDB({\n  dbName,\n  keypath: fileKey,\n  type: "getItem",\n});\n\nindexedDB({\n  dbName,\n  keypath: fileKey,\n  type: "removeItem",\n});\n\nindexedDB({\n  dbName,\n  type: "clear",\n});\n\nindexedDB({\n  dbName: "jsondata",\n  keypath: "testname",\n  type: "setItem",\n  data: {\n    name: "sunshine",\n  },\n});\n')],-1);function T(e,s){return B(),k(F,null,[R,U,$,z,M,V,C,H,L],64)}const N={render:T};N.__hmrId="/Users/sunshine/gitStore/visible/packages/indexedDB/README.md";const X={class:"markdown-body"},y="imgFile",_="favicon.png",G=K({__name:"indexedDB",setup(e){return h({dbName:y,keypath:_,type:"setItem",isFile:!0,data:_}),h({dbName:y,keypath:_,type:"getItem"}),h({dbName:y,keypath:_,type:"removeItem"}),h({dbName:y,type:"clear"}),h({dbName:"jsondata",keypath:"testname",type:"setItem",data:{name:"sunshine"}}),(s,n)=>(B(),k("div",X,[E(S(N))]))}});export{G as default};