import{_ as q}from"./DemoLinks.a671367b.js";import{_ as v,a as j}from"./DemoTitle.a57ca7d7.js";import{D as A}from"./DocumentationFooter.13db3194.js";import{_,a as k}from"./PrismCode.ad4f84de.js";import{_ as f}from"./DemoProps.8954fce9.js";import{b as y,j as w}from"./index.95542f14.js";import{_ as C}from"./TestimonialsGrid.331d6225.js";import{a as V,t as E}from"./index.d8a3f7b2.js";import{e as p,o as d,c as g,h as e,w as t,u as s,F as B,b as o}from"./vendor.ef15629f.js";import{_ as D}from"./TestimonialsMarquee.b9dfafa8.js";import{b as I,_ as S}from"./index.b3826f2d.js";import{_ as $}from"./TestimonialBlock.46f6c4b0.js";import{_ as F}from"./TestimonialsTabbed.d4051822.js";import{b as x}from"./index.e3806ea8.js";import{_ as P}from"./TestimonialsCarousel.6a546f4c.js";import{t as T}from"./index.0e9f7a09.js";import{_ as L}from"./TestimonialsCarouselColor.5352e436.js";import{c as Q}from"./index.7b22cfcc.js";import{_ as M}from"./TestimonialsCarouselSingle.cac2169d.js";import{t as O}from"./index.ea516fe6.js";import"./Hero.6770d9b7.js";import"./FooterBubbles.8a82e92f.js";import"./vue.runtime.esm-bundler.f9ec8e20.js";import"./SimpleTableHeader.43d640fd.js";import"./Blob.9fd27fc9.js";import"./MarqueeText.9df2572a.js";import"./Tabs.69185093.js";import"./Icon.78183059.js";import"./carousel.es.c13f668f.js";import"./PolkaDots.bcfb000f.js";const H={props:[{name:"testimonials",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"blobs",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},N=`
<script setup lang="ts">
import { testimonials2 } from '/@src/data/blocks/advanced/testimonials'
<\/script>

<template>
  <TestimonialsGrid :testimonials="testimonials2" blobs />
</template>
`,W=`
export const testimonials2 = [
  {
    id: 0,
    customer: {
      name: 'Mike Williams',
      photo: '/assets/demo/img/avatars/1.jpg',
      position: 'Founder @Covenant',
    },
    logo: '/assets/brands/covenant.svg',
    content:
      'Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.',
  },
  {
    id: 1,
    customer: {
      name: 'Tara Reed',
      photo: '/assets/demo/img/avatars/2.jpg',
      position: 'CFO @Kromo',
    },
    logo: '/assets/brands/kromo.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I\u2019ve been really impressed with the way that they manage our business.',
  },
  {
    id: 2,
    customer: {
      name: 'Nelly Olsen',
      photo: '/assets/demo/img/avatars/21.jpg',
      position: 'Founder @Infinite',
    },
    logo: '/assets/brands/infinite.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to.',
  },
  {
    id: 3,
    customer: {
      name: 'Adrian Felks',
      photo: '/assets/demo/img/avatars/19.jpg',
      position: 'Founder @Grubspot',
    },
    logo: '/assets/brands/grubspot.svg',
    content:
      'Bringing on Vulk has been a tremendous asset to our web business. NatureWise\u2019s sales velocity has increased substantially, and we\u2019re excited to.',
  },
  {
    id: 4,
    customer: {
      name: 'Barry Wilks',
      photo: '/assets/demo/img/avatars/24.jpg',
      position: 'CEO @Phasekit',
    },
    logo: '/assets/brands/phasekit.svg',
    content:
      "Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales. We're definitely not changing tools as this is the real deal!",
  },
  {
    id: 5,
    customer: {
      name: 'Emma Spencer',
      photo: '/assets/demo/img/avatars/17.jpg',
      position: 'Marketing Associate @Tribe',
    },
    logo: '/assets/brands/tribe.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I\u2019ve been really impressed with the way that they manage our business.',
  },
  {
    id: 6,
    customer: {
      name: 'Alan Smith',
      photo: '/assets/demo/img/avatars/23.jpg',
      position: 'Manager @Proactive',
    },
    logo: '/assets/brands/proactive.svg',
    content:
      "Once you see the algorithm in action, you see how awesome Vulk and their technology really are! I can't wait to get back working on my project!",
  },
  {
    id: 7,
    customer: {
      name: 'Lana Henriks',
      photo: '/assets/demo/img/avatars/14.jpg',
      position: 'Founder @Live Talk',
    },
    logo: '/assets/brands/livetalk.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to.',
  },
  {
    id: 8,
    customer: {
      name: 'Helen Watts',
      photo: '/assets/demo/img/avatars/12.jpg',
      position: 'Founder @Gutwork',
    },
    logo: '/assets/brands/gutwork.svg',
    content:
      'Vulk came in with a very clear perspective on how to drive brand growth on web, powerful AI systems and a strong managed services team.',
  },
]
`,G=o("div",{class:"py-4"},null,-1),U=o("div",{class:"py-4"},null,-1),z=o("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),J=p({setup(b){return(c,h)=>{const a=v,l=C,n=y,i=w,r=_,m=f,u=k;return d(),g(B,null,[e(i,{id:"block-a-demo","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block A",subtitle:"Advanced block A variation 1",link:"block-a-props"}),G,e(l,{testimonials:s(V),blobs:""},null,8,["testimonials"])]),_:1})]),_:1}),e(i,{id:"block-a-props","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block A Props",subtitle:"Available props for block A"}),U,e(u,null,{code:t(()=>[e(r,{language:"html",code:s(N)},null,8,["code"])]),props:t(()=>[e(m,{props:s(H).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:s(W)},null,8,["code"])]),usage:t(()=>[z]),_:1})]),_:1})]),_:1})],64)}}}),R={props:[{name:"testimonials",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"color",type:"string",required:"false",default:"false",values:["string"]},{name:"compact",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},K=`
<script setup lang="ts">
import { testimonials } from '/@src/data/blocks/advanced/testimonials'
<\/script>

<template>
  <TestimonialsMarquee :testimonials="testimonials" color="default" />
</template>
`,Y=`
export const testimonials = [
  {
    id: 0,
    customer: {
      name: 'Mike Williams',
      photo: '/assets/demo/img/avatars/1.jpg',
      position: 'Founder @Covenant',
    },
    logo: '/assets/brands/covenant.svg',
    content:
      'Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.',
  },
  {
    id: 1,
    customer: {
      name: 'Tara Reed',
      photo: '/assets/demo/img/avatars/2.jpg',
      position: 'CFO @Kromo',
    },
    logo: '/assets/brands/kromo.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I\u2019ve been really impressed with the way that they manage our business.',
  },
  {
    id: 2,
    customer: {
      name: 'Nelly Olsen',
      photo: '/assets/demo/img/avatars/21.jpg',
      position: 'Founder @Infinite',
    },
    logo: '/assets/brands/infinite.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we\u2019ve ever had before.',
  },
  {
    id: 3,
    customer: {
      name: 'Adrian Felks',
      photo: '/assets/demo/img/avatars/19.jpg',
      position: 'Founder @Grubspot',
    },
    logo: '/assets/brands/grubspot.svg',
    content:
      'Bringing on Vulk has been a tremendous asset to our web business. NatureWise\u2019s sales velocity has increased substantially, and we\u2019re excited to continue on that path with web DSP.',
  },
  {
    id: 4,
    customer: {
      name: 'Barry Wilks',
      photo: '/assets/demo/img/avatars/24.jpg',
      position: 'CEO @Phasekit',
    },
    logo: '/assets/brands/phasekit.svg',
    content:
      'Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales.',
  },
  {
    id: 5,
    customer: {
      name: 'Emma Spencer',
      photo: '/assets/demo/img/avatars/17.jpg',
      position: 'Marketing Associate @Tribe',
    },
    logo: '/assets/brands/tribe.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I\u2019ve been really impressed with the way that they manage our business.',
  },
  {
    id: 6,
    customer: {
      name: 'Alan Smith',
      photo: '/assets/demo/img/avatars/23.jpg',
      position: 'Manager @Proactive',
    },
    logo: '/assets/brands/proactive.svg',
    content:
      'Once you see the algorithm in action, you see how awesome Vulk and their technology really are!',
  },
  {
    id: 7,
    customer: {
      name: 'Lana Henriks',
      photo: '/assets/demo/img/avatars/14.jpg',
      position: 'Founder @Live Talk',
    },
    logo: '/assets/brands/livetalk.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we\u2019ve ever had before.',
  },
  {
    id: 8,
    customer: {
      name: 'Helen Watts',
      photo: '/assets/demo/img/avatars/12.jpg',
      position: 'Founder @Gutwork',
    },
    logo: '/assets/brands/gutwork.svg',
    content:
      'Vulk came in with a very clear perspective on how to drive brand growth on web, powerful AI systems and a strong managed services team.',
  },
  {
    id: 9,
    customer: {
      name: 'John Bigsby',
      photo: '/assets/demo/img/avatars/22.jpg',
      position: 'Founder @Bitbreaker',
    },
    logo: '/assets/brands/bitbreaker.svg',
    content:
      'Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales.',
  },
]
`,X=o("div",{class:"py-4"},null,-1),Z=o("div",{class:"py-4"},null,-1),ee=o("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),te=p({setup(b){return(c,h)=>{const a=v,l=y,n=D,i=w,r=_,m=f,u=k;return d(),g(B,null,[e(i,{id:"block-b-demo","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(a,{title:"Block B",subtitle:"Advanced block B variation 1",link:"block-b-props"}),X]),_:1}),e(n,{testimonials:s(E),color:"default"},null,8,["testimonials"])]),_:1}),e(i,{id:"block-b-props","bordered-bottom":""},{default:t(()=>[e(l,null,{default:t(()=>[e(a,{title:"Block B Props",subtitle:"Available props for block B"}),Z,e(u,null,{code:t(()=>[e(r,{language:"html",code:s(K)},null,8,["code"])]),props:t(()=>[e(m,{props:s(R).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:s(Y)},null,8,["code"])]),usage:t(()=>[ee]),_:1})]),_:1})]),_:1})],64)}}}),se={props:[{name:"items",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"pulled",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},oe=`
<script setup lang="ts">
import { vehicleTestimonials } from '/@src/data/pages/vehicle'
<\/script>

<template>
  <TestimonialCards :items="vehicleTestimonials" />
</template>
`,ae=`
export const testimonials = [
  {
    id: 0,
    customer: {
      name: 'Mike Williams',
      photo: '/assets/demo/img/avatars/1.jpg',
      position: 'Founder @Covenant',
    },
    logo: '/assets/brands/covenant.svg',
    content:
      'Vulk software is notably robust, and their analysts have helped us both maximize profitability and truly understand the incremental value of our web Ads.',
  },
  {
    id: 1,
    customer: {
      name: 'Tara Reed',
      photo: '/assets/demo/img/avatars/2.jpg',
      position: 'CFO @Kromo',
    },
    logo: '/assets/brands/kromo.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I\u2019ve been really impressed with the way that they manage our business.',
  },
  {
    id: 2,
    customer: {
      name: 'Nelly Olsen',
      photo: '/assets/demo/img/avatars/21.jpg',
      position: 'Founder @Infinite',
    },
    logo: '/assets/brands/infinite.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we\u2019ve ever had before.',
  },
  {
    id: 3,
    customer: {
      name: 'Adrian Felks',
      photo: '/assets/demo/img/avatars/19.jpg',
      position: 'Founder @Grubspot',
    },
    logo: '/assets/brands/grubspot.svg',
    content:
      'Bringing on Vulk has been a tremendous asset to our web business. NatureWise\u2019s sales velocity has increased substantially, and we\u2019re excited to continue on that path with web DSP.',
  },
  {
    id: 4,
    customer: {
      name: 'Barry Wilks',
      photo: '/assets/demo/img/avatars/24.jpg',
      position: 'CEO @Phasekit',
    },
    logo: '/assets/brands/phasekit.svg',
    content:
      'Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales.',
  },
  {
    id: 5,
    customer: {
      name: 'Emma Spencer',
      photo: '/assets/demo/img/avatars/17.jpg',
      position: 'Marketing Associate @Tribe',
    },
    logo: '/assets/brands/tribe.svg',
    content:
      'Not only are our metrics and performance up and exceeding expectations, but I\u2019ve been really impressed with the way that they manage our business.',
  },
  {
    id: 6,
    customer: {
      name: 'Alan Smith',
      photo: '/assets/demo/img/avatars/23.jpg',
      position: 'Manager @Proactive',
    },
    logo: '/assets/brands/proactive.svg',
    content:
      'Once you see the algorithm in action, you see how awesome Vulk and their technology really are!',
  },
  {
    id: 7,
    customer: {
      name: 'Lana Henriks',
      photo: '/assets/demo/img/avatars/14.jpg',
      position: 'Founder @Live Talk',
    },
    logo: '/assets/brands/livetalk.svg',
    content:
      'Vulk has definitely made the management of our web advertising better. By combining the convenience of managing keywords and bids, along with being able to track our ongoing results, Vulk has given us more control over our web advertising than we\u2019ve ever had before.',
  },
  {
    id: 8,
    customer: {
      name: 'Helen Watts',
      photo: '/assets/demo/img/avatars/12.jpg',
      position: 'Founder @Gutwork',
    },
    logo: '/assets/brands/gutwork.svg',
    content:
      'Vulk came in with a very clear perspective on how to drive brand growth on web, powerful AI systems and a strong managed services team.',
  },
  {
    id: 9,
    customer: {
      name: 'John Bigsby',
      photo: '/assets/demo/img/avatars/22.jpg',
      position: 'Founder @Bitbreaker',
    },
    logo: '/assets/brands/bitbreaker.svg',
    content:
      'Within three months of starting with Vulk, we had our best month ever in terms of both profits and sales.',
  },
]
`,ne=o("div",{class:"py-4"},null,-1),ie=o("div",{class:"py-4"},null,-1),re=o("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),le=p({setup(b){return(c,h)=>{const a=v,l=S,n=y,i=w,r=_,m=f,u=k;return d(),g(B,null,[e(i,{id:"block-c-demo","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block A",subtitle:"Advanced block A variation 1",link:"block-c-props"}),ne,e(l,{items:s(I)},null,8,["items"])]),_:1})]),_:1}),e(i,{id:"block-c-props","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block C Props",subtitle:"Available props for block C"}),ie,e(u,null,{code:t(()=>[e(r,{language:"html",code:s(oe)},null,8,["code"])]),props:t(()=>[e(m,{props:s(se).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:s(ae)},null,8,["code"])]),usage:t(()=>[re]),_:1})]),_:1})]),_:1})],64)}}}),me={props:[{name:"image",type:"string",required:"true",default:"false",values:["string"]},{name:"title",type:"string",required:"true",default:"false",values:["string"]},{name:"content",type:"string",required:"true",default:"false",values:["string"]},{name:"link",type:"string",required:"false",default:"false",values:["string"]},{name:"linkLabel",type:"string",required:"true",default:"false",values:["string"]}],slots:[]},ue=`
<template>
  <TestimonialBlock
    image="/assets/demo/img/content/500x500/1.jpg"
    title="I had trouble finding a fair deal. Then I simply decided to start
      using Vulk and it actually worked!"
    content="Isabella's insurance policy deals that were found on our platform
      completely changed her life and removed all the hassle."
    link-label="Read Isabella's Story"
    link="/about"
  />
</template>
`,ce=o("div",{class:"py-4"},null,-1),pe=o("div",{class:"py-4"},null,-1),de=o("div",{class:"empty-text"},[o("p",{class:"paragraph rem-95"}," No data sample available for this component ")],-1),ge=o("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),be=p({setup(b){return(c,h)=>{const a=v,l=$,n=y,i=w,r=_,m=f,u=k;return d(),g(B,null,[e(i,{id:"block-d-demo","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block D",subtitle:"Advanced block D variation 1",link:"block-d-props"}),ce,e(l,{image:"/assets/demo/img/content/500x500/1.jpg",title:`I had trouble finding a fair deal. Then I simply decided to start
          using Vulk and it actually worked!`,content:`Isabella's insurance policy deals that were found on our platform
          completely changed her life and removed all the hassle.`,"link-label":"Read Isabella's Story",link:"/about"})]),_:1})]),_:1}),e(i,{id:"block-d-props","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block D Props",subtitle:"Available props for block D"}),pe,e(u,null,{code:t(()=>[e(r,{language:"html",code:s(ue)},null,8,["code"])]),props:t(()=>[e(m,{props:s(me).props},null,8,["props"])]),sample:t(()=>[de]),usage:t(()=>[ge]),_:1})]),_:1})]),_:1})],64)}}}),he={props:[{name:"trainees",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"mentors",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},ve=`
<script setup lang="ts">
import { mentorTestimonials } from '/@src/data/pages/mentors'
<\/script>

<template>
  <TestimonialsTabbed
    :trainees="mentorTestimonials.trainees"
    :mentors="mentorTestimonials.mentors"
  />
</template>
`,_e=`
export const mentorTestimonials = {
  trainees: [
    {
      title:
        'Vulk has given me confidence in my plans and also allowed me to explore new opportunities and ways to increase my income',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Ousman Abedi',
        role: 'Store Owner',
        picture: '/assets/demo/img/avatars/51.jpg',
        logo: '/assets/brands/asuna.svg',
      },
    },
    {
      title:
        "Vulk mentors helped me so much strenghtening my company's growth and securing new sources of income ",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Dany Bolzcak',
        role: 'Startup Owner',
        picture: '/assets/demo/img/avatars/55.jpg',
        logo: '/assets/brands/vonmo.svg',
      },
    },
    {
      title:
        'I was so surprised to see all my metrics going up after only a month using Vulk mentors. Astonishing!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Christina Chu',
        role: 'Business Owner',
        picture: '/assets/demo/img/avatars/29.jpg',
        logo: '/assets/brands/bobcot.svg',
      },
    },
    {
      title:
        'My analytics started going nuts after I took four sessions with Henry Miller, a marketing specialist I met here!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Helena Firnalts',
        role: 'Shop Owner',
        picture: '/assets/demo/img/avatars/21.jpg',
        logo: '/assets/brands/tetra.svg',
      },
    },
  ],
  mentors: [
    {
      title:
        'I enjoy my participation to Vulk Mentors every single day. I like to meet new people and to discuss new opportunities ',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Daryl Keppler',
        role: 'Marketing Specialist',
        picture: '/assets/demo/img/people/7a.jpg',
        logo: '/assets/brands/kromo.svg',
      },
    },
    {
      title:
        'As a business owner, I totally understand the struggles one can run into when launching a product or a new service. This is why Ian here',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Armin Azadian',
        role: 'CEO @Livetalk',
        picture: '/assets/demo/img/avatars/43.jpg',
        logo: '/assets/brands/livetalk.svg',
      },
    },
    {
      title:
        "I already try to help people in my everyday work. Let's say Vulk mentors only reinforced that desire of mine",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Jordan Daniels',
        role: 'Business Developer',
        picture: '/assets/demo/img/avatars/57.jpg',
        logo: '/assets/brands/tribe.svg',
      },
    },
    {
      title:
        'Iam always interested in helping other people with their businesses. It has proved to be even useful for my own company',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Bianca Sorelli',
        role: 'Head of Marketing',
        picture: '/assets/demo/img/avatars/17.jpg',
        logo: '/assets/brands/grubspot.svg',
      },
    },
  ],
}
`,ke=o("div",{class:"py-4"},null,-1),fe=o("div",{class:"py-4"},null,-1),ye=o("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),we=p({setup(b){return(c,h)=>{const a=v,l=F,n=y,i=w,r=_,m=f,u=k;return d(),g(B,null,[e(i,{id:"block-e-demo","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block E",subtitle:"Advanced block E variation 1",link:"block-c-props"}),ke,e(l,{trainees:s(x).trainees,mentors:s(x).mentors},null,8,["trainees","mentors"])]),_:1})]),_:1}),e(i,{id:"block-e-props","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block E Props",subtitle:"Available props for block E"}),fe,e(u,null,{code:t(()=>[e(r,{language:"html",code:s(ve)},null,8,["code"])]),props:t(()=>[e(m,{props:s(he).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:s(_e)},null,8,["code"])]),usage:t(()=>[ye]),_:1})]),_:1})]),_:1})],64)}}}),Be={props:[{name:"slides",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"inverted",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},xe=`
<script setup lang="ts">
import { testimonials } from '/@src/data/pages/commerce'
<\/script>

