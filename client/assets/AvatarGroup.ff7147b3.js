import{a as f,p as g}from"./index.95542f14.js";import{e as y,f as t,y as o,o as a,c as s,F as q,q as x,t as B,x as r,u as n,b as z,v as C,g as b}from"./vendor.ef15629f.js";const k=y({props:{avatars:null,size:{default:void 0},compact:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},limit:{default:3},counter:{type:Boolean,default:!1},boxed:{type:Boolean,default:!1}},setup(l){const e=l,u=t(()=>[e.compact?"is-compact":"is-loose",e.boxed&&"is-boxed",e.squared&&"is-squared"]),c=t(()=>[e.size&&`is-${e.size}`,e.squared&&"is-squared"]),i=o(e.avatars.length),p=o(e.limit),d=i.value-p.value;return(h,A)=>{const _=g;return a(),s("div",{class:r(["avatar-group",n(u)])},[(a(!0),s(q,null,x(e.avatars.slice(0,e.limit),(m,v)=>(a(),B(_,{key:v,picture:m.picture,squared:e.squared,size:e.size},null,8,["picture","squared","size"]))),128)),e.counter&&e.limit<e.avatars.length?(a(),s("div",{key:0,class:r(["avatar-counter",n(c)])},[z("span",{class:"counter-inner"},"+"+C(d))],2)):b("",!0)],2)}}});var N=f(k,[["__scopeId","data-v-989138ba"]]);export{N as _};