import{a as b,A as f,c as w,e as k}from"./index.95542f14.js";import{_ as x}from"./NinjaToggle.dc18445d.js";import{_ as V}from"./save-10.c2f89e3c.js";import{e as C,y as N,Z as S,o as e,c as o,b as s,x as r,h as l,F as T,q as B,g as I,w as p,v as i,p as P,a as L,d}from"./vendor.ef15629f.js";const z=n=>(P("data-v-579aaa14"),n=n(),L(),n),A={class:"pricing-compact"},E={class:"billing-switcher-wrapper"},F={class:"billing-switcher"},G=z(()=>s("div",{class:"discount"},[s("img",{src:V,alt:"Save 10%"})],-1)),M={class:"pricing-compact-box"},$={class:"columns is-gapless b-columns-half-tablet-p"},j={class:"pricing-inner-box"},q={key:0,class:"popular-tag"},D={class:"paragraph rem-90"},O={class:"price"},U={key:0},Y={key:1},Z={class:"billing"},H={class:"paragraph rem-80"},J=d(" per user, per "),K={key:0},Q={key:1},R={class:"paragraph rem-80"},W=d(" when billed "),X={key:0},ss={key:1},es={class:"action"},os=C({props:{plans:null},setup(n){const u=n,a=N([]);return S(a,(_,c)=>{console.log("TOGGLE",_,c)}),(_,c)=>{const h=x,m=f,g=w,v=k;return e(),o("div",A,[s("div",E,[s("div",{class:r(["by-month",a.value.length>0?"":"is-active"])}," Monthly ",2),s("div",F,[l(h,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=t=>a.value=t),name:"pricing-toggle",flavor:"switch",color:"primary",value:"Yearly"},null,8,["modelValue"])]),s("div",{class:r(["by-year",a.value.length>0?"is-active":""])}," Annualy ",2),G]),s("div",M,[s("div",$,[(e(!0),o(T,null,B(u.plans.slice(0,4),(t,y)=>(e(),o("div",{key:y,class:"column is-3"},[s("div",j,[t.popular?(e(),o("div",q,[l(m,{color:"secondary",label:"Most Popular",elevated:""})])):I("",!0),l(g,{tag:"h3",size:5,weight:"semi"},{default:p(()=>[s("span",null,i(t.name),1)]),_:2},1024),s("p",D,i(t.description),1),s("div",O,[a.value.length>0?(e(),o("span",U,i(t.yearlyPrice),1)):(e(),o("span",Y,i(t.monthlyPrice),1))]),s("div",Z,[s("p",H,[J,a.value.length>0?(e(),o("span",K,"year")):(e(),o("span",Q,"month"))]),s("p",R,[W,a.value.length>0?(e(),o("span",X,"yearly")):(e(),o("span",ss,"monthly"))])]),s("div",es,[l(v,{color:"primary",outlined:!t.popular,bold:"",fullwidth:"",raised:""},{default:p(()=>[s("span",null,i(t.actionLabel),1)]),_:2},1032,["outlined"])])])]))),128))])])])}}});var cs=b(os,[["__scopeId","data-v-579aaa14"]]);export{cs as _};