<template>
  <TestimonialsCarousel :slides="testimonials" />
</template>
`,Te=`
export const mentorTestimonials = {
  trainees: [
    {
      title:
        'Vulk has given me confidence in my plans and also allowed me to explore new opportunities and ways to increase my income',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Ousman Abedi',
        role: 'Store Owner',
        picture: '/assets/demo/img/avatars/51.jpg',
        logo: '/assets/brands/asuna.svg',
      },
    },
    {
      title:
        "Vulk mentors helped me so much strenghtening my company's growth and securing new sources of income ",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Dany Bolzcak',
        role: 'Startup Owner',
        picture: '/assets/demo/img/avatars/55.jpg',
        logo: '/assets/brands/vonmo.svg',
      },
    },
    {
      title:
        'I was so surprised to see all my metrics going up after only a month using Vulk mentors. Astonishing!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Christina Chu',
        role: 'Business Owner',
        picture: '/assets/demo/img/avatars/29.jpg',
        logo: '/assets/brands/bobcot.svg',
      },
    },
    {
      title:
        'My analytics started going nuts after I took four sessions with Henry Miller, a marketing specialist I met here!',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Helena Firnalts',
        role: 'Shop Owner',
        picture: '/assets/demo/img/avatars/21.jpg',
        logo: '/assets/brands/tetra.svg',
      },
    },
  ],
  mentors: [
    {
      title:
        'I enjoy my participation to Vulk Mentors every single day. I like to meet new people and to discuss new opportunities ',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Daryl Keppler',
        role: 'Marketing Specialist',
        picture: '/assets/demo/img/people/7a.jpg',
        logo: '/assets/brands/kromo.svg',
      },
    },
    {
      title:
        'As a business owner, I totally understand the struggles one can run into when launching a product or a new service. This is why Ian here',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Armin Azadian',
        role: 'CEO @Livetalk',
        picture: '/assets/demo/img/avatars/43.jpg',
        logo: '/assets/brands/livetalk.svg',
      },
    },
    {
      title:
        "I already try to help people in my everyday work. Let's say Vulk mentors only reinforced that desire of mine",
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Jordan Daniels',
        role: 'Business Developer',
        picture: '/assets/demo/img/avatars/57.jpg',
        logo: '/assets/brands/tribe.svg',
      },
    },
    {
      title:
        'Iam always interested in helping other people with their businesses. It has proved to be even useful for my own company',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te quidem video minime esse deterritum. Quae cum dixisset, finem ille. Eam tum adesse, cum dolor omnis absit',
      member: {
        name: 'Bianca Sorelli',
        role: 'Head of Marketing',
        picture: '/assets/demo/img/avatars/17.jpg',
        logo: '/assets/brands/grubspot.svg',
      },
    },
  ],
}
`,qe=o("div",{class:"py-4"},null,-1),je=o("div",{class:"py-4"},null,-1),Ae=o("div",{class:"py-4"},null,-1),Ce=o("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Ve=p({setup(b){return(c,h)=>{const a=v,l=P,n=y,i=w,r=_,m=f,u=k;return d(),g(B,null,[e(i,{id:"block-f-demo","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block F",subtitle:"Advanced block F variation 1",link:"block-f-props"}),qe,e(l,{slides:s(T)},null,8,["slides"])]),_:1})]),_:1}),e(i,{color:"darker","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block F",subtitle:"Advanced block F variation 2",link:"block-f-props",inverted:""}),je,e(l,{slides:s(T),inverted:""},null,8,["slides"])]),_:1})]),_:1}),e(i,{id:"block-f-props","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block F Props",subtitle:"Available props for block F"}),Ae,e(u,null,{code:t(()=>[e(r,{language:"html",code:s(xe)},null,8,["code"])]),props:t(()=>[e(m,{props:s(Be).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:s(Te)},null,8,["code"])]),usage:t(()=>[Ce]),_:1})]),_:1})]),_:1})],64)}}}),Ee={props:[{name:"slides",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]}],slots:[]},De=`
<script setup lang="ts">
import { workoutTestimonials } from '/@src/data/pages/workout'
<\/script>

