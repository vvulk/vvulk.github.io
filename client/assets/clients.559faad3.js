import{_ as C}from"./DemoLinks.a671367b.js";import{_ as k,a as R}from"./DemoTitle.a57ca7d7.js";import{D as S}from"./DocumentationFooter.13db3194.js";import{_ as f,a as h}from"./PrismCode.ad4f84de.js";import{_ as y}from"./DemoProps.8954fce9.js";import{b as B,j as E}from"./index.95542f14.js";import{_ as T}from"./LogoSection.b71cb166.js";import{c}from"./index.046fb491.js";import{e as g,o as m,c as b,h as o,w as s,u as e,F as w,b as r}from"./vendor.ef15629f.js";import{_ as A}from"./LogoMarquee.620f478f.js";import{_ as x}from"./CompanyGrid.7fa7f811.js";import"./Hero.6770d9b7.js";import"./FooterBubbles.8a82e92f.js";import"./vue.runtime.esm-bundler.f9ec8e20.js";import"./SimpleTableHeader.43d640fd.js";import"./MarqueeText.9df2572a.js";const L={props:[{name:"logos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},D=`
<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
<\/script>

<template>
  <LogoSection
    title="WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500"
    :logos="customerLogos"
  />
</template>
`,P=`
export const customerLogos = [
  {
    id: 0,
    logo: '/assets/brands/asuna.svg',
  },
  {
    id: 1,
    logo: '/assets/brands/vonmo.svg',
  },
  {
    id: 2,
    logo: '/assets/brands/covenant.svg',
  },
  {
    id: 3,
    logo: '/assets/brands/grubspot.svg',
  },
  {
    id: 4,
    logo: '/assets/brands/infinite.svg',
  },
  {
    id: 5,
    logo: '/assets/brands/kromo.svg',
  },
  {
    id: 6,
    logo: '/assets/brands/phasekit.svg',
  },
  {
    id: 7,
    logo: '/assets/brands/hewitt.svg',
  },
  {
    id: 8,
    logo: '/assets/brands/natchpay.svg',
  },
  {
    id: 9,
    logo: '/assets/brands/proactive.svg',
  },
  {
    id: 10,
    logo: '/assets/brands/tribe.svg',
  },
  {
    id: 11,
    logo: '/assets/brands/bobcot.svg',
  },
  {
    id: 12,
    logo: '/assets/brands/gutwork.svg',
  },
  {
    id: 13,
    logo: '/assets/brands/apollo.svg',
  },
  {
    id: 14,
    logo: '/assets/brands/tetra.svg',
  },
]
`,$=r("div",{class:"py-4"},null,-1),q=r("div",{class:"py-4"},null,-1),U=r("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced logo blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),N=g({setup(_){return(u,v)=>{const a=k,n=T,t=B,l=E,i=f,p=y,d=h;return m(),b(w,null,[o(l,{id:"block-a-demo","bordered-bottom":""},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block A",subtitle:"Advanced block A variation 1",link:"block-a-props"}),$,o(n,{title:"WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500",logos:e(c)},null,8,["logos"])]),_:1})]),_:1}),o(l,{color:"darker"},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block A",subtitle:"Advanced block A variation 2",link:"block-a-props",inverted:""}),o(n,{title:"WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500",logos:e(c),inverted:""},null,8,["logos"])]),_:1})]),_:1}),o(l,{id:"block-a-props","bordered-bottom":""},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block A Props",subtitle:"Available props for block A"}),q,o(d,null,{code:s(()=>[o(i,{language:"html",code:e(D)},null,8,["code"])]),props:s(()=>[o(p,{props:e(L).props},null,8,["props"])]),sample:s(()=>[o(i,{language:"javascript",code:e(P)},null,8,["code"])]),usage:s(()=>[U]),_:1})]),_:1})]),_:1})],64)}}}),F={props:[{name:"logos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},O=`
<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
<\/script>

<template>
  <LogoMarquee :logos="customerLogos" compact />
</template>
`,V=`
export const customerLogos = [
  {
    id: 0,
    logo: '/assets/brands/asuna.svg',
  },
  {
    id: 1,
    logo: '/assets/brands/vonmo.svg',
  },
  {
    id: 2,
    logo: '/assets/brands/covenant.svg',
  },
  {
    id: 3,
    logo: '/assets/brands/grubspot.svg',
  },
  {
    id: 4,
    logo: '/assets/brands/infinite.svg',
  },
  {
    id: 5,
    logo: '/assets/brands/kromo.svg',
  },
  {
    id: 6,
    logo: '/assets/brands/phasekit.svg',
  },
  {
    id: 7,
    logo: '/assets/brands/hewitt.svg',
  },
  {
    id: 8,
    logo: '/assets/brands/natchpay.svg',
  },
  {
    id: 9,
    logo: '/assets/brands/proactive.svg',
  },
  {
    id: 10,
    logo: '/assets/brands/tribe.svg',
  },
  {
    id: 11,
    logo: '/assets/brands/bobcot.svg',
  },
  {
    id: 12,
    logo: '/assets/brands/gutwork.svg',
  },
  {
    id: 13,
    logo: '/assets/brands/apollo.svg',
  },
  {
    id: 14,
    logo: '/assets/brands/tetra.svg',
  },
]
`,W=r("div",{class:"py-4"},null,-1),j=r("div",{class:"py-4"},null,-1),H=r("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced logo blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),I=g({setup(_){return(u,v)=>{const a=k,n=A,t=B,l=E,i=f,p=y,d=h;return m(),b(w,null,[o(l,{id:"block-b-demo","bordered-bottom":""},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block B",subtitle:"Advanced block B variation 1",link:"block-b-props"}),W,o(n,{logos:e(c)},null,8,["logos"])]),_:1})]),_:1}),o(l,{color:"darker"},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block B",subtitle:"Advanced block B variation 2",link:"block-b-props",inverted:""}),o(n,{logos:e(c),inverted:""},null,8,["logos"])]),_:1})]),_:1}),o(l,{id:"block-b-props","bordered-bottom":""},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block B Props",subtitle:"Available props for block B"}),j,o(d,null,{code:s(()=>[o(i,{language:"html",code:e(O)},null,8,["code"])]),props:s(()=>[o(p,{props:e(F).props},null,8,["props"])]),sample:s(()=>[o(i,{language:"javascript",code:e(V)},null,8,["code"])]),usage:s(()=>[H]),_:1})]),_:1})]),_:1})],64)}}}),G={props:[{name:"logos",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"limit",type:"number",required:"false",default:"15",values:["number"]},{name:"compact",type:"boolean",required:"false",default:"false",values:["boolean"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},M=`
<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
<\/script>

<template>
  <CompanyGrid
    title="Who are our partners?"
    :logos="customerLogos"
    :limit="20"
  />
</template>
`,z=`
export const customerLogos = [
  {
    id: 0,
    logo: '/assets/brands/asuna.svg',
  },
  {
    id: 1,
    logo: '/assets/brands/vonmo.svg',
  },
  {
    id: 2,
    logo: '/assets/brands/covenant.svg',
  },
  {
    id: 3,
    logo: '/assets/brands/grubspot.svg',
  },
  {
    id: 4,
    logo: '/assets/brands/infinite.svg',
  },
  {
    id: 5,
    logo: '/assets/brands/kromo.svg',
  },
  {
    id: 6,
    logo: '/assets/brands/phasekit.svg',
  },
  {
    id: 7,
    logo: '/assets/brands/hewitt.svg',
  },
  {
    id: 8,
    logo: '/assets/brands/natchpay.svg',
  },
  {
    id: 9,
    logo: '/assets/brands/proactive.svg',
  },
  {
    id: 10,
    logo: '/assets/brands/tribe.svg',
  },
  {
    id: 11,
    logo: '/assets/brands/bobcot.svg',
  },
  {
    id: 12,
    logo: '/assets/brands/gutwork.svg',
  },
  {
    id: 13,
    logo: '/assets/brands/apollo.svg',
  },
  {
    id: 14,
    logo: '/assets/brands/tetra.svg',
  },
]
`,J=r("div",{class:"py-4"},null,-1),K=r("div",{class:"py-4"},null,-1),Q=r("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced logo blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),X=g({setup(_){return(u,v)=>{const a=k,n=x,t=B,l=E,i=f,p=y,d=h;return m(),b(w,null,[o(l,{id:"block-c-demo","bordered-bottom":""},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block C",subtitle:"Advanced block C variation 1",link:"block-b-props"}),J,o(n,{title:"Who are our partners?",logos:e(c),limit:20},null,8,["logos"])]),_:1})]),_:1}),o(l,{color:"darker"},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block C",subtitle:"Advanced block C variation 2",link:"block-b-props",inverted:""}),o(n,{title:"Who are our partners?",logos:e(c),limit:20,inverted:""},null,8,["logos"])]),_:1})]),_:1}),o(l,{id:"block-c-props","bordered-bottom":""},{default:s(()=>[o(t,null,{default:s(()=>[o(a,{title:"Block C Props",subtitle:"Available props for block C"}),K,o(d,null,{code:s(()=>[o(i,{language:"html",code:e(M)},null,8,["code"])]),props:s(()=>[o(p,{props:e(G).props},null,8,["props"])]),sample:s(()=>[o(i,{language:"javascript",code:e(z)},null,8,["code"])]),usage:s(()=>[Q]),_:1})]),_:1})]),_:1})],64)}}}),bo=g({setup(_){const u=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"}];return(v,a)=>{const n=R,t=C;return m(),b("div",null,[o(n,{title:"Advanced Clients",subtitle:"Discover Vulk's advanced blocks and learn how you can customize them to build incredible and memorable projects."}),o(t,{links:u,width:"360px"}),o(N),o(I),o(X),o(S)])}}});export{bo as default};
