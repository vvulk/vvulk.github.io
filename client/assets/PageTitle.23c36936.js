import{a as b,l as h,c as y}from"./index.95542f14.js";import{e as C,f as s,o as r,c as u,h as c,w as _,b as n,r as l,d as p,v as o,x as i,u as d,g as w}from"./vendor.ef15629f.js";const B={class:"paragraph rem-125"},k=C({props:{title:{default:void 0},subtitle:{default:void 0},text:{default:void 0},inverted:{type:Boolean,default:!1},aligned:{type:Boolean,default:!1},leading:{type:Boolean,default:!1}},setup(t){const e=t,g=s(()=>[e.aligned&&"is-aligned",e.leading&&"is-leading"]),f=s(()=>[e.inverted?"text-white":"text-gradient"]),m=s(()=>[e.aligned?"":"mx-auto"]);return(a,N)=>{const v=h,x=y;return r(),u("div",{class:i(["page-title",d(g)])},[c(v,{tag:"h3",size:5,weight:"bold",inverted:e.inverted,class:"m-0 pb-5"},{default:_(()=>[n("span",{class:i(d(f))},[l(a.$slots,"subtitle",{},()=>[p(o(t.subtitle),1)],!0)],2)]),_:3},8,["inverted"]),c(x,{tag:"h1",size:2,weight:"bold",inverted:e.inverted,leading:""},{default:_(()=>[n("span",null,[l(a.$slots,"default",{},()=>[p(o(t.title),1)],!0)])]),_:3},8,["inverted"]),e.text?(r(),u("div",{key:0,class:i(["max-w-5",d(m)])},[n("p",B,o(e.text),1)],2)):w("",!0),l(a.$slots,"content",{},void 0,!0)],2)}}});var z=b(k,[["__scopeId","data-v-16f868b6"]]);export{z as _};