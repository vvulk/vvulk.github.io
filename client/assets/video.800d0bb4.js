import{_ as S}from"./DemoLinks.a671367b.js";import{_ as b,a as V}from"./DemoTitle.a57ca7d7.js";import{D as q}from"./DocumentationFooter.13db3194.js";import{_ as k,a as v}from"./PrismCode.ad4f84de.js";import{_ as B}from"./DemoProps.8954fce9.js";import{b as y,j as h}from"./index.95542f14.js";import{_ as A}from"./VideoBlockA.765d7504.js";import{c as u,d as P}from"./index.0f18d7b9.js";import{e as d,o as m,c as _,h as e,w as t,u as o,F as x,b as C}from"./vendor.ef15629f.js";import{_ as j}from"./VideoBlockB.44dbaf83.js";import{_ as L}from"./VideoBlockC.6b68bbd2.js";import"./Hero.6770d9b7.js";import"./FooterBubbles.8a82e92f.js";import"./vue.runtime.esm-bundler.f9ec8e20.js";import"./SimpleTableHeader.43d640fd.js";const D={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"source",type:"string",required:"true",default:"undefined",values:["string"]},{name:"poster",type:"string",required:"true",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["string"]}],slots:[]},T=`
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
<\/script>

<template>
  <VideoBlockA
    title="On point delivery."
    source="/assets/video/meeting.mp4"
    poster="/assets/demo/img/posters/poster-1d.jpg"
    :features="features4"
  />
</template>
`,$=`
export const features4: SimpleFeature[] = [
  {
    title: 'Fast delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Tracking app',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Saved orders',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Private sales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]
`,O={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"source",type:"string",required:"true",default:"undefined",values:["string"]},{name:"poster",type:"string",required:"true",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["string"]}],slots:[]},w=`
<script setup lang="ts">
import { features5 } from '/@src/data/blocks/features'
<\/script>

<template>
  <VideoBlockB
    title="Our Product"
    :features="features5"
    source="/assets/video/meeting.mp4"
    poster="/assets/demo/img/posters/poster-2g.jpg"
  />
</template>
`,F=`
export const features5: IconFeature[] = [
  {
    title: 'Stay Relaxed',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    color: 'primary',
    icon: 'feather:coffee',
    link: '/',
  },
  {
    title: 'Save Time',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    color: 'green',
    icon: 'feather:clock',
    link: '/',
  },
  {
    title: 'Earn More',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed videbimus.',
    color: 'info',
    icon: 'feather:zap',
    link: '/',
  },
]
`,E={props:[{name:"title",type:"string",required:"true",default:"undefined",values:["string"]},{name:"features",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"source",type:"string",required:"true",default:"undefined",values:["string"]},{name:"poster",type:"string",required:"true",default:"undefined",values:["string"]},{name:"links",type:"boolean",required:"false",default:"false",values:["string"]}],slots:[]},N=`
<script setup lang="ts">
import { features4 } from '/@src/data/blocks/features'
<\/script>

<template>
  <VideoBlockC
    title="Our Product"
    :features="features4"
    source="/assets/video/meeting.mp4"
    poster="/assets/demo/img/posters/poster-3d.jpg"
  />
</template>
`,z=`
export const features4: SimpleFeature[] = [
  {
    title: 'Fast delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Tracking app',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Saved orders',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
  {
    title: 'Private sales',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    link: '/',
  },
]
`,H=C("p",{class:"paragraph rem-95"}," Video components have become a central part in every web and mobile application. Vulk video blocks come in different flavors. Take a look at the available props and easily set your first video block. ",-1),I=d({setup(f){return(c,g)=>{const r=b,i=A,s=y,a=h,l=k,n=B,p=v;return m(),_(x,null,[e(a,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block A",subtitle:"Block A variation 1",link:"block-a-props"}),e(i,{title:"On point delivery.",source:"/assets/video/meeting.mp4",poster:"/assets/demo/img/posters/poster-1d.jpg",features:o(u)},null,8,["features"])]),_:1})]),_:1}),e(a,{"bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block A",subtitle:"Block A variation 2",link:"block-a-props"}),e(i,{title:"On point delivery.",source:"/assets/video/meeting.mp4",poster:"/assets/demo/img/posters/poster-1.jpg",features:o(u),links:""},null,8,["features"])]),_:1})]),_:1}),e(a,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block A Props",subtitle:"Available props for block A"}),e(p,null,{code:t(()=>[e(l,{language:"html",code:o(T)},null,8,["code"])]),props:t(()=>[e(n,{props:o(D).props},null,8,["props"])]),sample:t(()=>[e(l,{language:"javascript",code:o($)},null,8,["code"])]),usage:t(()=>[H]),_:1})]),_:1})]),_:1})],64)}}}),M=C("p",{class:"paragraph rem-95"}," Video components have become a central part in every web and mobile application. Vulk video blocks come in different flavors. Take a look at the available props and easily set your first video block. ",-1),R=d({setup(f){return(c,g)=>{const r=b,i=j,s=y,a=h,l=k,n=B,p=v;return m(),_(x,null,[e(a,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block B",subtitle:"Block B variation 1",link:"block-b-props"}),e(i,{title:"Our Product",features:o(P),source:"/assets/video/meeting.mp4",poster:"/assets/demo/img/posters/poster-2g.jpg"},null,8,["features"])]),_:1})]),_:1}),e(a,{"bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block B",subtitle:"Block B variation 2",link:"block-b-props"}),e(i,{title:"Our Product",features:o(P),source:"/assets/video/meeting.mp4",poster:"/assets/demo/img/posters/poster-2a.jpg"},null,8,["features"])]),_:1})]),_:1}),e(a,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block B Props",subtitle:"Available props for block B"}),e(p,null,{code:t(()=>[e(l,{language:"html",code:o(w)},null,8,["code"])]),props:t(()=>[e(n,{props:o(O).props},null,8,["props"])]),sample:t(()=>[e(l,{language:"javascript",code:o(F)},null,8,["code"])]),usage:t(()=>[M]),_:1})]),_:1})]),_:1})],64)}}}),Y=C("p",{class:"paragraph rem-95"}," Video components have become a central part in every web and mobile application. Vulk video blocks come in different flavors. Take a look at the available props and easily set your first video block. ",-1),G=d({setup(f){return(c,g)=>{const r=b,i=L,s=y,a=h,l=k,n=B,p=v;return m(),_(x,null,[e(a,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block C",subtitle:"Block C variation 1",link:"block-c-props"}),e(i,{title:"Our Product",features:o(u),source:"/assets/video/meeting.mp4",poster:"/assets/demo/img/posters/poster-3d.jpg"},null,8,["features"])]),_:1})]),_:1}),e(a,{"bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block C",subtitle:"Block C variation 2",link:"block-c-props"}),e(i,{title:"Our Product",features:o(u),source:"/assets/video/meeting.mp4",poster:"/assets/demo/img/posters/poster-3a.jpg",links:""},null,8,["features"])]),_:1})]),_:1}),e(a,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(s,null,{default:t(()=>[e(r,{title:"Block C Props",subtitle:"Available props for block C"}),e(p,null,{code:t(()=>[e(l,{language:"html",code:o(N)},null,8,["code"])]),props:t(()=>[e(n,{props:o(E).props},null,8,["props"])]),sample:t(()=>[e(l,{language:"javascript",code:o(z)},null,8,["code"])]),usage:t(()=>[Y]),_:1})]),_:1})]),_:1})],64)}}}),ne=d({setup(f){const c=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"}];return(g,r)=>{const i=V,s=S;return m(),_("div",null,[e(i,{title:"Video Blocks",subtitle:"Vulk ships with 3 ready to use video section block variations. You can of course easily create your own from the existing ones."}),e(s,{links:c,width:"320px"}),e(I),e(R),e(G),e(q)])}}});export{ne as default};
