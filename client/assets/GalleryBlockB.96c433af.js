import{e as L,y as g,f as q,n as S,o as a,c as t,b as e,F as v,q as h,s as z,x as d,A as f,z as D,v as k,u as m,t as F,h as K,a8 as N,p as V,a as $}from"./vendor.ef15629f.js";import{e as A}from"./lightbox.esm.e3850c07.js";import{a as E}from"./index.95542f14.js";const _=o=>(V("data-v-220a15ba"),o=o(),$(),o),G={class:"image-grid"},M=["onClick","onKeydown"],O=_(()=>e("div",{class:"overlay"},null,-1)),T={class:"image-owner"},j=["src"],H={class:"name"},J={class:"photo-time"},P=_(()=>e("div",{class:"inner"},[e("div",{class:"like-overlay"}),e("i",{class:"iconify","data-icon":"feather:heart"})],-1)),Q=_(()=>e("span",{class:"is-sr-only"},"Like photo",-1)),R=[P,Q],U=L({props:{items:null,squared:{type:Boolean,default:!1},limit:{default:99}},setup(o){var u;const i=o,y=g("all"),r=g(""),b=((u=i.items)==null?void 0:u.map(n=>{var c;return(c=n.items.map(l=>({name:l.image})))!=null?c:[]})).flat(1),p=n=>{r.value=n},w=()=>{r.value=""},x=q(()=>[i.squared&&"is-squared"]);return(n,c)=>{const l=S("background");return a(),t("div",null,[e("div",{class:d(["image-grid-wrap",m(x)])},[e("div",G,[(a(!0),t(v,null,h(i.items.slice(0,i.limit),(B,C)=>(a(),t("div",{key:C,class:"image-row"},[(a(!0),t(v,null,h(B.items,(s,I)=>z((a(),t("div",{key:I,class:d(["has-background-image",`flex-${s.size}`]),onClick:f(X=>p(s.image),["prevent"]),onKeydown:D(f(()=>p(s.image),["prevent"]),["space"])},[O,e("div",T,[e("img",{class:"avatar",src:s.owner.avatar,alt:"featured image"},null,8,j),e("div",H,k(s.owner.name),1)]),e("div",J,k(s.date),1),e("a",{class:d(["photo-like",s.liked&&"is-liked"])},R,2)],42,M)),[[l,{src:s.image,placeholder:"https://dummyimage.com/800x600/ededed/000000"}]])),128))]))),128))])],2),(a(),F(N,{to:"body"},[K(m(A),{images:m(b),"current-image-name":r.value,filter:y.value,"timeout-duration":5e3,"close-on-backdrop-click":!0,onOnLightboxClose:w},null,8,["images","current-image-name","filter"])]))])}}});var se=E(U,[["__scopeId","data-v-220a15ba"]]);export{se as _};