import{a as k,c as v}from"./index.95542f14.js";import{_ as x}from"./PolkaDots.bcfb000f.js";import{e as g,f as _,o as e,c as t,b as o,h as n,g as i,F as y,q as w,x as l,u as p,w as C,v as u}from"./vendor.ef15629f.js";const D={class:"py-6"},b={key:0,class:"polka-wrap polka-1"},B={class:"icon-values-card"},V={class:"columns b-columns-half-tablet-p"},N=["data-icon"],z={class:"paragraph rem-85"},F={key:1,class:"polka-wrap polka-2"},I=g({props:{values:null,columns:{default:3},limit:{default:4},polkaDots:{type:Boolean,default:!1}},setup(r){const s=r,m=_(()=>[s.columns&&`is-${s.columns}`]),d=_(()=>[s.columns===6&&"mx-auto max-w-7",s.columns===4&&"mx-auto max-w-9"]);return(S,$)=>{const c=x,f=v;return e(),t("div",D,[o("div",{class:l(["icon-values",p(d)])},[s.polkaDots?(e(),t("div",b,[n(c)])):i("",!0),o("div",B,[o("div",V,[(e(!0),t(y,null,w(s.values.slice(0,s.limit),(a,h)=>(e(),t("div",{key:h,class:l(["column",p(m)])},[o("i",{class:l(["iconify",`text-${a.color}`]),"data-icon":a.icon},null,10,N),n(f,{tag:"h3",size:6,weight:"semi",leading:""},{default:C(()=>[o("span",null,u(a.title),1)]),_:2},1024),o("p",z,u(a.text),1)],2))),128))])]),s.polkaDots?(e(),t("div",F,[n(c)])):i("",!0)],2)])}}});var P=k(I,[["__scopeId","data-v-e1643a92"]]);export{P as _};
