import{e as y,y as d,n as k,o as a,c as t,b as r,F as b,q as x,s as w,x as C,A as m,z as B,t as L,h as z,u as _,a8 as F}from"./vendor.ef15629f.js";import{e as K}from"./lightbox.esm.e3850c07.js";import{a as N}from"./index.95542f14.js";const q={class:"py-6"},D={class:"image-grid-wrap"},I={class:"image-grid"},V={class:"image-row"},$=["onClick","onKeydown"],A=y({props:{items:null,squared:{type:Boolean,default:!1}},setup(u){var c,l;const n=u,p=d("all"),o=d(""),g=(l=(c=n.items)==null?void 0:c.map(e=>({name:e.image})))!=null?l:[],i=e=>{o.value=e},v=()=>{o.value=""};return(e,E)=>{const h=k("background");return a(),t("div",q,[r("div",D,[r("div",I,[r("div",V,[(a(!0),t(b,null,x(n.items.slice(0,6),(s,f)=>w((a(),t("div",{key:f,class:C(["has-background-image",`f-${s.size}`]),onClick:m(G=>i(s.image),["prevent"]),onKeydown:B(m(()=>i(s.image),["prevent"]),["space"])},null,42,$)),[[h,{src:s.image,placeholder:"https://dummyimage.com/800x600/ededed/000000"}]])),128))])])]),(a(),L(F,{to:"body"},[z(_(K),{images:_(g),"current-image-name":o.value,filter:p.value,"timeout-duration":5e3,"close-on-backdrop-click":!0,onOnLightboxClose:v},null,8,["images","current-image-name","filter"])]))])}}});var j=N(A,[["__scopeId","data-v-821e4ff8"]]);export{j as _};
