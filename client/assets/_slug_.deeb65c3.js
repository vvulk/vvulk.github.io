import{_ as B}from"./FooterD.e84d41ca.js";import{a as S,c as L,b as N,j as q}from"./index.95542f14.js";import{_ as z}from"./arrow-left-bold.1899dcbe.js";import{e as b,l as H,o as s,c,b as t,A as g,z as I,h as r,x as P,w as d,v as a,F as y,q as v,d as m,g as k,p as R,a as V,X as A,aq as D,y as F,D as T,ar as j,Z as E,t as K,u as f}from"./vendor.ef15629f.js";import{a as M,h as W,_ as U}from"./index.d3ba3612.js";import{s as X}from"./sleep.2a252ff4.js";import{s as Z}from"./index.aa4f1d8c.js";import"./VInput.14180ac9.js";import"./FooterBubbles.8a82e92f.js";import"./PageTitle.23c36936.js";const G=n=>(R("data-v-21ea1532"),n=n(),V(),n),J={class:"help-container"},O={class:"help-toolbar"},Q=G(()=>t("span",null,"Back",-1)),Y={class:"help-container-bg"},tt={class:"category-header"},et={class:"icon"},ot=["data-icon"],st={class:"inner-content"},nt={class:"inner-text"},at={class:"card-meta"},ct=["src"],rt={class:"meta-info"},it={class:"articles-number"},lt={class:"authors"},_t=m(" Written by "),ut={class:"contributor-name"},pt={key:0},dt={key:0},mt={key:1},ht={class:"articles-list"},gt={class:"inner-content"},yt={class:"inner-text"},vt={class:"card-meta"},ft=["src"],bt={class:"meta-info"},kt={class:"author"},Ct=m(" Written by "),wt={class:"status"},xt=b({props:{category:null},setup(n){const e=n;return(i,l)=>{const _=z,u=L,h=H("RouterLink");return s(),c("div",J,[t("div",O,[t("a",{class:"back-link",onClick:l[0]||(l[0]=g(o=>i.$router.back(),["prevent"])),onKeydown:l[1]||(l[1]=I(g(()=>i.$router.back(),["prevent"]),["space"]))},[r(_),Q],32)]),t("div",Y,[t("div",tt,[t("div",et,[t("i",{class:P(["iconify",e.category.iconColor&&`text-${e.category.iconColor}`]),"data-icon":e.category.icon},null,10,ot)]),t("div",st,[r(u,{tag:"h2",size:3,weight:"semi",leading:""},{default:d(()=>[t("span",null,a(e.category.name),1)]),_:1}),t("div",nt,a(e.category.text),1),t("div",at,[(s(!0),c(y,null,v(e.category.contributors.slice(0,2),(o,p)=>(s(),c("img",{key:p,class:"small-avatar",src:o.picture,alt:"Contributor picture"},null,8,ct))),128)),t("div",rt,[t("div",it,a(e.category.articles.length)+" articles in this section ",1),t("div",lt,[_t,t("span",ut,a(e.category.contributors[0].name),1),e.category.contributors.length>1?(s(),c("span",pt,[m(" and "+a(e.category.contributors.length-1)+" ",1),e.category.contributors.length-2<1?(s(),c("span",dt," other ")):(s(),c("span",mt,"others"))])):k("",!0)])])])])]),t("div",ht,[(s(!0),c(y,null,v(e.category.articles,(o,p)=>(s(),c("div",{key:p,class:"help-article"},[r(h,{to:{name:"subpages-help-category-article-slug",params:{slug:o.slug}}},{default:d(()=>[t("div",gt,[r(u,{tag:"h3",size:5,weight:"semi",leading:""},{default:d(()=>[t("span",null,a(o.title),1)]),_:2},1024),t("div",yt,a(o.abstract),1),t("div",vt,[t("img",{class:"small-avatar",src:o.author.picture,alt:"Article author"},null,8,ft),t("div",bt,[t("div",kt,[Ct,t("span",null,a(o.author.name),1)]),t("div",wt,"Updated about "+a(o.updated),1)])])])]),_:2},1032,["to"])]))),128))])])])}}});var $t=S(xt,[["__scopeId","data-v-21ea1532"]]);async function Bt(n){const e=M.find(i=>i.slug===n);return await X(200),e?Promise.resolve(e):Promise.reject(new Error(`Category ${n} not found`))}const At=b({setup(n){const e=A(),i=D(),l=e.params.slug,_=F();async function u(){try{_.value=await Bt(l)}catch{i.replace({name:"all",params:{all:`not-found-${e.params.slug}`}})}}return T(u),j(u),E(()=>e.fullPath,u),(h,o)=>{const p=U,C=$t,w=N,x=q,$=B;return s(),c("div",null,[r(x,{color:"grey",overflown:""},{default:d(()=>[_.value?(s(),K(w,{key:0},{default:d(()=>[r(p,{title:_.value.name,subtitle:"Category",topics:f(W),compact:""},null,8,["title","topics"]),r(C,{category:_.value},null,8,["category"])]),_:1})):k("",!0)]),_:1}),r($,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"light","social-links":f(Z)},null,8,["social-links"])])}}});export{At as default};