<template>
  <TestimonialsCarouselColor :slides="workoutTestimonials" />
</template>
`,Ie=`
export const workoutTestimonials = [
  {
    id: 0,
    name: 'Greg Norton',
    picture: '/assets/demo/img/bg/greg-avatar.png',
    cover: '/assets/demo/img/bg/greg-cover-night.png',
    quote: 'This app changed my life',
    subquote: 'Greg lost 35lbs using our app daily',
  },
  {
    id: 1,
    name: 'Jane Smith',
    picture: '/assets/demo/img/bg/jane-avatar.png',
    cover: '/assets/demo/img/bg/jane-cover-teal.png',
    quote: 'It feel so much better now',
    subquote: 'Jane lost 10lbs using our app daily',
  },
  {
    id: 2,
    name: 'Andres Cabeza',
    picture: '/assets/demo/img/bg/andres-avatar.png',
    cover: '/assets/demo/img/bg/andres-cover-yellow.png',
    quote: 'I simply love my new lifestyle',
    subquote: 'Jane lost 5lbs using our app daily',
  },
  {
    id: 3,
    name: 'Yuko Maeba',
    picture: '/assets/demo/img/bg/yuko-avatar.png',
    cover: '/assets/demo/img/bg/yuko-cover-orange.png',
    quote: 'It is a pleasure to use this service',
    subquote: 'Jane lost 3lbs using our app daily',
  },
]
`,Se=o("div",{class:"py-4"},null,-1),$e=o("div",{class:"py-4"},null,-1),Fe=o("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),Pe=p({setup(b){return(c,h)=>{const a=v,l=L,n=y,i=w,r=_,m=f,u=k;return d(),g(B,null,[e(i,{id:"block-g-demo","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block G",subtitle:"Advanced block G variation 1",link:"block-g-props"}),Se,e(l,{slides:s(Q)},null,8,["slides"])]),_:1})]),_:1}),e(i,{id:"block-g-props","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block G Props",subtitle:"Available props for block G"}),$e,e(u,null,{code:t(()=>[e(r,{language:"html",code:s(De)},null,8,["code"])]),props:t(()=>[e(m,{props:s(Ee).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:s(Ie)},null,8,["code"])]),usage:t(()=>[Fe]),_:1})]),_:1})]),_:1})],64)}}}),Le={props:[{name:"slides",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]}],slots:[]},Qe=`
<script setup lang="ts">
import { testimonials } from '/@src/data/pages/jobs'
<\/script>

