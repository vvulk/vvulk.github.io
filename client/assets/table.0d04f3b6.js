import{_ as Q}from"./DemoLinks.a671367b.js";import{_ as L,a as Z}from"./DemoTitle.a57ca7d7.js";import{a as ee,p as F,c as j,A as E,b as z,j as V}from"./index.95542f14.js";import{_ as I,a as N}from"./PrismCode.ad4f84de.js";import{_ as P,a as Y,b as D,c as B}from"./SimpleTableHeader.43d640fd.js";import{_ as G}from"./AvatarGroup.ff7147b3.js";import{_ as M}from"./Icon.78183059.js";import{o as r,c as H,r as K,b as a,e as R,l as W,t as _,w as l,h as e,q as O,d as t,v as i,u as c,F as U}from"./vendor.ef15629f.js";import{D as le}from"./DocumentationFooter.13db3194.js";import"./Hero.6770d9b7.js";import"./vue.runtime.esm-bundler.f9ec8e20.js";import"./FooterBubbles.8a82e92f.js";const ae={},te={class:"table-cell-flex"},oe={class:"flex-content"};function se(b,$){return r(),H("div",te,[K(b.$slots,"media",{},void 0,!0),a("div",oe,[K(b.$slots,"content",{},void 0,!0)])])}var q=ee(ae,[["render",se],["__scopeId","data-v-6a82de6c"]]);const J=[{employee:{picture:"/assets/demo/img/avatars/41.jpg",name:"Eric G.",position:"Web developer"},location:"Los Angeles, CA",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/vuejs.svg",label:"programming language"},{picture:"/assets/stacks/reactjs.svg",label:"programming language"},{picture:"/assets/stacks/nodejs.svg",label:"programming language"},{picture:"/assets/stacks/html5.svg",label:"programming language"}],status:{label:"Available",color:"success"},experience:"8 years",url:"index"},{employee:{picture:"/assets/demo/img/avatars/44.jpg",name:"Laura T.",position:"UI designer"},location:"Los Angeles, CA",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/html5.svg",label:"programming language"},{picture:"/assets/stacks/photoshop.svg",label:"programming language"},{picture:"/assets/stacks/bulma.svg",label:"programming language"},{picture:"/assets/stacks/svelte.svg",label:"programming language"}],status:{label:"Offline",color:"solid"},experience:"6 years",url:"index"},{employee:{picture:"/assets/demo/img/avatars/26.jpg",name:"Erwin S.",position:"Mobile developer"},location:"New York, NY",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/android.svg",label:"programming language"},{picture:"/assets/stacks/illustrator.svg",label:"programming language"},{picture:"/assets/stacks/swift.svg",label:"programming language"},{picture:"/assets/stacks/flutter.svg",label:"programming language"}],status:{label:"Busy",color:"danger"},experience:"4 years",url:"index"},{employee:{picture:"/assets/demo/img/avatars/42.jpg",name:"Anita C.",position:"Web developer"},location:"Las Vegas, NV",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/vuejs.svg",label:"programming language"},{picture:"/assets/stacks/reactjs.svg",label:"programming language"},{picture:"/assets/stacks/nodejs.svg",label:"programming language"},{picture:"/assets/stacks/html5.svg",label:"programming language"}],status:{label:"Available",color:"success"},experience:"15 years",url:"index"},{employee:{picture:"/assets/demo/img/avatars/29.jpg",name:"Christina D.",position:"Mobile developer"},location:"Miami, FL",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/android.svg",label:"programming language"},{picture:"/assets/stacks/illustrator.svg",label:"programming language"},{picture:"/assets/stacks/swift.svg",label:"programming language"},{picture:"/assets/stacks/flutter.svg",label:"programming language"}],status:{label:"Available",color:"success"},experience:"2 years",url:"index"},{employee:{picture:"/assets/demo/img/avatars/25.jpg",name:"Armin A.",position:"Web developer"},location:"San Francisco, CA",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/html5.svg",label:"programming language"},{picture:"/assets/stacks/illustrator.svg",label:"programming language"},{picture:"/assets/stacks/bulma.svg",label:"programming language"},{picture:"/assets/stacks/sass.svg",label:"programming language"}],status:{label:"Meeting",color:"warning"},experience:"3 years",url:"index"},{employee:{picture:"/assets/demo/img/avatars/57.jpg",name:"Eren J.",position:"UX designer"},location:"Los Angeles, CA",skills:[{picture:"/assets/stacks/js.svg",label:"programming language"},{picture:"/assets/stacks/html5.svg",label:"programming language"},{picture:"/assets/stacks/photoshop.svg",label:"programming language"},{picture:"/assets/stacks/bulma.svg",label:"programming language"},{picture:"/assets/stacks/svelte.svg",label:"programming language"}],status:{label:"Offline",color:"solid"},experience:"7 years",url:"index"}],X=`
<script setup lang="ts">
export interface SimpleTableProps {
  striped?: boolean
  bordered?: boolean
  scrollable?: boolean
}
<\/script>
`,ne=`
<script setup lang="ts">
import { table } from '/@src/data/blocks/table/index'
<\/script>

<template>
  <SimpleTable :bordered="false">
    <SimpleTableRow>
      <SimpleTableHeader>Employee</SimpleTableHeader>
      <SimpleTableHeader>Location</SimpleTableHeader>
      <SimpleTableHeader>Skills</SimpleTableHeader>
      <SimpleTableHeader>Status</SimpleTableHeader>
      <SimpleTableHeader>Experience</SimpleTableHeader>
      <SimpleTableHeader>Action</SimpleTableHeader>
    </SimpleTableRow>
    <SimpleTableRow v-for="(item, index) in table" :key="index">
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <AvatarSimple :picture="item.employee.picture" />
          </template>
          <template #content>
            <Title tag="h3" :size="7" weight="semi" narrow>{ item.employee.name }</Title>
            <p class="paragraph rem-75">{ item.employee.position }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <Icon icon="feather:map-pin"></Icon>
          </template>
          <template #content>
            <p class="paragraph rem-85">{ item.location }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <AvatarGroup size="small" :avatars="item.skills" :limit="5" compact />
      </SimpleTableCell>
      <SimpleTableCell>
        <Tag :label="item.status.label" :color="item.status.color" outlined />
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <p class="paragraph rem-85">{ item.experience }</p>
      </SimpleTableCell>
      <SimpleTableCell>
        <RouterLink
          :to="{ name: item.url }"
          class="link has-underline is-reversed rem-90"
        >View Profile</RouterLink>
      </SimpleTableCell>
    </SimpleTableRow>
  </SimpleTable>
</template>
`,ie=`
<script setup lang="ts">
import { table } from '/@src/data/blocks/table/index'
<\/script>

<template>
  <SimpleTable :bordered="false" striped>
    <SimpleTableRow>
      <SimpleTableHeader>Employee</SimpleTableHeader>
      <SimpleTableHeader>Location</SimpleTableHeader>
      <SimpleTableHeader>Skills</SimpleTableHeader>
      <SimpleTableHeader>Status</SimpleTableHeader>
      <SimpleTableHeader>Experience</SimpleTableHeader>
      <SimpleTableHeader>Action</SimpleTableHeader>
    </SimpleTableRow>
    <SimpleTableRow v-for="(item, index) in table" :key="index">
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <AvatarSimple :picture="item.employee.picture" />
          </template>
          <template #content>
            <Title tag="h3" :size="7" weight="semi" narrow>{ item.employee.name }</Title>
            <p class="paragraph rem-75">{ item.employee.position }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <Icon icon="feather:map-pin"></Icon>
          </template>
          <template #content>
            <p class="paragraph rem-85">{ item.location }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <AvatarGroup size="small" :avatars="item.skills" :limit="5" compact />
      </SimpleTableCell>
      <SimpleTableCell>
        <Tag :label="item.status.label" :color="item.status.color" outlined />
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <p class="paragraph rem-85">{ item.experience }</p>
      </SimpleTableCell>
      <SimpleTableCell>
        <RouterLink
          :to="{ name: item.url }"
          class="link has-underline is-reversed rem-90"
        >View Profile</RouterLink>
      </SimpleTableCell>
    </SimpleTableRow>
  </SimpleTable>
</template>
`,re=`
<script setup lang="ts">
import { table } from '/@src/data/blocks/table/index'
<\/script>

<template>
  <SimpleTable :bordered="true">
    <SimpleTableRow>
      <SimpleTableHeader>Employee</SimpleTableHeader>
      <SimpleTableHeader>Location</SimpleTableHeader>
      <SimpleTableHeader>Skills</SimpleTableHeader>
      <SimpleTableHeader>Status</SimpleTableHeader>
      <SimpleTableHeader>Experience</SimpleTableHeader>
      <SimpleTableHeader>Action</SimpleTableHeader>
    </SimpleTableRow>
    <SimpleTableRow v-for="(item, index) in table" :key="index">
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <AvatarSimple :picture="item.employee.picture" />
          </template>
          <template #content>
            <Title tag="h3" :size="7" weight="semi" narrow>{ item.employee.name }</Title>
            <p class="paragraph rem-75">{ item.employee.position }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <Icon icon="feather:map-pin"></Icon>
          </template>
          <template #content>
            <p class="paragraph rem-85">{ item.location }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <AvatarGroup size="small" :avatars="item.skills" :limit="5" compact />
      </SimpleTableCell>
      <SimpleTableCell>
        <Tag :label="item.status.label" :color="item.status.color" outlined />
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <p class="paragraph rem-85">{ item.experience }</p>
      </SimpleTableCell>
      <SimpleTableCell>
        <RouterLink
          :to="{ name: item.url }"
          class="link has-underline is-reversed rem-90"
        >View Profile</RouterLink>
      </SimpleTableCell>
    </SimpleTableRow>
  </SimpleTable>
</template>
`,pe=`
<script setup lang="ts">
import { table } from '/@src/data/blocks/table/index'
<\/script>

<template>
  <SimpleTable :bordered="true" striped>
    <SimpleTableRow>
      <SimpleTableHeader>Employee</SimpleTableHeader>
      <SimpleTableHeader>Location</SimpleTableHeader>
      <SimpleTableHeader>Skills</SimpleTableHeader>
      <SimpleTableHeader>Status</SimpleTableHeader>
      <SimpleTableHeader>Experience</SimpleTableHeader>
      <SimpleTableHeader>Action</SimpleTableHeader>
    </SimpleTableRow>
    <SimpleTableRow v-for="(item, index) in table" :key="index">
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <AvatarSimple :picture="item.employee.picture" />
          </template>
          <template #content>
            <Title tag="h3" :size="7" weight="semi" narrow>{ item.employee.name }</Title>
            <p class="paragraph rem-75">{ item.employee.position }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <Icon icon="feather:map-pin"></Icon>
          </template>
          <template #content>
            <p class="paragraph rem-85">{ item.location }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <AvatarGroup size="small" :avatars="item.skills" :limit="5" compact />
      </SimpleTableCell>
      <SimpleTableCell>
        <Tag :label="item.status.label" :color="item.status.color" outlined />
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <p class="paragraph rem-85">{ item.experience }</p>
      </SimpleTableCell>
      <SimpleTableCell>
        <RouterLink
          :to="{ name: item.url }"
          class="link has-underline is-reversed rem-90"
        >View Profile</RouterLink>
      </SimpleTableCell>
    </SimpleTableRow>
  </SimpleTable>
</template>
`,ce={class:"mx-auto max-w-9"},me={class:"pt-4 pb-6"},ue={class:"is-flex is-align-items-flex-end pt-4"},de=t("Employee"),_e=t("Location"),be=t("Skills"),ge=t("Status"),Te=t("Experience"),Se=t("Action"),he={class:"paragraph rem-75"},fe={class:"paragraph rem-85"},ve={class:"paragraph rem-85"},ke=t(" View Profile "),xe=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ye=a("p",{class:"paragraph rem-95"},[t(" Vulk's table is an extremely versatile component split into several sub components, for more flexibility. The "),a("code",null,"<SimpleTable />"),t(" component acts as the main wrapper. The "),a("code",null,"<SimpleTableRow />"),t(" acts as a table row whereas "),a("code",null,"<SimpleTableHeader />"),t(" and "),a("code",null,"<SimpleTableCell />"),t(" act as table "),a("code",null,"th"),t(" and "),a("code",null,"td"),t(" . The table component is bordered by default, as the "),a("code",null,"bordered"),t(" prop is set to "),a("code",null,"true"),t(" by default. You can remove borders by setting it to "),a("code",null,"false"),t(" . You can also create a striped table using the "),a("code",null,"striped"),t(" prop. You can of course mix any of those styles. Note that you can also make a table horizontally scrollable by adding the "),a("code",null,"scrollable"),t(" prop. ")],-1),Ce=R({setup(b){return($,A)=>{const d=L,s=P,p=Y,g=F,T=j,m=q,n=D,S=M,h=G,f=E,v=W("RouterLink"),k=B,u=I,x=N,y=z,C=V;return r(),_(C,{id:"table-base-demo","bordered-bottom":""},{default:l(()=>[e(y,null,{default:l(()=>[a("div",ce,[a("div",me,[e(d,{title:"Table",subtitle:"Table base variation"}),a("div",ue,[e(k,{bordered:!1},{default:l(()=>[e(p,null,{default:l(()=>[e(s,null,{default:l(()=>[de]),_:1}),e(s,null,{default:l(()=>[_e]),_:1}),e(s,null,{default:l(()=>[be]),_:1}),e(s,null,{default:l(()=>[ge]),_:1}),e(s,null,{default:l(()=>[Te]),_:1}),e(s,null,{default:l(()=>[Se]),_:1})]),_:1}),(r(!0),H(U,null,O(c(J),(o,w)=>(r(),_(p,{key:w},{default:l(()=>[e(n,null,{default:l(()=>[e(m,null,{media:l(()=>[e(g,{picture:o.employee.picture},null,8,["picture"])]),content:l(()=>[e(T,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[t(i(o.employee.name),1)]),_:2},1024),a("p",he,i(o.employee.position),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(m,null,{media:l(()=>[e(S,{icon:"feather:map-pin"})]),content:l(()=>[a("p",fe,i(o.location),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(h,{size:"small",avatars:o.skills,limit:5,compact:""},null,8,["avatars"])]),_:2},1024),e(n,null,{default:l(()=>[e(f,{label:o.status.label,color:o.status.color,outlined:""},null,8,["label","color"])]),_:2},1024),e(n,{color:"default"},{default:l(()=>[a("p",ve,i(o.experience),1)]),_:2},1024),e(n,null,{default:l(()=>[e(v,{to:{name:o.url},class:"link has-underline is-reversed rem-90"},{default:l(()=>[ke]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),e(x,null,{code:l(()=>[e(u,{language:"html",code:c(ne)},null,8,["code"])]),props:l(()=>[e(u,{language:"javascript",code:c(X)},null,8,["code"])]),sample:l(()=>[xe]),usage:l(()=>[ye]),_:1})])]),_:1})]),_:1})}}}),we={class:"mx-auto max-w-9"},$e={class:"pt-4 pb-6"},He={class:"is-flex is-align-items-flex-end pt-4"},Re=t("Employee"),Ae=t("Location"),Le=t("Skills"),Fe=t("Status"),je=t("Experience"),Ee=t("Action"),ze={class:"paragraph rem-75"},Ve={class:"paragraph rem-85"},Ie={class:"paragraph rem-85"},Ne=t(" View Profile "),Pe=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Ye=a("p",{class:"paragraph rem-95"},[t(" Vulk's table is an extremely versatile component split into several sub components, for more flexibility. The "),a("code",null,"<SimpleTable />"),t(" component acts as the main wrapper. The "),a("code",null,"<SimpleTableRow />"),t(" acts as a table row whereas "),a("code",null,"<SimpleTableHeader />"),t(" and "),a("code",null,"<SimpleTableCell />"),t(" act as table "),a("code",null,"th"),t(" and "),a("code",null,"td"),t(" . The table component is bordered by default, as the "),a("code",null,"bordered"),t(" prop is set to "),a("code",null,"true"),t(" by default. You can remove borders by setting it to "),a("code",null,"false"),t(" . You can also create a striped table using the "),a("code",null,"striped"),t(" prop. You can of course mix any of those styles. Note that you can also make a table horizontally scrollable by adding the "),a("code",null,"scrollable"),t(" prop. ")],-1),De=R({setup(b){return($,A)=>{const d=L,s=P,p=Y,g=F,T=j,m=q,n=D,S=M,h=G,f=E,v=W("RouterLink"),k=B,u=I,x=N,y=z,C=V;return r(),_(C,{id:"table-striped-demo","bordered-bottom":""},{default:l(()=>[e(y,null,{default:l(()=>[a("div",we,[a("div",$e,[e(d,{title:"Striped Table",subtitle:"Striped Table variation"}),a("div",He,[e(k,{bordered:!1,striped:""},{default:l(()=>[e(p,null,{default:l(()=>[e(s,null,{default:l(()=>[Re]),_:1}),e(s,null,{default:l(()=>[Ae]),_:1}),e(s,null,{default:l(()=>[Le]),_:1}),e(s,null,{default:l(()=>[Fe]),_:1}),e(s,null,{default:l(()=>[je]),_:1}),e(s,null,{default:l(()=>[Ee]),_:1})]),_:1}),(r(!0),H(U,null,O(c(J),(o,w)=>(r(),_(p,{key:w},{default:l(()=>[e(n,null,{default:l(()=>[e(m,null,{media:l(()=>[e(g,{picture:o.employee.picture},null,8,["picture"])]),content:l(()=>[e(T,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[t(i(o.employee.name),1)]),_:2},1024),a("p",ze,i(o.employee.position),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(m,null,{media:l(()=>[e(S,{icon:"feather:map-pin"})]),content:l(()=>[a("p",Ve,i(o.location),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(h,{size:"small",avatars:o.skills,limit:5,compact:""},null,8,["avatars"])]),_:2},1024),e(n,null,{default:l(()=>[e(f,{label:o.status.label,color:o.status.color,outlined:""},null,8,["label","color"])]),_:2},1024),e(n,{color:"default"},{default:l(()=>[a("p",Ie,i(o.experience),1)]),_:2},1024),e(n,null,{default:l(()=>[e(v,{to:{name:o.url},class:"link has-underline is-reversed rem-90"},{default:l(()=>[Ne]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),e(x,null,{code:l(()=>[e(u,{language:"html",code:c(ie)},null,8,["code"])]),props:l(()=>[e(u,{language:"javascript",code:c(X)},null,8,["code"])]),sample:l(()=>[Pe]),usage:l(()=>[Ye]),_:1})])]),_:1})]),_:1})}}}),Be={class:"mx-auto max-w-9"},Ge={class:"pt-4 pb-6"},Me={class:"is-flex is-align-items-flex-end pt-4"},We=t("Employee"),Oe=t("Location"),Ue=t("Skills"),qe=t("Status"),Je=t("Experience"),Xe=t("Action"),Ke={class:"paragraph rem-75"},Qe={class:"paragraph rem-85"},Ze={class:"paragraph rem-85"},el=t(" View Profile "),ll=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),al=a("p",{class:"paragraph rem-95"},[t(" Vulk's table is an extremely versatile component split into several sub components, for more flexibility. The "),a("code",null,"<SimpleTable />"),t(" component acts as the main wrapper. The "),a("code",null,"<SimpleTableRow />"),t(" acts as a table row whereas "),a("code",null,"<SimpleTableHeader />"),t(" and "),a("code",null,"<SimpleTableCell />"),t(" act as table "),a("code",null,"th"),t(" and "),a("code",null,"td"),t(" . The table component is bordered by default, as the "),a("code",null,"bordered"),t(" prop is set to "),a("code",null,"true"),t(" by default. You can remove borders by setting it to "),a("code",null,"false"),t(" . You can also create a striped table using the "),a("code",null,"striped"),t(" prop. You can of course mix any of those styles. Note that you can also make a table horizontally scrollable by adding the "),a("code",null,"scrollable"),t(" prop. ")],-1),tl=R({setup(b){return($,A)=>{const d=L,s=P,p=Y,g=F,T=j,m=q,n=D,S=M,h=G,f=E,v=W("RouterLink"),k=B,u=I,x=N,y=z,C=V;return r(),_(C,{id:"table-bordered-demo","bordered-bottom":""},{default:l(()=>[e(y,null,{default:l(()=>[a("div",Be,[a("div",Ge,[e(d,{title:"Table Border",subtitle:"Table border variation"}),a("div",Me,[e(k,{bordered:!0},{default:l(()=>[e(p,null,{default:l(()=>[e(s,null,{default:l(()=>[We]),_:1}),e(s,null,{default:l(()=>[Oe]),_:1}),e(s,null,{default:l(()=>[Ue]),_:1}),e(s,null,{default:l(()=>[qe]),_:1}),e(s,null,{default:l(()=>[Je]),_:1}),e(s,null,{default:l(()=>[Xe]),_:1})]),_:1}),(r(!0),H(U,null,O(c(J),(o,w)=>(r(),_(p,{key:w},{default:l(()=>[e(n,null,{default:l(()=>[e(m,null,{media:l(()=>[e(g,{picture:o.employee.picture},null,8,["picture"])]),content:l(()=>[e(T,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[t(i(o.employee.name),1)]),_:2},1024),a("p",Ke,i(o.employee.position),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(m,null,{media:l(()=>[e(S,{icon:"feather:map-pin"})]),content:l(()=>[a("p",Qe,i(o.location),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(h,{size:"small",avatars:o.skills,limit:5,compact:""},null,8,["avatars"])]),_:2},1024),e(n,null,{default:l(()=>[e(f,{label:o.status.label,color:o.status.color,outlined:""},null,8,["label","color"])]),_:2},1024),e(n,{color:"default"},{default:l(()=>[a("p",Ze,i(o.experience),1)]),_:2},1024),e(n,null,{default:l(()=>[e(v,{to:{name:o.url},class:"link has-underline is-reversed rem-90"},{default:l(()=>[el]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),e(x,null,{code:l(()=>[e(u,{language:"html",code:c(re)},null,8,["code"])]),props:l(()=>[e(u,{language:"javascript",code:c(X)},null,8,["code"])]),sample:l(()=>[ll]),usage:l(()=>[al]),_:1})])]),_:1})]),_:1})}}}),ol={class:"mx-auto max-w-9"},sl={class:"pt-4 pb-6"},nl={class:"is-flex is-align-items-flex-end pt-4"},il=t("Employee"),rl=t("Location"),pl=t("Skills"),cl=t("Status"),ml=t("Experience"),ul=t("Action"),dl={class:"paragraph rem-75"},_l={class:"paragraph rem-85"},bl={class:"paragraph rem-85"},gl=t(" View Profile "),Tl=a("div",{class:"empty-text"},[a("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),Sl=a("p",{class:"paragraph rem-95"},[t(" Vulk's table is an extremely versatile component split into several sub components, for more flexibility. The "),a("code",null,"<SimpleTable />"),t(" component acts as the main wrapper. The "),a("code",null,"<SimpleTableRow />"),t(" acts as a table row whereas "),a("code",null,"<SimpleTableHeader />"),t(" and "),a("code",null,"<SimpleTableCell />"),t(" act as table "),a("code",null,"th"),t(" and "),a("code",null,"td"),t(" . The table component is bordered by default, as the "),a("code",null,"bordered"),t(" prop is set to "),a("code",null,"true"),t(" by default. You can remove borders by setting it to "),a("code",null,"false"),t(" . You can also create a striped table using the "),a("code",null,"striped"),t(" prop. You can of course mix any of those styles. Note that you can also make a table horizontally scrollable by adding the "),a("code",null,"scrollable"),t(" prop. ")],-1),hl=R({setup(b){return($,A)=>{const d=L,s=P,p=Y,g=F,T=j,m=q,n=D,S=M,h=G,f=E,v=W("RouterLink"),k=B,u=I,x=N,y=z,C=V;return r(),_(C,{id:"table-both-demo","bordered-bottom":""},{default:l(()=>[e(y,null,{default:l(()=>[a("div",ol,[a("div",sl,[e(d,{title:"Striped Bordered",subtitle:"Striped bordered variation"}),a("div",nl,[e(k,{bordered:!0,striped:""},{default:l(()=>[e(p,null,{default:l(()=>[e(s,null,{default:l(()=>[il]),_:1}),e(s,null,{default:l(()=>[rl]),_:1}),e(s,null,{default:l(()=>[pl]),_:1}),e(s,null,{default:l(()=>[cl]),_:1}),e(s,null,{default:l(()=>[ml]),_:1}),e(s,null,{default:l(()=>[ul]),_:1})]),_:1}),(r(!0),H(U,null,O(c(J),(o,w)=>(r(),_(p,{key:w},{default:l(()=>[e(n,null,{default:l(()=>[e(m,null,{media:l(()=>[e(g,{picture:o.employee.picture},null,8,["picture"])]),content:l(()=>[e(T,{tag:"h3",size:7,weight:"semi",narrow:""},{default:l(()=>[t(i(o.employee.name),1)]),_:2},1024),a("p",dl,i(o.employee.position),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(m,null,{media:l(()=>[e(S,{icon:"feather:map-pin"})]),content:l(()=>[a("p",_l,i(o.location),1)]),_:2},1024)]),_:2},1024),e(n,null,{default:l(()=>[e(h,{size:"small",avatars:o.skills,limit:5,compact:""},null,8,["avatars"])]),_:2},1024),e(n,null,{default:l(()=>[e(f,{label:o.status.label,color:o.status.color,outlined:""},null,8,["label","color"])]),_:2},1024),e(n,{color:"default"},{default:l(()=>[a("p",bl,i(o.experience),1)]),_:2},1024),e(n,null,{default:l(()=>[e(v,{to:{name:o.url},class:"link has-underline is-reversed rem-90"},{default:l(()=>[gl]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),e(x,null,{code:l(()=>[e(u,{language:"html",code:c(pe)},null,8,["code"])]),props:l(()=>[e(u,{language:"javascript",code:c(X)},null,8,["code"])]),sample:l(()=>[Tl]),usage:l(()=>[Sl]),_:1})])]),_:1})]),_:1})}}}),Fl=R({setup(b){const $=[{label:"Table",target:"table-base-demo"},{label:"Striped",target:"table-striped-demo"},{label:"Bordered",target:"table-bordered-demo"},{label:"Both",target:"table-both-demo"}];return(A,d)=>{const s=Z,p=Q;return r(),H("div",null,[e(s,{title:"Table Component",subtitle:"Tables are a very common component that often remains as the most efficient way to display complex data. Explore Vulk tables."}),e(p,{links:$,width:"360px"}),e(Ce),e(De),e(tl),e(hl),e(le)])}}});export{Fl as default};
