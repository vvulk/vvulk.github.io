import{a as m,c as y,e as g}from"./index.95542f14.js";import{e as f,y as b,o,c as i,b as s,x as _,h as p,w as d,v as t,F as k,q as x,p as B,a as P}from"./vendor.ef15629f.js";const r=l=>(B("data-v-432f38ae"),l=l(),P(),l),C={class:"pricing-solo"},S={class:"pricing-solo-head"},w={class:"billing-selector"},I={class:"billing-selector-inner"},L=r(()=>s("div",{class:"naver"},null,-1)),$={class:"pricing-solo-content"},z={class:"pricing-solo-card"},F={class:"left"},N={class:"paragraph"},V={class:"inner-features"},q={class:"right"},A={key:0,class:"price"},D={class:"price-value"},E=r(()=>s("p",{class:"paragraph rem-95"},"per member, per month",-1)),M={key:1,class:"price"},T={class:"price-value"},j=r(()=>s("p",{class:"paragraph rem-95"},"per member, per year",-1)),G={class:"action"},H=f({props:{title:null,subtitle:null,features:null,monthlyPrice:null,yearlyPrice:null,link:null,linkLabel:null},setup(l){const e=l,n=b("monthly");return(J,a)=>{const u=y,v=g;return o(),i("div",C,[s("div",S,[s("div",w,[s("div",I,[s("button",{class:_(n.value==="monthly"&&"is-active"),onClick:a[0]||(a[0]=c=>n.value="monthly")}," Monthly Billing ",2),s("button",{class:_(n.value==="yearly"&&"is-active"),onClick:a[1]||(a[1]=c=>n.value="yearly")}," Annual Billing ",2),L])])]),s("div",$,[s("div",z,[s("div",F,[p(u,{tag:"h2",size:5,leading:""},{default:d(()=>[s("span",null,t(e.title),1)]),_:1}),s("p",N,t(e.subtitle),1),s("div",V,[(o(!0),i(k,null,x(e.features.slice(0,10),(c,h)=>(o(),i("div",{key:h,class:"feature-item"},[s("span",null,t(c),1)]))),128))])]),s("div",q,[s("div",null,[n.value==="monthly"?(o(),i("div",A,[s("div",D,[s("span",null,t(e.monthlyPrice),1)]),E])):(o(),i("div",M,[s("div",T,[s("span",null,t(e.yearlyPrice),1)]),j])),s("div",G,[p(v,{to:e.link,color:"primary",bold:"",fullwidth:"",raised:""},{default:d(()=>[s("span",null,t(e.linkLabel),1)]),_:1},8,["to"])])])])])])])}}});var Q=m(H,[["__scopeId","data-v-432f38ae"]]);export{Q as _};