import{a as N,g as f,e as T}from"./index.95542f14.js";import{_ as V}from"./NavbarSocialItem.70bb9646.js";import{_ as L}from"./ThemeToggle.d8bb711d.js";import{_ as $}from"./Hamburger.55d8f33a.js";import{e as F,af as z,f as d,y as H,l as K,o as u,c as p,b as e,h as s,w as n,A as m,z as M,x as v,u as b,F as R,q as j,p as q,a as A,d as i}from"./vendor.ef15629f.js";const _=o=>(q("data-v-71067ace"),o=o(),A(),o),E={class:"container"},G={class:"navbar-brand"},O=_(()=>e("img",{class:"navbar-logo",src:f,alt:"logo"},null,-1)),P=_(()=>e("span",{class:"is-sr-only"},"Vulk",-1)),U={class:"navbar-start"},W=i(" Home "),D=i(" Features "),J=i(" Pricing "),Q=i(" Team "),X={class:"navbar-center"},Y={class:"centered-brand"},Z=_(()=>e("img",{class:"navbar-logo",src:f,alt:"logo"},null,-1)),ee=_(()=>e("span",{class:"is-sr-only"},"Vulk",-1)),se={class:"navbar-end"},ae={class:"navbar-item is-flex is-align-items-center is-justify-content-center"},ne={class:"navbar-item"},te={class:"navbar-item"},oe=i("Sign Up"),ie=F({props:{fixed:{type:Boolean,default:!1},dropdownBoxed:{type:Boolean,default:!1},mode:{default:"fade"}},setup(o){const l=o,{y:h}=z(),g=d(()=>h.value>60),a=H(!1),x=[{icon:"fa:twitter",label:"Twitter",link:"https://twitter.com"},{icon:"fa:linkedin",label:"Linkedin",link:"https://linkedin.com"},{icon:"fa:github",label:"Github",link:"https://github.com"}],k=d(()=>[l.fixed&&"is-fixed-top",l.mode&&`is-${l.mode}`,l.fixed&&g.value&&"is-scrolled",a.value&&"is-solid"]),y=d(()=>[a.value&&"is-active"]);return(le,c)=>{const t=K("RouterLink"),w=$,C=L,B=V,S=T;return u(),p("nav",{class:v(["navbar is-transparent is-centered",b(k)])},[e("div",E,[e("div",G,[s(t,{to:{name:"index"},class:"navbar-item"},{default:n(()=>[O,P]),_:1}),e("div",{class:"navbar-burger",onClick:c[0]||(c[0]=m(r=>a.value=!a.value,["prevent"])),onKeydown:c[1]||(c[1]=M(m(()=>a.value=!a.value,["prevent"]),["space"]))},[s(w,{open:a.value},null,8,["open"])],32)]),e("div",{class:v(["navbar-menu b-centered-mobile b-centered-tablet-p",b(y)])},[e("div",U,[s(t,{to:{name:"index"},class:"navbar-item has-naver"},{default:n(()=>[W]),_:1}),s(t,{to:{name:"index"},class:"navbar-item has-naver"},{default:n(()=>[D]),_:1}),s(t,{to:{name:"index"},class:"navbar-item has-naver"},{default:n(()=>[J]),_:1}),s(t,{to:{name:"index"},class:"navbar-item has-naver"},{default:n(()=>[Q]),_:1})]),e("div",X,[e("div",Y,[s(t,{to:{name:"index"},class:"navbar-item"},{default:n(()=>[Z,ee]),_:1})])]),e("div",se,[e("div",ae,[s(C)]),e("div",ne,[(u(),p(R,null,j(x,(r,I)=>s(B,{key:I,icon:r.icon,label:r.label,link:r.link},null,8,["icon","label","link"])),64))]),e("div",te,[s(S,{color:"primary",raised:"",bold:"",custom:""},{default:n(()=>[oe]),_:1})])])],2)])],2)}}});var pe=N(ie,[["__scopeId","data-v-71067ace"]]);export{pe as _};