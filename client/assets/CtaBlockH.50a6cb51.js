import{a as p,l as h,c as v,o as b}from"./index.95542f14.js";import{e as k,n as f,o as a,c as o,b as t,h as s,w as l,r as c,d as w,v as n,g as d,s as x}from"./vendor.ef15629f.js";const y={class:"py-6"},B={class:"cta-block p-0 d-column-mobile"},I={class:"cta-content mobile:mb-6"},C={color:"cta-content-inner"},D={class:"text-gradient"},N={class:"paragraph rem-115 mb-4 max-w-4"},T={key:0,class:"cta-image ml-auto"},V={key:1,class:"cta-image ml-auto"},H=k({props:{title:null,subtitle:null,smallText:null,image:{default:void 0},darkImage:{default:void 0},imageWidth:{default:"800"},imageHeight:{default:"532"},background:{default:void 0},inverted:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1}},setup(r){const e=r;return(i,S)=>{const _=h,u=v,m=b,g=f("background");return a(),o("div",y,[t("div",B,[t("div",I,[t("div",C,[s(_,{tag:"h4",size:6,weight:"bold",inverted:e.inverted,narrow:"",class:"pb-5"},{default:l(()=>[t("span",D,[c(i.$slots,"subtitle",{},()=>[w(n(e.smallText),1)],!0)])]),_:3},8,["inverted"]),s(u,{tag:"h3",size:3,weight:"bold",leading:""},{default:l(()=>[t("span",null,n(e.title),1)]),_:1}),t("p",N,n(e.subtitle),1),c(i.$slots,"default",{},void 0,!0)])]),e.image&&e.darkImage&&!e.background?(a(),o("div",T,[s(m,{src:e.image,"src-dark":e.darkImage,width:e.imageWidth,height:e.imageHeight,alt:"Cta image"},null,8,["src","src-dark","width","height"])])):d("",!0),!e.image&&!e.darkImage&&e.background?x((a(),o("div",V,null,512)),[[g,{src:e.background,placeholder:"https://dummyimage.com/800x600/ededed/000000"}]]):d("",!0)])])}}});var $=p(H,[["__scopeId","data-v-ccad67fc"]]);export{$ as _};