import{_ as i,h as d,p as u,y as h,D as f,o as c,A as p,B as v,z as m,c as g,G as x}from"./chunks/framework.9b35f1b8.js";const M={__name:"文字雨",setup(_){let e=d(),a,n;return u(()=>{a=e.value.getContext("2d"),e.value.width=screen.availWidth,e.value.height=screen.availHeight,a.font="20px Arial";let l="Rarrot".split(""),r=Array(Math.ceil(e.value.width/2)).fill(0);n=setInterval(()=>{e.value&&(a.fillStyle="rgba(0,0,0,0.05)",a.fillRect(0,0,e.value.width,e.value.height),a.fillStyle="#0f0",r.forEach((t,s)=>{a.fillText(l[Math.floor(Math.random()*l.length)],s*10,t+10),r[s]=t>e.value.height||t>1e4*Math.random()?0:t+10}))},40)}),h(()=>{clearInterval(n)}),(l,r)=>{const o=f("block");return c(),p(o,null,{default:v(()=>[m("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1})}}},y=i(M,[["__scopeId","data-v-27a90ad4"]]),D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"cartoonsMD/文字雨.md","filePath":"cartoonsMD/文字雨.md","lastUpdated":1692103104000}'),k={name:"cartoonsMD/文字雨.md"},b=Object.assign(k,{setup(_){return(e,a)=>(c(),g("div",null,[x(y)]))}});export{D as __pageData,b as default};
