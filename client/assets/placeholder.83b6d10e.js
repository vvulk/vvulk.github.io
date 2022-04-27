import{_ as k,a as v}from"./DemoTitle.a57ca7d7.js";import{o as x,e as y,f as B,y as P,b as w,j as D}from"./index.95542f14.js";import{_ as j,a as C}from"./PrismCode.ad4f84de.js";import{e as r,o as i,t as T,w as e,h as t,b as o,u as c,d as n,c as V}from"./vendor.ef15629f.js";import{D as $}from"./DocumentationFooter.13db3194.js";import"./Hero.6770d9b7.js";import"./vue.runtime.esm-bundler.f9ec8e20.js";import"./FooterBubbles.8a82e92f.js";const N=`
<script setup lang="ts">
export interface PlaceholderProps {
  title: string
  subtitle?: string
  larger?: boolean
}
<\/script>
`,H=`
<template>
  <Placeholder
    title="Project not found"
    subtitle="some nice subtitle text."
  >
    <template #image>
      <DarkImage
        src="https://dummyimage.com/800x600"
        src-dark="https://dummyimage.com/800c600"
        alt="illustration"
      />
    </template>
    <template #action>
      <Buttons alignment="centered">
        <Button color="primary" :long="2" raised>Projects</Button>
        <Button :long="2">Dashboard</Button>
      </Buttons>
    </template>
  </Placeholder>
</template>
`,I={class:"mx-auto max-w-6"},S={class:"pt-4 pb-6"},E={class:"is-flex is-align-items-flex-end pt-4"},F=n("Projects"),G=n("Dashboard"),M=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),q=o("p",{class:"paragraph rem-95"},[n(" Vulk's placeholder is a very versatile component that can be used in a wide variety of setups. The core is the placeholder text props. Two additionnal slots ( "),o("code",null,"#image"),n(" and "),o("code",null,"#action"),n(" ) let you insert images and action buttons / links. ")],-1),z=r({setup(p){return(_,m)=>{const s=k,u=x,a=y,d=B,g=P,l=j,h=C,f=w,b=D;return i(),T(b,{id:"placeholder-component-demo","bordered-bottom":""},{default:e(()=>[t(f,null,{default:e(()=>[o("div",I,[o("div",S,[t(s,{title:"Placeholder",subtitle:"Content placeholder layout"}),o("div",E,[t(g,{title:"Project not found",subtitle:"Hey there, looks like you've hit an empty state. Make sure to create a project before assigning tasks."},{image:e(()=>[t(u,{src:"/assets/illustrations/hero/working-laptop.svg","src-dark":"/assets/illustrations/hero/working-laptop-dark.svg",alt:"illustration"})]),action:e(()=>[t(d,{alignment:"centered"},{default:e(()=>[t(a,{color:"primary",long:2,raised:""},{default:e(()=>[F]),_:1}),t(a,{long:2},{default:e(()=>[G]),_:1})]),_:1})]),_:1})])]),t(h,null,{code:e(()=>[t(l,{language:"html",code:c(H)},null,8,["code"])]),props:e(()=>[t(l,{language:"javascript",code:c(N)},null,8,["code"])]),sample:e(()=>[M]),usage:e(()=>[q]),_:1})])]),_:1})]),_:1})}}}),W=r({setup(p){return(_,m)=>{const s=v;return i(),V("div",null,[t(s,{title:"Placeholder",subtitle:"Content placeholders have been growing as a core component in modern web applications. Get familiar with Vulk's content placeholder."}),t(z),t($)])}}});export{W as default};
