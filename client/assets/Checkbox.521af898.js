import{a as _}from"./index.95542f14.js";import{e as h,f as c,o as n,c as t,b as s,u as d,v as m,g as f,x as v,p as b,a as k}from"./vendor.ef15629f.js";const u=a=>(b("data-v-58855b10"),a=a(),k(),a),x=["for"],y={class:"checkbox-inner"},V=["id","value","checked"],g=u(()=>s("i",{class:"iconify rem-70","data-icon":"feather:check"},null,-1)),C=u(()=>s("span",{class:"inner-overlay"},null,-1)),B={key:0,class:"checkbox-label"},I=h({props:{name:null,color:{default:"primary"},value:{default:void 0},modelValue:{default:()=>[]},disabled:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},label:{default:void 0}},emits:["update:modelValue"],setup(a,{emit:i}){const e=a,l=c(()=>e.modelValue.includes(e.value));function r(){const o=[...e.modelValue];l.value?o.splice(o.indexOf(e.value),1):o.push(e.value),i("update:modelValue",o)}const p=c(()=>[e.color&&`is-${e.color}`,e.rounded&&"is-rounded"]);return(o,S)=>(n(),t("div",{class:v(["checkbox",d(p)])},[s("label",{for:`checkbox-${e.name}`,class:"checkbox-inner-wrap"},[s("span",y,[s("input",{id:`checkbox-${e.name}`,value:e.value,checked:d(l),type:"checkbox",onChange:r},null,40,V),g,C]),e.label?(n(),t("span",B,m(e.label),1)):f("",!0)],8,x)],2))}});var N=_(I,[["__scopeId","data-v-58855b10"]]);export{N as _};
