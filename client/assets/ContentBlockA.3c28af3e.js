import{a as v,c as f,s as g,p as k}from"./index.95542f14.js";import{e as x,f as h,o as s,c as n,b as t,r as l,h as o,w as y,v as i,x as b,u as w,t as B,g as C,F as q,q as L}from"./vendor.ef15629f.js";const z={class:"py-6 mx-auto max-w-8"},A={class:"columns is-vcentered b-columns-half-tablet-p"},N={class:"column is-6"},S={class:"column is-6"},V={class:"mx-auto is-flex is-justify-content-center is-flex-wrap-wrap"},$=x({props:{title:null,text:null,link:{default:void 0},linkLabel:{default:"Learn More"},images:null,squared:{type:Boolean,default:!1},inverted:{type:Boolean,default:!1}},setup(r){const e=r,c=h(()=>[e.inverted&&"text-light"]);return(a,F)=>{const _=f,u=g,p=k;return s(),n("div",z,[t("div",A,[t("div",N,[l(a.$slots,"content",{},()=>[o(_,{tag:"h3",size:5,weight:"semi",leading:"",inverted:e.inverted},{default:y(()=>[t("span",null,i(e.title),1)]),_:1},8,["inverted"]),t("p",{class:b(["paragraph rem-95 small:text-centered",w(c)])},i(e.text),3),e.link?(s(),B(u,{key:0,label:e.linkLabel,link:e.link,size:"small"},null,8,["label","link"])):C("",!0)],!0)]),t("div",S,[l(a.$slots,"images",{},()=>[t("div",V,[(s(!0),n(q,null,L(e.images.slice(0,10),(d,m)=>(s(),n("div",{key:m,class:"image-wrap"},[o(p,{picture:d.url,squared:e.squared},null,8,["picture","squared"])]))),128))])],!0)])])])}}});var E=v($,[["__scopeId","data-v-48015f50"]]);export{E as _};