<template>
  <TestimonialsCarouselSingle :slides="testimonials" />
</template>
`,Me=`
export const testimonials = [
  {
    logo: '/assets/brands/vonmo.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Invidiosum nomen est, infame, suspectum. Utilitatis causa amicitia est quaesita. Non laboro, inquit, de nomine. Duo Reges: constructio interrete. Aliter homines, aliter philosophos loqui putas oportere?',
    sales: 90,
    conversions: 45,
    testifier: {
      name: 'Danny Stokes',
      picture: '/assets/demo/img/avatars/45.jpg',
      role: 'Founder @Vonmo',
    },
  },
  {
    logo: '/assets/brands/infinite.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Invidiosum nomen est, infame, suspectum. Utilitatis causa amicitia est quaesita. Non laboro, inquit, de nomine. Duo Reges: constructio interrete. Aliter homines, aliter philosophos loqui putas oportere?',
    sales: 75,
    conversions: 52,
    testifier: {
      name: 'Bella Walid',
      picture: '/assets/demo/img/avatars/30.jpg',
      role: 'Founder @Infinite',
    },
  },
  {
    logo: '/assets/brands/tribe.svg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Invidiosum nomen est, infame, suspectum. Utilitatis causa amicitia est quaesita. Non laboro, inquit, de nomine. Duo Reges: constructio interrete. Aliter homines, aliter philosophos loqui putas oportere?',
    sales: 84,
    conversions: 65,
    testifier: {
      name: 'Johanna Miller',
      picture: '/assets/demo/img/avatars/42.jpg',
      role: 'Founder @Tribe',
    },
  },
]
`,Oe=o("div",{class:"py-4"},null,-1),He=o("div",{class:"py-4"},null,-1),Ne=o("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Testimonial blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),We=p({setup(b){return(c,h)=>{const a=v,l=M,n=y,i=w,r=_,m=f,u=k;return d(),g(B,null,[e(i,{id:"block-h-demo","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block H",subtitle:"Advanced block H variation 1",link:"block-h-props"}),Oe,e(l,{slides:s(O)},null,8,["slides"])]),_:1})]),_:1}),e(i,{id:"block-h-props","bordered-bottom":""},{default:t(()=>[e(n,null,{default:t(()=>[e(a,{title:"Block H Props",subtitle:"Available props for block H"}),He,e(u,null,{code:t(()=>[e(r,{language:"html",code:s(Qe)},null,8,["code"])]),props:t(()=>[e(m,{props:s(Le).props},null,8,["props"])]),sample:t(()=>[e(r,{language:"javascript",code:s(Me)},null,8,["code"])]),usage:t(()=>[Ne]),_:1})]),_:1})]),_:1})],64)}}}),yt=p({setup(b){const c=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"},{label:"Block E",target:"block-e-demo"},{label:"Block F",target:"block-f-demo"},{label:"Block G",target:"block-g-demo"},{label:"Block H",target:"block-h-demo"}];return(h,a)=>{const l=j,n=q;return d(),g("div",null,[e(l,{title:"Testimonial Blocks",subtitle:"More than 8 customizable navbar blocks are awaiting for you to build your own layouts, pages, and content."}),e(n,{links:c,width:"750px"}),e(J),e(te),e(le),e(be),e(we),e(Ve),e(Pe),e(We),e(A)])}}});export{yt as default};
