import{_ as G}from"./DemoLinks.a671367b.js";import{_ as B,a as Y}from"./DemoTitle.a57ca7d7.js";import{D as V}from"./DocumentationFooter.13db3194.js";import{a as N,c as E,e as M,o as S,b as C,j as O}from"./index.95542f14.js";import{_ as P,a as w}from"./PrismCode.ad4f84de.js";import{e as b,y,ak as j,al as A,o as k,t as $,b as e,z as I,A as U,h as o,w as t,r as T,d as a,v as K,x as L,a8 as F,p as H,a as q,u as _,c as J}from"./vendor.ef15629f.js";import{_ as x}from"./PlaceholderSection.6bc38bc1.js";import"./Hero.6770d9b7.js";import"./FooterBubbles.8a82e92f.js";import"./vue.runtime.esm-bundler.f9ec8e20.js";const Q=i=>(H("data-v-430062cc"),i=i(),q(),i),R={class:"modal-content"},W={class:"modal-card"},X={class:"modal-card-head"},Z=Q(()=>e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1)),oo=[Z],eo={class:"inner-content"},to=a(" Cancel "),ao=b({props:{title:null,size:{default:void 0},actions:{default:void 0},open:{type:Boolean},rounded:{type:Boolean},noscroll:{type:Boolean},noclose:{type:Boolean},tabs:{type:Boolean},cancelLabel:{default:void 0}},emits:["close"],setup(i,{emit:n}){const m=i,s=y(!1);return j(()=>{m.noscroll&&m.open?(document.documentElement.classList.add("no-scroll"),s.value=!0):s.value&&m.noscroll&&!m.open&&(document.documentElement.classList.remove("no-scroll"),s.value=!1)}),A(()=>{document.documentElement.classList.remove("no-scroll")}),(l,r)=>{const p=E,u=M;return k(),$(F,{to:"body"},[e("div",{class:L([[i.open&&"is-active",i.size&&`is-${i.size}`],"modal v-modal"])},[e("div",{class:"modal-background v-modal-close",onClick:r[0]||(r[0]=()=>i.noclose===!1&&n("close")),onKeydown:r[1]||(r[1]=I(U(()=>i.noclose===!1&&n("close"),["prevent"]),["space"]))},null,32),e("div",R,[e("div",W,[e("header",X,[o(p,{tag:"h3",size:6,weight:"semi",narrow:""},{default:t(()=>[T(l.$slots,"title",{},()=>[a(K(i.title),1)],!0)]),_:3}),e("button",{class:"v-modal-close ml-auto","aria-label":"close",onClick:r[2]||(r[2]=c=>n("close"))},oo)]),e("div",{class:L(["modal-card-body",[m.tabs&&"has-tabs"]])},[e("div",eo,[T(l.$slots,"content",{},void 0,!0)])],2),e("div",{class:L(["modal-card-foot",[i.actions==="center"&&"is-centered",i.actions==="right"&&"is-end"]])},[T(l.$slots,"cancel",{},()=>[o(u,{raised:"",long:2,rounded:i.rounded,onClick:r[3]||(r[3]=c=>n("close")),onKeydown:r[4]||(r[4]=I(U(()=>n("close"),["prevent"]),["space"]))},{default:t(()=>[to]),_:1},8,["rounded"])],!0),T(l.$slots,"action",{},void 0,!0)],2)])])],2)])}}});var z=N(ao,[["__scopeId","data-v-430062cc"]]);const D=`
<script setup lang="ts">
export type ModalSize = 'small' | 'medium' | 'large' | 'big'
export type ModalAction = 'center' | 'right'

export interface ModalEmits {
  (e: 'close'): void
}

export interface ModalProps {
  title: string
  size?: ModalSize
  actions?: ModalAction
  open?: boolean
  rounded?: boolean
  noscroll?: boolean
  noclose?: boolean
  tabs?: boolean
  cancelLabel?: string
}
<\/script>
`,so=`
<script setup lang="ts">
import { ref } from 'vue'
const modalBaseOpen = ref(false)
<\/script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalBaseOpen = true">Open Modal</Button>

  <!--Modal-->
  <Modal
    title="Premium features"
    :open="modalBaseOpen"
    actions="center"
    noscroll
    @close="modalBaseOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`,no=`
<script setup lang="ts">
import { ref } from 'vue'
const modalSmallOpen = ref(false)
<\/script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalSmallOpen = true">Open Modal</Button>

  <!--Modal-->
  <Modal
    title="Small Modal"
    :open="modalSmallOpen"
    size="small"
    actions="center"
    noscroll
    @close="modalSmallOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`,lo=`
<script setup lang="ts">
import { ref } from 'vue'
const modalMediumOpen = ref(false)
<\/script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalMediumOpen = true">Open Modal</Button>

  <!--Modal-->
  <Modal
    title="Medium Modal"
    :open="modalMediumOpen"
    size="medium"
    actions="center"
    noscroll
    @close="modalMediumOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`,io=`
<script setup lang="ts">
import { ref } from 'vue'
const modalLargeOpen = ref(false)
<\/script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalLargeOpen = true">Open Large Modal</Button>

  <!--Modal-->
  <Modal
    title="Large Modal"
    :open="modalLargeOpen"
    size="large"
    actions="center"
    noscroll
    @close="modalLargeOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`,ro=`
<script setup lang="ts">
import { ref } from 'vue'
const modalBigOpen = ref(false)
<\/script>

<template>
  <!--Modal trigger-->
  <Button bold @click="modalBigOpen = true">Open Large Modal</Button>

  <!--Modal-->
  <Modal
    title="Big Modal"
    :open="modalBigOpen"
    size="big"
    actions="center"
    noscroll
    @close="modalBigOpen = false"
  >
    <template #content>
      <PlaceholderSection
        title="Go Premium"
        subtitle="Unlock more features and business tools by going premium"
      >
        <template #image>
          <DarkImage
            src="/@src/assets/illustrations/features/vr.svg"
            src-dark="/@src/assets/illustrations/features/vr-dark.svg"
            alt="dark image"
          />
        </template>
      </PlaceholderSection>
    </template>
    <template #action>
      <Button color="primary" :long="2" raised>Confirm</Button>
    </template>
  </Modal>
</template>
`,co={class:"mx-auto max-w-6"},mo={class:"pt-4 pb-6"},po={class:"pt-4"},uo=a("Open Modal"),_o=a("Confirm"),go=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),fo=e("p",{class:"paragraph rem-95"},[a(" Modals are a very important part of modern dynamic applications. Vulk Modals ship with props that help with customization. They also provide slots for actions (#action, #cancel) and content (#content). You can customize the actions alignment by using the "),e("code",null,"actions"),a(" prop. You can also make the buttons rounded using the "),e("code",null,"rounded"),a(" prop. The modal can also disable page scroll using the "),e("code",null,"noscroll"),a(" prop and disabled backdrop closing with the "),e("code",null,"noclose"),a(" prop. . ")],-1),vo=b({setup(i){const n=y(!1);return(m,s)=>{const d=B,l=M,r=S,p=x,u=z,c=P,g=w,f=C,v=O;return k(),$(v,{id:"modal-base-demo","bordered-bottom":""},{default:t(()=>[o(f,null,{default:t(()=>[e("div",co,[e("div",mo,[o(d,{title:"Modal",subtitle:"Modal base variation"}),e("div",po,[o(l,{bold:"",onClick:s[0]||(s[0]=h=>n.value=!0)},{default:t(()=>[uo]),_:1}),o(u,{title:"Premium features",open:n.value,actions:"center",noscroll:"",onClose:s[1]||(s[1]=h=>n.value=!1)},{content:t(()=>[o(p,{title:"Go Premium",subtitle:"Unlock more features and business tools by going premium"},{image:t(()=>[o(r,{src:"/assets/illustrations/features/vr.svg","src-dark":"/assets/illustrations/features/vr-dark.svg",alt:"dark image"})]),_:1})]),action:t(()=>[o(l,{color:"primary",long:2,raised:""},{default:t(()=>[_o]),_:1})]),_:1},8,["open"])])]),o(g,null,{code:t(()=>[o(c,{language:"html",code:_(so)},null,8,["code"])]),props:t(()=>[o(c,{language:"javascript",code:_(D)},null,8,["code"])]),sample:t(()=>[go]),usage:t(()=>[fo]),_:1})])]),_:1})]),_:1})}}}),ho={class:"mx-auto max-w-6"},bo={class:"pt-4 pb-6"},ko={class:"pt-4"},Mo=a(" Open Small Modal "),yo=a("Confirm"),$o=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Bo=e("p",{class:"paragraph rem-95"},[a(" Modals are a very important part of modern dynamic applications. Vulk Modals ship with props that help with customization. They also provide slots for actions (#action, #cancel) and content (#content). You can customize the actions alignment by using the "),e("code",null,"actions"),a(" prop. You can also make the buttons rounded using the "),e("code",null,"rounded"),a(" prop. The modal can also disable page scroll using the "),e("code",null,"noscroll"),a(" prop and disabled backdrop closing with the "),e("code",null,"noclose"),a(" prop. . ")],-1),So=b({setup(i){const n=y(!1);return(m,s)=>{const d=B,l=M,r=S,p=x,u=z,c=P,g=w,f=C,v=O;return k(),$(v,{id:"modal-small-demo","bordered-bottom":""},{default:t(()=>[o(f,null,{default:t(()=>[e("div",ho,[e("div",bo,[o(d,{title:"Modal",subtitle:"Modal small variation"}),e("div",ko,[o(l,{bold:"",onClick:s[0]||(s[0]=h=>n.value=!0)},{default:t(()=>[Mo]),_:1}),o(u,{title:"Small Modal",open:n.value,size:"small",actions:"center",noscroll:"",onClose:s[1]||(s[1]=h=>n.value=!1)},{content:t(()=>[o(p,{title:"Go Premium",subtitle:"Unlock more features and business tools by going premium"},{image:t(()=>[o(r,{src:"/assets/illustrations/features/vr.svg","src-dark":"/assets/illustrations/features/vr-dark.svg",alt:"dark image"})]),_:1})]),action:t(()=>[o(l,{color:"primary",long:2,raised:""},{default:t(()=>[yo]),_:1})]),_:1},8,["open"])])]),o(g,null,{code:t(()=>[o(c,{language:"html",code:_(no)},null,8,["code"])]),props:t(()=>[o(c,{language:"javascript",code:_(D)},null,8,["code"])]),sample:t(()=>[$o]),usage:t(()=>[Bo]),_:1})])]),_:1})]),_:1})}}}),Co={class:"mx-auto max-w-6"},Oo={class:"pt-4 pb-6"},Po={class:"pt-4"},wo=a(" Open Medium Modal "),xo=a("Confirm"),zo=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Do=e("p",{class:"paragraph rem-95"},[a(" Modals are a very important part of modern dynamic applications. Vulk Modals ship with props that help with customization. They also provide slots for actions (#action, #cancel) and content (#content). You can customize the actions alignment by using the "),e("code",null,"actions"),a(" prop. You can also make the buttons rounded using the "),e("code",null,"rounded"),a(" prop. The modal can also disable page scroll using the "),e("code",null,"noscroll"),a(" prop and disabled backdrop closing with the "),e("code",null,"noclose"),a(" prop. . ")],-1),To=b({setup(i){const n=y(!1);return(m,s)=>{const d=B,l=M,r=S,p=x,u=z,c=P,g=w,f=C,v=O;return k(),$(v,{id:"modal-medium-demo","bordered-bottom":""},{default:t(()=>[o(f,null,{default:t(()=>[e("div",Co,[e("div",Oo,[o(d,{title:"Modal",subtitle:"Modal medium variation"}),e("div",Po,[o(l,{bold:"",onClick:s[0]||(s[0]=h=>n.value=!0)},{default:t(()=>[wo]),_:1}),o(u,{title:"Medium Modal",open:n.value,size:"medium",actions:"center",noscroll:"",onClose:s[1]||(s[1]=h=>n.value=!1)},{content:t(()=>[o(p,{title:"Go Premium",subtitle:"Unlock more features and business tools by going premium"},{image:t(()=>[o(r,{src:"/assets/illustrations/features/vr.svg","src-dark":"/assets/illustrations/features/vr-dark.svg",alt:"dark image"})]),_:1})]),action:t(()=>[o(l,{color:"primary",long:2,raised:""},{default:t(()=>[xo]),_:1})]),_:1},8,["open"])])]),o(g,null,{code:t(()=>[o(c,{language:"html",code:_(lo)},null,8,["code"])]),props:t(()=>[o(c,{language:"javascript",code:_(D)},null,8,["code"])]),sample:t(()=>[zo]),usage:t(()=>[Do]),_:1})])]),_:1})]),_:1})}}}),Lo={class:"mx-auto max-w-6"},Io={class:"pt-4 pb-6"},Uo={class:"pt-4"},Go=a(" Open Large Modal "),Yo=a("Confirm"),Vo=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),No=e("p",{class:"paragraph rem-95"},[a(" Modals are a very important part of modern dynamic applications. Vulk Modals ship with props that help with customization. They also provide slots for actions (#action, #cancel) and content (#content). You can customize the actions alignment by using the "),e("code",null,"actions"),a(" prop. You can also make the buttons rounded using the "),e("code",null,"rounded"),a(" prop. The modal can also disable page scroll using the "),e("code",null,"noscroll"),a(" prop and disabled backdrop closing with the "),e("code",null,"noclose"),a(" prop. . ")],-1),Eo=b({setup(i){const n=y(!1);return(m,s)=>{const d=B,l=M,r=S,p=x,u=z,c=P,g=w,f=C,v=O;return k(),$(v,{id:"modal-large-demo","bordered-bottom":""},{default:t(()=>[o(f,null,{default:t(()=>[e("div",Lo,[e("div",Io,[o(d,{title:"Modal",subtitle:"Modal large variation"}),e("div",Uo,[o(l,{bold:"",onClick:s[0]||(s[0]=h=>n.value=!0)},{default:t(()=>[Go]),_:1}),o(u,{title:"Large Modal",open:n.value,size:"large",actions:"center",noscroll:"",onClose:s[1]||(s[1]=h=>n.value=!1)},{content:t(()=>[o(p,{title:"Go Premium",subtitle:"Unlock more features and business tools by going premium"},{image:t(()=>[o(r,{src:"/assets/illustrations/features/vr.svg","src-dark":"/assets/illustrations/features/vr-dark.svg",alt:"dark image"})]),_:1})]),action:t(()=>[o(l,{color:"primary",long:2,raised:""},{default:t(()=>[Yo]),_:1})]),_:1},8,["open"])])]),o(g,null,{code:t(()=>[o(c,{language:"html",code:_(io)},null,8,["code"])]),props:t(()=>[o(c,{language:"javascript",code:_(D)},null,8,["code"])]),sample:t(()=>[Vo]),usage:t(()=>[No]),_:1})])]),_:1})]),_:1})}}}),jo={class:"mx-auto max-w-6"},Ao={class:"pt-4 pb-6"},Ko={class:"pt-4"},Fo=a("Open Big Modal"),Ho=a("Confirm"),qo=e("div",{class:"empty-text"},[e("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Jo=e("p",{class:"paragraph rem-95"},[a(" Modals are a very important part of modern dynamic applications. Vulk Modals ship with props that help with customization. They also provide slots for actions (#action, #cancel) and content (#content). You can customize the actions alignment by using the "),e("code",null,"actions"),a(" prop. You can also make the buttons rounded using the "),e("code",null,"rounded"),a(" prop. The modal can also disable page scroll using the "),e("code",null,"noscroll"),a(" prop and disabled backdrop closing with the "),e("code",null,"noclose"),a(" prop. . ")],-1),Qo=b({setup(i){const n=y(!1);return(m,s)=>{const d=B,l=M,r=S,p=x,u=z,c=P,g=w,f=C,v=O;return k(),$(v,{id:"modal-big-demo","bordered-bottom":""},{default:t(()=>[o(f,null,{default:t(()=>[e("div",jo,[e("div",Ao,[o(d,{title:"Modal",subtitle:"Modal big variation"}),e("div",Ko,[o(l,{bold:"",onClick:s[0]||(s[0]=h=>n.value=!0)},{default:t(()=>[Fo]),_:1}),o(u,{title:"Big Modal",open:n.value,size:"big",actions:"center",noscroll:"",onClose:s[1]||(s[1]=h=>n.value=!1)},{content:t(()=>[o(p,{title:"Go Premium",subtitle:"Unlock more features and business tools by going premium"},{image:t(()=>[o(r,{src:"/assets/illustrations/features/vr.svg","src-dark":"/assets/illustrations/features/vr-dark.svg",alt:"dark image"})]),_:1})]),action:t(()=>[o(l,{color:"primary",long:2,raised:""},{default:t(()=>[Ho]),_:1})]),_:1},8,["open"])])]),o(g,null,{code:t(()=>[o(c,{language:"html",code:_(ro)},null,8,["code"])]),props:t(()=>[o(c,{language:"javascript",code:_(D)},null,8,["code"])]),sample:t(()=>[qo]),usage:t(()=>[Jo]),_:1})])]),_:1})]),_:1})}}}),le=b({setup(i){const n=[{label:"Modal",target:"modal-base-demo"},{label:"Small",target:"modal-small-demo"},{label:"Medium",target:"modal-medium-demo"},{label:"Large",target:"modal-large-demo"},{label:"Big",target:"modal-big-demo"}];return(m,s)=>{const d=Y,l=G;return k(),J("div",null,[o(d,{title:"Modal Component",subtitle:"Modals are a very important part of modern dynamic applications. They can help displaying additional info. Explore Vulk modals."}),o(l,{links:n,width:"400px"}),o(vo),o(So),o(To),o(Eo),o(Qo),o(V)])}}});export{le as default};
