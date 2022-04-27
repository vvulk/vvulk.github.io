import{_ as w}from"./DemoLinks.a671367b.js";import{_ as y,a as N}from"./DemoTitle.a57ca7d7.js";import{D as x}from"./DocumentationFooter.13db3194.js";import{b as Q,j as T}from"./index.95542f14.js";import{_ as f,a as C}from"./PrismCode.ad4f84de.js";import{_ as D}from"./Tabs.69185093.js";import{e as g,o as a,t as P,w as i,h as t,b as e,c as u,g as b,u as m,d as o}from"./vendor.ef15629f.js";import"./Hero.6770d9b7.js";import"./FooterBubbles.8a82e92f.js";import"./vue.runtime.esm-bundler.f9ec8e20.js";import"./Icon.78183059.js";const $=`
<script setup lang="ts">
export type TabsType = 'boxed' | 'toggle' | 'rounded'
export type TabsAlign = 'centered' | 'right'
export interface TabsItem {
  label: string
  value: string
  icon?: string
}
export interface TabsProps {
  tabs: TabsItem[]
  selected?: string
  type?: TabsType
  alignment?: TabsAlign
  slider?: boolean
  slow?: boolean
}
<\/script>
`,k=`
<template>
  <Tabs
    selected="overview"
    :tabs="[
      { label: 'Overview', value: 'overview' },
      { label: 'Team', value: 'team' },
      { label: 'Budget', value: 'budget' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'overview'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'budget'" class="paragraph">
        aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`,A=`
<template>
  <Tabs
    alignment="centered"
    selected="overview"
    :tabs="[
      { label: 'Overview', value: 'overview' },
      { label: 'Team', value: 'team' },
      { label: 'Budget', value: 'budget' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'overview'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'budget'" class="paragraph">
        aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`,R=`
<template>
  <Tabs
    alignment="right"
    selected="overview"
    :tabs="[
      { label: 'Overview', value: 'overview' },
      { label: 'Team', value: 'team' },
      { label: 'Budget', value: 'budget' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'overview'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'budget'" class="paragraph">
        aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`,E=`
<template>
  <Tabs
    selected="overview"
    :tabs="[
      {
        label: 'Overview',
        value: 'overview',
        icon: 'ion:apps-outline',
      },
      { label: 'Team', value: 'team', icon: 'ion:people-outline' },
      {
        label: 'Budget',
        value: 'budget',
        icon: 'ion:podium-outline',
      },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'overview'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'budget'" class="paragraph">
        aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`,L=`
<template>
  <Tabs
    type="boxed"
    selected="overview"
    :tabs="[
      { label: 'Overview', value: 'overview' },
      { label: 'Team', value: 'team' },
      { label: 'Budget', value: 'budget' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'overview'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'budget'" class="paragraph">
        aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`,q=`
<template>
  <Tabs
    slider
    selected="team"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'projects'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`,j=`
<template>
  <Tabs
    slider
    selected="team"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
      { label: 'Tasks', value: 'tasks' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'projects'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'tasks'" class="paragraph">
        aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`,V={class:"mx-auto max-w-6"},B={class:"pt-4 pb-6"},U={class:"pt-4"},S={key:0,class:"paragraph"},I={key:1,class:"paragraph"},O={key:2,class:"paragraph"},Y=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),F=e("p",{class:"paragraph rem-95"},[o(" Tabs are a very common UI element in modern websites and applications. Vulk tabs are very simple to use and easily customisable. Use the "),e("code",null,":tabs"),o(" prop to define your tabs and the "),e("code",null,"#tab"),o(" slot to set your tab content. . ")],-1),H=g({setup(v){return(_,h)=>{const c=y,r=D,n=f,d=C,l=Q,p=T;return a(),P(p,{id:"tabs-base-demo","bordered-bottom":""},{default:i(()=>[t(l,null,{default:i(()=>[e("div",V,[e("div",B,[t(c,{title:"Tabs",subtitle:"Tabs base variation"}),e("div",U,[t(r,{selected:"overview",tabs:[{label:"Overview",value:"overview"},{label:"Team",value:"team"},{label:"Budget",value:"budget"}]},{tab:i(({activeValue:s})=>[s==="overview"?(a(),u("p",S," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="team"?(a(),u("p",I," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="budget"?(a(),u("p",O," aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):b("",!0)]),_:1})])]),t(d,null,{code:i(()=>[t(n,{language:"html",code:m(k)},null,8,["code"])]),props:i(()=>[t(n,{language:"javascript",code:m($)},null,8,["code"])]),sample:i(()=>[Y]),usage:i(()=>[F]),_:1})])]),_:1})]),_:1})}}}),z={class:"mx-auto max-w-6"},G={class:"pt-4 pb-6"},J={class:"pt-4"},K={key:0,class:"paragraph"},M={key:1,class:"paragraph"},W={key:2,class:"paragraph"},X=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Z=e("p",{class:"paragraph rem-95"},[o(" Tabs are a very common UI element in modern websites and applications. Vulk tabs are very simple to use and easily customisable. Use the "),e("code",null,":tabs"),o(" prop to define your tabs and the "),e("code",null,"#tab"),o(" slot to set your tab content. Use the "),e("code",null,"alignment"),o(" prop to control the alignment of the tabs. ")],-1),ee=g({setup(v){return(_,h)=>{const c=y,r=D,n=f,d=C,l=Q,p=T;return a(),P(p,{id:"tabs-centered-demo","bordered-bottom":""},{default:i(()=>[t(l,null,{default:i(()=>[e("div",z,[e("div",G,[t(c,{title:"Centered Tabs",subtitle:"Tabs centered variation"}),e("div",J,[t(r,{alignment:"centered",selected:"overview",tabs:[{label:"Overview",value:"overview"},{label:"Team",value:"team"},{label:"Budget",value:"budget"}]},{tab:i(({activeValue:s})=>[s==="overview"?(a(),u("p",K," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="team"?(a(),u("p",M," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="budget"?(a(),u("p",W," aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):b("",!0)]),_:1})])]),t(d,null,{code:i(()=>[t(n,{language:"html",code:m(A)},null,8,["code"])]),props:i(()=>[t(n,{language:"javascript",code:m($)},null,8,["code"])]),sample:i(()=>[X]),usage:i(()=>[Z]),_:1})])]),_:1})]),_:1})}}}),te={class:"mx-auto max-w-6"},ie={class:"pt-4 pb-6"},se={class:"pt-4"},ae={key:0,class:"paragraph"},oe={key:1,class:"paragraph"},ue={key:2,class:"paragraph"},ne=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),re=e("p",{class:"paragraph rem-95"},[o(" Tabs are a very common UI element in modern websites and applications. Vulk tabs are very simple to use and easily customisable. Use the "),e("code",null,":tabs"),o(" prop to define your tabs and the "),e("code",null,"#tab"),o(" slot to set your tab content. Use the "),e("code",null,"alignment"),o(" prop to control the alignment of the tabs. ")],-1),ce=g({setup(v){return(_,h)=>{const c=y,r=D,n=f,d=C,l=Q,p=T;return a(),P(p,{id:"tabs-right-demo","bordered-bottom":""},{default:i(()=>[t(l,null,{default:i(()=>[e("div",te,[e("div",ie,[t(c,{title:"Right Tabs",subtitle:"Tabs right variation"}),e("div",se,[t(r,{alignment:"right",selected:"overview",tabs:[{label:"Overview",value:"overview"},{label:"Team",value:"team"},{label:"Budget",value:"budget"}]},{tab:i(({activeValue:s})=>[s==="overview"?(a(),u("p",ae," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="team"?(a(),u("p",oe," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="budget"?(a(),u("p",ue," aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):b("",!0)]),_:1})])]),t(d,null,{code:i(()=>[t(n,{language:"html",code:m(R)},null,8,["code"])]),props:i(()=>[t(n,{language:"javascript",code:m($)},null,8,["code"])]),sample:i(()=>[ne]),usage:i(()=>[re]),_:1})])]),_:1})]),_:1})}}}),me={class:"mx-auto max-w-6"},de={class:"pt-4 pb-6"},le={class:"pt-4"},pe={key:0,class:"paragraph"},be={key:1,class:"paragraph"},_e={key:2,class:"paragraph"},ge=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ve=e("p",{class:"paragraph rem-95"},[o(" Tabs are a very common UI element in modern websites and applications. Vulk tabs are very simple to use and easily customisable. Use the "),e("code",null,":tabs"),o(" prop to define your tabs and the "),e("code",null,"#tab"),o(" slot to set your tab content. Add an icon property to the array you are passing to "),e("code",null,":tabs"),o(" to create icon tabs. ")],-1),he=g({setup(v){return(_,h)=>{const c=y,r=D,n=f,d=C,l=Q,p=T;return a(),P(p,{id:"tabs-icons-demo","bordered-bottom":""},{default:i(()=>[t(l,null,{default:i(()=>[e("div",me,[e("div",de,[t(c,{title:"Icons",subtitle:"Tabs icons variation"}),e("div",le,[t(r,{selected:"overview",tabs:[{label:"Overview",value:"overview",icon:"ion:apps-outline"},{label:"Team",value:"team",icon:"ion:people-outline"},{label:"Budget",value:"budget",icon:"ion:podium-outline"}]},{tab:i(({activeValue:s})=>[s==="overview"?(a(),u("p",pe," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="team"?(a(),u("p",be," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="budget"?(a(),u("p",_e," aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):b("",!0)]),_:1})])]),t(d,null,{code:i(()=>[t(n,{language:"html",code:m(E)},null,8,["code"])]),props:i(()=>[t(n,{language:"javascript",code:m($)},null,8,["code"])]),sample:i(()=>[ge]),usage:i(()=>[ve]),_:1})])]),_:1})]),_:1})}}}),ye={class:"mx-auto max-w-6"},Qe={class:"pt-4 pb-6"},Te={class:"pt-4"},fe={key:0,class:"paragraph"},Ce={key:1,class:"paragraph"},De={key:2,class:"paragraph"},Pe=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),$e=e("p",{class:"paragraph rem-95"},[o(" Tabs are a very common UI element in modern websites and applications. Vulk tabs are very simple to use and easily customisable. Use the "),e("code",null,":tabs"),o(" prop to define your tabs and the "),e("code",null,"#tab"),o(" slot to set your tab content. You can change the tabs to another type of layout using the "),e("code",null,"type"),o(" prop. ")],-1),we=g({setup(v){return(_,h)=>{const c=y,r=D,n=f,d=C,l=Q,p=T;return a(),P(p,{id:"tabs-boxed-demo","bordered-bottom":""},{default:i(()=>[t(l,null,{default:i(()=>[e("div",ye,[e("div",Qe,[t(c,{title:"Boxed Tabs",subtitle:"Tabs boxed variation"}),e("div",Te,[t(r,{type:"boxed",selected:"overview",tabs:[{label:"Overview",value:"overview"},{label:"Team",value:"team"},{label:"Budget",value:"budget"}]},{tab:i(({activeValue:s})=>[s==="overview"?(a(),u("p",fe," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="team"?(a(),u("p",Ce," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="budget"?(a(),u("p",De," aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):b("",!0)]),_:1})])]),t(d,null,{code:i(()=>[t(n,{language:"html",code:m(L)},null,8,["code"])]),props:i(()=>[t(n,{language:"javascript",code:m($)},null,8,["code"])]),sample:i(()=>[Pe]),usage:i(()=>[$e]),_:1})])]),_:1})]),_:1})}}}),Ne={class:"mx-auto max-w-6"},xe={class:"pt-4 pb-6"},ke={class:"pt-4"},Ae={key:0,class:"paragraph"},Re={key:1,class:"paragraph"},Ee={class:"pt-6"},Le={key:0,class:"paragraph"},qe={key:1,class:"paragraph"},je=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Ve=e("p",{class:"paragraph rem-95"},[o(" Tabs are a very common UI element in modern websites and applications. Vulk tabs are very simple to use and easily customisable. Use the "),e("code",null,":tabs"),o(" prop to define your tabs and the "),e("code",null,"#tab"),o(" slot to set your tab content. You can change the tabs to the slider type layout using the "),e("code",null,"slider"),o(" prop. You can also use the "),e("code",null,'type="rounded"'),o(" prop to change the tab naver shape. ")],-1),Be=g({setup(v){return(_,h)=>{const c=y,r=D,n=f,d=C,l=Q,p=T;return a(),P(p,{id:"tabs-slider-dual-demo","bordered-bottom":""},{default:i(()=>[t(l,null,{default:i(()=>[e("div",Ne,[e("div",xe,[t(c,{title:"Tabs Slider 2x",subtitle:"Tabs slider variation"}),e("div",ke,[t(r,{slider:"",selected:"team",tabs:[{label:"Team",value:"team"},{label:"Projects",value:"projects"}]},{tab:i(({activeValue:s})=>[s==="team"?(a(),u("p",Ae," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="projects"?(a(),u("p",Re," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):b("",!0)]),_:1})]),e("div",Ee,[t(r,{slider:"",type:"rounded",selected:"team",tabs:[{label:"Team",value:"team"},{label:"Projects",value:"projects"}]},{tab:i(({activeValue:s})=>[s==="team"?(a(),u("p",Le," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="projects"?(a(),u("p",qe," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):b("",!0)]),_:1})])]),t(d,null,{code:i(()=>[t(n,{language:"html",code:m(q)},null,8,["code"])]),props:i(()=>[t(n,{language:"javascript",code:m($)},null,8,["code"])]),sample:i(()=>[je]),usage:i(()=>[Ve]),_:1})])]),_:1})]),_:1})}}}),Ue={class:"mx-auto max-w-6"},Se={class:"pt-4 pb-6"},Ie={class:"pt-4"},Oe={key:0,class:"paragraph"},Ye={key:1,class:"paragraph"},Fe={key:2,class:"paragraph"},He={class:"pt-6"},ze={key:0,class:"paragraph"},Ge={key:1,class:"paragraph"},Je={key:2,class:"paragraph"},Ke=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Me=e("p",{class:"paragraph rem-95"},[o(" Tabs are a very common UI element in modern websites and applications. Vulk tabs are very simple to use and easily customisable. Use the "),e("code",null,":tabs"),o(" prop to define your tabs and the "),e("code",null,"#tab"),o(" slot to set your tab content. You can change the tabs to the slider type layout using the "),e("code",null,"slider"),o(" prop. You can also use the "),e("code",null,'type="rounded"'),o(" prop to change the tab naver shape. ")],-1),We=g({setup(v){return(_,h)=>{const c=y,r=D,n=f,d=C,l=Q,p=T;return a(),P(p,{id:"tabs-slider-triple-demo","bordered-bottom":""},{default:i(()=>[t(l,null,{default:i(()=>[e("div",Ue,[e("div",Se,[t(c,{title:"Tabs Slider 3x",subtitle:"Tabs slider variation"}),e("div",Ie,[t(r,{slider:"",selected:"team",tabs:[{label:"Team",value:"team"},{label:"Projects",value:"projects"},{label:"Tasks",value:"tasks"}]},{tab:i(({activeValue:s})=>[s==="team"?(a(),u("p",Oe," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="projects"?(a(),u("p",Ye," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="tasks"?(a(),u("p",Fe," aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):b("",!0)]),_:1})]),e("div",He,[t(r,{slider:"",type:"rounded",selected:"team",tabs:[{label:"Team",value:"team"},{label:"Projects",value:"projects"},{label:"Tasks",value:"tasks"}]},{tab:i(({activeValue:s})=>[s==="team"?(a(),u("p",ze," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="projects"?(a(),u("p",Ge," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):s==="tasks"?(a(),u("p",Je," aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete. ")):b("",!0)]),_:1})])]),t(d,null,{code:i(()=>[t(n,{language:"html",code:m(j)},null,8,["code"])]),props:i(()=>[t(n,{language:"javascript",code:m($)},null,8,["code"])]),sample:i(()=>[Ke]),usage:i(()=>[Me]),_:1})])]),_:1})]),_:1})}}}),ct=g({setup(v){const _=[{label:"Tabs",target:"tabs-base-demo"},{label:"Centered",target:"tabs-centered-demo"},{label:"Right",target:"tabs-right-demo"},{label:"Icons",target:"tabs-icons-demo"},{label:"Boxed",target:"tabs-boxed-demo"},{label:"Slider 2x",target:"tabs-slider-dual-demo"},{label:"Slider 3x",target:"tabs-slider-triple-demo"}];return(h,c)=>{const r=N,n=w;return a(),u("div",null,[t(r,{title:"Tabs Component",subtitle:"Tabs are a very common UI element that is a must have in every modern website and application. Explore Vulk tabs."}),t(n,{links:_,width:"620px"}),t(H),t(ee),t(ce),t(he),t(we),t(Be),t(We),t(x)])}}});export{ct as default};
