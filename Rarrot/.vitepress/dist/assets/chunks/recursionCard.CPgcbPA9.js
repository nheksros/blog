import{d as i,D as h,o as s,c as o,F as u,E as k,a1 as x,a3 as f,ag as m,k as c,t as v,b as I,e as C,_ as p,ac as g,a as V,I as y,p as S,q as B}from"./framework.c3LoRyG_.js";const N={class:"inputStyle"},b=["onClick"],w=["onUpdate:modelValue"],$=i({name:"rarrot",__name:"recursionInput",props:{data:{}},setup(n){const d=(t,a)=>{console.log("🚀  cardData",t,a.target)};return(t,a)=>{const _=h("rarrot");return s(),o("div",N,[(s(!0),o(u,null,k(t.data,e=>{var r;return s(),o("div",{onClick:x(l=>d(e,l),["stop"])},[f(c("input",{"onUpdate:modelValue":l=>e.checked=l,type:"checkbox"},null,8,w),[[m,e.checked]]),c("span",null,v(e.index),1),(r=e==null?void 0:e.children)!=null&&r.length?(s(),I(_,{key:0,style:{"margin-left":"10px"},data:e.children},null,8,["data"])):C("",!0)],8,b)}),256))])}}}),E=p($,[["__scopeId","data-v-9dce52d0"]]),F=n=>(S("data-v-8d2885c4"),n=n(),B(),n),M={class:"card"},U=F(()=>c("header",null,[c("div",null," 标题 "),c("div",null," 副标题 ")],-1)),q=i({__name:"recursionCard",setup(n){const d=g([{index:"1-1",checked:!1,children:[{index:"1-1-1",checked:!1},{index:"1-1-2",checked:!1}]},{index:"1-2",checked:!1},{index:"1-3",checked:!1,children:[{index:"1-3-1",checked:!1},{index:"1-3-2",checked:!1,children:[{index:"1-3-2-1",checked:!1},{index:"1-3-2-2",checked:!1}]}]},{index:"1-4",checked:!1}]);return(t,a)=>(s(),o("div",M,[U,c("section",null,[c("div",null,[V(" 内容 "),y(E,{data:d},null,8,["data"])])])]))}}),T=p(q,[["__scopeId","data-v-8d2885c4"]]);export{T as r};
