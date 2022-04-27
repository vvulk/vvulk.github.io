import{_ as $}from"./DemoLinks.a671367b.js";import{_ as v,a as q}from"./DemoTitle.a57ca7d7.js";import{p as S,b as h,j as x}from"./index.95542f14.js";import{_ as f,a as b}from"./PrismCode.ad4f84de.js";import{e as d,o as u,t as j,w as t,h as e,b as a,u as n,d as i,c as w}from"./vendor.ef15629f.js";import{_ as k}from"./AvatarGroup.ff7147b3.js";import{D as C}from"./DocumentationFooter.13db3194.js";import"./Hero.6770d9b7.js";import"./vue.runtime.esm-bundler.f9ec8e20.js";import"./FooterBubbles.8a82e92f.js";const A=`
export type AvatarSimpleSize = 'small' | 
            'medium' | 'large' | 'big' | 'xl' | ''

export interface AvatarSimpleProps {
  size?: AvatarSimpleSize
  picture: string
  squared?: boolean
  badge?: string
}
`,z=`
export const avatars = [
  {
    picture: 'https://dummyimage.com/150x150.jpg',
  },
  {
    picture: 'https://dummyimage.com/150x150.jpg',
  },
  {
    picture: 'https://dummyimage.com/150x150.jpg',
  },
]
`,D=`
<template>
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="small"
  />
  <AvatarSimple 
    picture="https://dummyimage.com/150x150.jpg" />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="medium"
  />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="large"
  />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="big"
  />
  <AvatarSimple
    picture="https://dummyimage.com/150x150.jpg"
    size="xl"
  />
</template>
`,T=`
<template>
  <AvatarSimple picture="https://dummyimage.com/150x150" size="small" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="medium" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="large" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="big" squared />
  <AvatarSimple picture="https://dummyimage.com/150x150" size="xl" squared />
</template>
`,G=`
<template>
  <AvatarSimple
    picture="https://dummyimage.com/150x150"
    size="medium"
    badge="/@src/assets/icons/flags/united-states-of-america.svg"
  />
</template>
`,P=`
<template>
  <AvatarGroup 
    size="medium" 
    :avatars="avatars" 
    :limit="5" 
    compact 
    counter 
  />
</template>
`,V=`
<script setup lang="ts">
import type { AvatarSimpleProps } from '/@src/components/base/avatar/AvatarSimple.vue'

export type AvatarGroupSize = 'small' | 'medium' | 'large'

export interface AvatarGroupProps {
  avatars: AvatarSimpleProps[]
  size?: AvatarGroupSize
  compact?: boolean
  squared?: boolean
  limit?: number
  counter?: boolean
  boxed?: boolean
}
<\/script>
`,B={class:"mx-auto max-w-6"},Y={class:"py-6"},N={class:"is-flex is-align-items-flex-end is-justify-content-center"},E={class:"px-2"},L={class:"px-2"},F={class:"px-2"},H={class:"px-2"},I={class:"px-2"},J={class:"px-2"},K=a("p",{class:"paragraph rem-95"},[i(" Avatars have become a central component in almost all web and mobile application. Vulk avatars come in different flavors. You can control the avatar size using the "),a("code",null,"size"),i(" prop. Accepted values are "),a("code",null,"small"),i(" , "),a("code",null,"medium"),i(" , "),a("code",null,"large"),i(" , "),a("code",null,"big"),i(" , "),a("code",null,"xl"),i(" . ")],-1),M=d({setup(_){return(r,g)=>{const m=v,s=S,o=f,c=b,p=h,l=x;return u(),j(l,{id:"avatar-size-demo","bordered-bottom":""},{default:t(()=>[e(p,null,{default:t(()=>[a("div",B,[a("div",Y,[e(m,{title:"Avatar Sizes",subtitle:"Available avatar sizes"}),a("div",N,[a("div",E,[e(s,{picture:"/assets/demo/img/avatars/14.jpg",size:"small"})]),a("div",L,[e(s,{picture:"/assets/demo/img/avatars/41.jpg"})]),a("div",F,[e(s,{picture:"/assets/demo/img/avatars/30.jpg",size:"medium"})]),a("div",H,[e(s,{picture:"/assets/demo/img/avatars/42.jpg",size:"large"})]),a("div",I,[e(s,{picture:"/assets/demo/img/avatars/39.jpg",size:"big"})]),a("div",J,[e(s,{picture:"/assets/demo/img/avatars/25.jpg",size:"xl"})])])]),e(c,null,{code:t(()=>[e(o,{language:"html",code:n(D)},null,8,["code"])]),props:t(()=>[e(o,{language:"javascript",code:n(A)},null,8,["code"])]),sample:t(()=>[e(o,{language:"javascript",code:n(z)},null,8,["code"])]),usage:t(()=>[K]),_:1})])]),_:1})]),_:1})}}}),O={class:"mx-auto max-w-7"},Q={class:"py-6"},R={class:"is-flex is-align-items-flex-end is-justify-content-center"},U={class:"px-2"},W={class:"px-2"},X={class:"px-2"},Z={class:"px-2"},ee={class:"px-2"},ae={class:"px-2"},se=a("p",{class:"paragraph rem-95"},[i(" Avatars have become a central component in almost all web and mobile application. Vulk avatars come in different flavors. You can control the avatar shape and make it square by using the "),a("code",null,"squared"),i(" prop. This prop is a "),a("code",null,"boolean"),i(" , it doesn't need any value. ")],-1),te=d({setup(_){return(r,g)=>{const m=v,s=S,o=f,c=b,p=h,l=x;return u(),j(l,{id:"avatar-square-demo","bordered-bottom":""},{default:t(()=>[e(p,null,{default:t(()=>[a("div",O,[a("div",Q,[e(m,{title:"Squared shape",subtitle:"Avatar squared variation"}),a("div",R,[a("div",U,[e(s,{picture:"/assets/demo/img/avatars/14.jpg",size:"small",squared:""})]),a("div",W,[e(s,{picture:"/assets/demo/img/avatars/41.jpg",squared:""})]),a("div",X,[e(s,{picture:"/assets/demo/img/avatars/30.jpg",size:"medium",squared:""})]),a("div",Z,[e(s,{picture:"/assets/demo/img/avatars/42.jpg",size:"large",squared:""})]),a("div",ee,[e(s,{picture:"/assets/demo/img/avatars/39.jpg",size:"big",squared:""})]),a("div",ae,[e(s,{picture:"/assets/demo/img/avatars/25.jpg",size:"xl",squared:""})])])]),e(c,null,{code:t(()=>[e(o,{language:"html",code:n(T)},null,8,["code"])]),props:t(()=>[e(o,{language:"javascript",code:n(A)},null,8,["code"])]),sample:t(()=>[e(o,{language:"javascript",code:n(z)},null,8,["code"])]),usage:t(()=>[se]),_:1})])]),_:1})]),_:1})}}}),oe={class:"mx-auto max-w-6"},ie={class:"py-6"},ne={class:"is-flex is-align-items-flex-end is-justify-content-center"},ce={class:"px-2"},re={class:"px-2"},me={class:"px-2"},pe={class:"px-2"},le={class:"px-2"},de={class:"px-2"},ue={class:"is-flex is-align-items-flex-end is-justify-content-center pt-4"},_e={class:"px-2"},ge={class:"px-2"},ve={class:"px-2"},he={class:"px-2"},xe={class:"px-2"},fe={class:"px-2"},be=a("p",{class:"paragraph rem-95"},[i(" Avatars have become a central component in almost all web and mobile application. Vulk avatars come in different flavors. You can add a badge to any avatar using the "),a("code",null,"badge"),i(" prop. The badge prop type is a "),a("code",null,"string"),i(" and waits for an image url. ")],-1),je=d({setup(_){return(r,g)=>{const m=v,s=S,o=f,c=b,p=h,l=x;return u(),j(l,{id:"avatar-badge-demo","bordered-bottom":""},{default:t(()=>[e(p,null,{default:t(()=>[a("div",oe,[a("div",ie,[e(m,{title:"Badge",subtitle:"Avatar badge images"}),a("div",ne,[a("div",ce,[e(s,{picture:"/assets/demo/img/avatars/14.jpg",size:"small",badge:"/assets/icons/flags/canada.svg"})]),a("div",re,[e(s,{picture:"/assets/demo/img/avatars/41.jpg",badge:"/assets/icons/flags/spain.svg"})]),a("div",me,[e(s,{picture:"/assets/demo/img/avatars/30.jpg",size:"medium",badge:"/assets/icons/flags/brazil.svg"})]),a("div",pe,[e(s,{picture:"/assets/demo/img/avatars/42.jpg",size:"large",badge:"/assets/icons/flags/france.svg"})]),a("div",le,[e(s,{picture:"/assets/demo/img/avatars/39.jpg",size:"big",badge:"/assets/icons/flags/germany.svg"})]),a("div",de,[e(s,{picture:"/assets/demo/img/avatars/25.jpg",size:"xl",badge:"/assets/icons/flags/united-states-of-america.svg"})])]),a("div",ue,[a("div",_e,[e(s,{picture:"/assets/demo/img/avatars/14.jpg",size:"small",badge:"/assets/icons/flags/canada.svg",squared:""})]),a("div",ge,[e(s,{picture:"/assets/demo/img/avatars/41.jpg",badge:"/assets/icons/flags/spain.svg",squared:""})]),a("div",ve,[e(s,{picture:"/assets/demo/img/avatars/30.jpg",size:"medium",badge:"/assets/icons/flags/brazil.svg",squared:""})]),a("div",he,[e(s,{picture:"/assets/demo/img/avatars/42.jpg",size:"large",badge:"/assets/icons/flags/france.svg",squared:""})]),a("div",xe,[e(s,{picture:"/assets/demo/img/avatars/39.jpg",size:"big",badge:"/assets/icons/flags/germany.svg",squared:""})]),a("div",fe,[e(s,{picture:"/assets/demo/img/avatars/25.jpg",size:"xl",badge:"/assets/icons/flags/united-states-of-america.svg",squared:""})])])]),e(c,null,{code:t(()=>[e(o,{language:"html",code:n(G)},null,8,["code"])]),props:t(()=>[e(o,{language:"javascript",code:n(A)},null,8,["code"])]),sample:t(()=>[e(o,{language:"javascript",code:n(z)},null,8,["code"])]),usage:t(()=>[be]),_:1})])]),_:1})]),_:1})}}}),ze={class:"mx-auto max-w-6"},Se={class:"py-6"},Ae={class:"is-flex is-align-items-flex-end is-justify-content-center"},ye=a("div",{class:"py-4"},null,-1),$e={class:"is-flex is-align-items-flex-end is-justify-content-center"},qe=a("div",{class:"py-4"},null,-1),we={class:"is-flex is-align-items-flex-end is-justify-content-center pt-4"},ke=a("p",{class:"paragraph rem-95"},[i(" Avatars have become a central component in almost all web and mobile application. Vulk avatars come in different flavors. Avatars can be grouped using the "),a("code",null,"<AvatarGroup />"),i(" component. It waits for an "),a("code",null,"Array"),i(" of avatars. You can also control the size, the shape, the number of rendered avatars and if you wish to display a counter for the remaining unshown avatars. ")],-1),Ce=d({setup(_){const r=[{picture:"/assets/demo/img/avatars/43.jpg"},{picture:"/assets/demo/img/avatars/42.jpg"},{picture:"/assets/demo/img/avatars/57.jpg"},{picture:"/assets/demo/img/avatars/19.jpg"},{picture:"/assets/demo/img/avatars/25.jpg"},{picture:"/assets/demo/img/avatars/39.jpg"},{picture:"/assets/demo/img/avatars/41.jpg"}];return(g,m)=>{const s=v,o=k,c=f,p=b,l=h,y=x;return u(),j(y,{id:"avatar-group-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[a("div",ze,[a("div",Se,[e(s,{title:"Group",subtitle:"Avatar groups"}),a("div",Ae,[e(o,{size:"medium",avatars:r,limit:5,compact:"",counter:""})]),ye,a("div",$e,[e(o,{size:"small",avatars:r,limit:3})]),qe,a("div",we,[e(o,{avatars:r,limit:5,squared:"",counter:"",compact:""})])]),e(p,null,{code:t(()=>[e(c,{language:"html",code:n(P)},null,8,["code"])]),props:t(()=>[e(c,{language:"javascript",code:n(V)},null,8,["code"])]),sample:t(()=>[e(c,{language:"javascript",code:n(z)},null,8,["code"])]),usage:t(()=>[ke]),_:1})])]),_:1})]),_:1})}}}),Fe=d({setup(_){const r=[{label:"Sizes",target:"avatar-size-demo"},{label:"Square",target:"avatar-square-demo"},{label:"Badge",target:"avatar-badge-demo"},{label:"Group",target:"avatar-group-demo"}];return(g,m)=>{const s=q,o=$;return u(),w("div",null,[e(s,{title:"Avatar Component",subtitle:"Avatars have become a central component in almost all web and mobile application. Explore Vulk avatars."}),e(o,{links:r,width:"340px"}),e(M),e(te),e(je),e(Ce),e(C)])}}});export{Fe as default};
