import{_ as V}from"./FooterD.e84d41ca.js";import{_ as T}from"./CtaBlockB.fd05460b.js";import{g as I,_ as N}from"./index.4da46e89.js";import{a as E,b as M,j as Q,m as j,e as A,n as G,k as R}from"./index.95542f14.js";import{_ as D}from"./TestimonialBlockE.d67185cf.js";import{_ as H}from"./CtaBlockJ.4a113373.js";import{_ as W}from"./VInput.14180ac9.js";import{_ as z}from"./ValuesSection.6d6492fe.js";import{_ as O}from"./NinjaToggle.dc18445d.js";import{_ as U}from"./save-10.c2f89e3c.js";import{e as k,y as J,Z as Y,o as n,c as i,b as t,x as v,h as e,F as f,q as y,v as l,p as Z,a as K,l as X,w as s,u as d,d as b}from"./vendor.ef15629f.js";import{_ as ee}from"./PageTitle.23c36936.js";import{d as te}from"./index.9ce19dcf.js";import{p as oe}from"./index.907204bd.js";import{s as se}from"./index.aa4f1d8c.js";import"./FooterBubbles.8a82e92f.js";import"./Collapse.e97c8d86.js";import"./Icon.78183059.js";var ne="/assets/shapes/pricing-blob.svg";const w=c=>(Z("data-v-0b3cd765"),c=c(),K(),c),ie={class:"pricing-block"},ae={class:"billing-switcher-wrapper"},le={class:"billing-switcher"},ce=w(()=>t("div",{class:"discount"},[t("img",{src:U,alt:"Save 10%"})],-1)),re={class:"pricing-wrapper"},_e={class:"pricing-card"},pe={class:"columns is-gapless b-columns-half-tablet-p"},me={class:"condensed-plan"},ue={class:"plan-header"},de={class:"plan-description"},ge={class:"plan-price"},he={key:0,class:"yearly-price"},ve={key:1,class:"monthly-price"},fe={key:2,class:"yearly-billed"},ye={key:3,class:"monthly-billed"},ke={class:"plan-features"},be=w(()=>t("img",{class:"hr-bg",src:ne,alt:"background shape",width:"1096",height:"824"},null,-1)),we=k({props:{plans:null},setup(c){const h=c,a=J([]);return Y(a,(m,r)=>{console.log("TOGGLE",m,r)}),(m,r)=>{const g=O;return n(),i("div",ie,[t("div",ae,[t("div",{class:v(["by-month",a.value.length>0?"":"is-active"])}," Monthly ",2),t("div",le,[e(g,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=o=>a.value=o),name:"pricing-toggle",flavor:"switch",color:"primary",value:"Yearly"},null,8,["modelValue"])]),t("div",{class:v(["by-year",a.value.length>0?"is-active":""])}," Annualy ",2),ce]),t("div",re,[t("div",_e,[t("div",pe,[(n(!0),i(f,null,y(h.plans.slice(0,4),(o,_)=>(n(),i("div",{key:_,class:"column is-3"},[t("div",me,[t("div",ue,l(o.name),1),t("div",de,l(o.text),1),t("div",ge,[a.value.length>0?(n(),i("span",he,l(o.yearlyPrice),1)):(n(),i("span",ve,l(o.monthlyPrice),1)),a.value.length>0?(n(),i("div",fe," (Billed at $"+l(o.yearlyPrice)+"/year) ",1)):(n(),i("div",ye," (Billed at $"+l(o.monthlyPrice)+"/month) ",1))]),t("ul",ke,[(n(!0),i(f,null,y(o.features,(u,p)=>(n(),i("li",{key:p},l(u),1))),128))])])]))),128))])]),be])])}}});var xe=E(we,[["__scopeId","data-v-0b3cd765"]]);const Be=b(" Get Started "),$e={class:"mt-4"},Se=b(" Or Signup with Google "),We=k({setup(c){return(h,a)=>{const m=ee,r=xe,g=z,o=M,_=Q,u=W,p=j,x=A,B=G,$=X("RouterLink"),S=H,L=D,P=R,q=N,C=T,F=V;return n(),i("div",null,[e(_,{color:"grey"},{default:s(()=>[e(o,null,{default:s(()=>[e(m,{title:"Simple and Clean Pricing",subtitle:"We keep it simple",text:"Improve the way your work, discover a brand new tool and drop the hassle once and for all."}),e(r,{plans:d(te)},null,8,["plans"]),e(g,{values:d(oe),"image-height":"150px"},null,8,["values"])]),_:1})]),_:1}),e(_,{color:"grey"},{default:s(()=>[e(o,null,{default:s(()=>[e(S,{"small-text":"14-Day Trial",title:"Make Real Work Happen",subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"},{default:s(()=>[t("form",null,[e(B,{grouped:""},{default:s(()=>[e(p,{icon:"feather:user",expanded:""},{default:s(()=>[e(u,{placeholder:"Full Name"})]),_:1}),e(p,{icon:"feather:mail",expanded:""},{default:s(()=>[e(u,{placeholder:"Email"})]),_:1}),e(p,null,{default:s(()=>[e(x,{size:"form",color:"primary",long:2,raised:""},{default:s(()=>[Be]),_:1})]),_:1})]),_:1})]),t("div",$e,[e($,{to:"/",class:"paragraph text-primary"},{default:s(()=>[Se]),_:1})])]),_:1}),e(L,{image:"/assets/demo/img/people/11.jpg",name:"Michael Wallace",position:"Project Manager",content:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia.",logo:"/assets/brands/vonmo.svg",curved:"",reversed:""})]),_:1})]),_:1}),e(_,{color:"grey",wave:"wave-1","shape-color":"white"},{default:s(()=>[e(o,null,{default:s(()=>[e(P,{title:"Read our FAQs",subtitle:"Have a Question?"}),e(q,{items:d(I)},null,8,["items"]),e(C,{"title-primary":"Start Now!","content-primary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?","cta-primary":"Free Trial","cta-primary-link":"/","title-secondary":"More info?","content-secondary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?","cta-secondary":"Contact Us","cta-secondary-link":"/",boxed:"",shapes:"",animated:""})]),_:1})]),_:1}),e(F,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"light","social-links":d(se)},null,8,["social-links"])])}}});export{We as default};
