import{e as re,y as i,am as L,an as T,D as Se,al as ge,f as Y,Z as ce,ak as we,ae as w,ao as y}from"./vendor.ef15629f.js";/**
 * Vue 3 Carousel 0.1.36
 * (c) 2022
 * @license MIT
 */const m={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,breakpoints:void 0};function xe(t,l){let a;return function(...o){a&&clearTimeout(a),a=setTimeout(()=>{t(...o),a=null},l)}}function ye(t,l){let a;return function(...o){const r=this;a||(t.apply(r,o),a=!0,setTimeout(()=>a=!1,l))}}function be(t){var l,a,o;return t?((a=(l=t[0])===null||l===void 0?void 0:l.type)===null||a===void 0?void 0:a.name)==="CarouselSlide"?t:((o=t[0])===null||o===void 0?void 0:o.children)||[]:[]}function Te(t,l){if(t.wrapAround)return l-1;switch(t.snapAlign){case"start":return l-t.itemsToShow;case"end":return l-1;case"center":case"center-odd":return l-Math.ceil(t.itemsToShow/2);case"center-even":return l-Math.ceil(t.itemsToShow/2);default:return 0}}function Me(t){if(t.wrapAround)return 0;switch(t.snapAlign){case"start":return 0;case"end":return t.itemsToShow-1;case"center":case"center-odd":return Math.floor((t.itemsToShow-1)/2);case"center-even":return Math.floor((t.itemsToShow-2)/2);default:return 0}}function se(t,l,a,o){return t.wrapAround?l:Math.min(Math.max(l,o),a)}function Ae({slidesBuffer:t,currentSlide:l,snapAlign:a,itemsToShow:o,wrapAround:r,slidesCount:c}){let d=t.indexOf(l);if(a==="center"||a==="center-odd"?d-=(o-1)/2:a==="center-even"?d-=(o-2)/2:a==="end"&&(d-=o-1),!r){const S=c-o,g=0;d=Math.max(Math.min(d,S),g)}return d}var Ce=re({name:"Carousel",props:{itemsToShow:{default:m.itemsToShow,type:Number},itemsToScroll:{default:m.itemsToScroll,type:Number},wrapAround:{default:m.wrapAround,type:Boolean},snapAlign:{default:m.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:m.transition,type:Number},breakpoints:{default:m.breakpoints,type:Object},autoplay:{default:m.autoplay,type:Number},pauseAutoplayOnHover:{default:m.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:m.mouseDrag,type:Boolean},touchDrag:{default:m.touchDrag,type:Boolean},settings:{default(){return{}},type:Object}},setup(t,{slots:l,emit:a,expose:o}){var r;const c=i(null),d=i([]),S=i([]),g=i(0),u=i(1),M=i(null),A=i(null);let _=i({}),p=Object.assign({},m);const n=L(Object.assign({},p)),v=i((r=n.modelValue)!==null&&r!==void 0?r:0),de=i(0),$=i(0),D=i(0),j=i(0);T("config",n),T("slidesBuffer",S),T("slidesCount",u),T("currentSlide",v),T("maxSlide",D),T("minSlide",j);function W(){const e=Object.assign(Object.assign({},t),t.settings);_=i(Object.assign({},e.breakpoints)),p=Object.assign(Object.assign({},e),{settings:void 0,breakpoints:void 0}),G(p)}function E(){const e=Object.keys(_.value).map(f=>Number(f)).sort((f,x)=>+x-+f);let s=Object.assign({},p);e.some(f=>window.matchMedia(`(min-width: ${f}px)`).matches?(s=Object.assign(Object.assign({},s),_.value[f]),!0):!1),G(s)}function G(e){for(let s in e)n[s]=e[s]}const ve=xe(()=>{_.value&&(E(),k()),N()},16);function N(){if(!c.value)return;const e=c.value.getBoundingClientRect();g.value=e.width/n.itemsToShow}function k(){u.value=Math.max(d.value.length,1),!(u.value<=0)&&($.value=Math.ceil((u.value-1)/2),D.value=Te(n,u.value),j.value=Me(n),v.value=se(n,v.value,D.value,j.value))}function V(){const e=[...Array(u.value).keys()];if(n.wrapAround&&n.itemsToShow+1<=u.value){let x=(n.itemsToShow!==1?Math.round((u.value-n.itemsToShow)/2):0)-v.value;if(n.snapAlign==="end"?x+=Math.floor(n.itemsToShow-1):(n.snapAlign==="center"||n.snapAlign==="center-odd")&&x++,x<0)for(let C=x;C<0;C++)e.push(Number(e.shift()));else for(let C=0;C<x;C++)e.unshift(Number(e.pop()))}S.value=e}Se(()=>{_.value&&(E(),k()),N(),n.autoplay&&n.autoplay>0&&K(),window.addEventListener("resize",ve,{passive:!0})}),ge(()=>{A.value&&clearTimeout(A.value),Q(!1)});let h=!1;const I={x:0,y:0},z={x:0,y:0},O=L({x:0,y:0}),Z=i(!1),P=i(!1),fe=()=>{P.value=!0},me=()=>{P.value=!1},q=ye(e=>{h||e.preventDefault(),z.x=h?e.touches[0].clientX:e.clientX,z.y=h?e.touches[0].clientY:e.clientY;const s=z.x-I.x,f=z.y-I.y;O.y=f,O.x=s},16);function F(e){h=e.type==="touchstart",h||e.preventDefault(),!(!h&&e.button!==0||B.value)&&(Z.value=!0,I.x=h?e.touches[0].clientX:e.clientX,I.y=h?e.touches[0].clientY:e.clientY,document.addEventListener(h?"touchmove":"mousemove",q),document.addEventListener(h?"touchend":"mouseup",J))}function J(){Z.value=!1;const e=Math.sign(O.x)*.4,s=Math.round(O.x/g.value+e);let f=se(n,v.value-s,D.value,j.value);b(f),O.x=0,O.y=0,document.removeEventListener(h?"touchmove":"mousemove",q),document.removeEventListener(h?"touchend":"mouseup",J)}function K(){M.value=setInterval(()=>{n.pauseAutoplayOnHover&&P.value||X()},n.autoplay)}function Q(e=!0){!M.value||(clearInterval(M.value),e&&K())}const B=i(!1);function b(e,s=!1){if(Q(),v.value===e||B.value)return;const f=u.value-1;if(e>f)return b(e-u.value);if(e<0)return b(e+u.value);B.value=!0,de.value=v.value,v.value=e,s||a("update:modelValue",v.value),A.value=setTimeout(()=>{n.wrapAround&&V(),B.value=!1},n.transition)}function X(){let e=v.value+n.itemsToScroll;n.wrapAround||(e=Math.min(e,D.value)),b(e)}function ee(){let e=v.value-n.itemsToScroll;n.wrapAround||(e=Math.max(e,j.value)),b(e)}const te={slideTo:b,next:X,prev:ee};T("nav",te);const ne=Y(()=>Ae({slidesBuffer:S.value,itemsToShow:n.itemsToShow,snapAlign:n.snapAlign,wrapAround:Boolean(n.wrapAround),currentSlide:v.value,slidesCount:u.value}));T("slidesToScroll",ne);const pe=Y(()=>({transform:`translateX(${O.x-ne.value*g.value}px)`,transition:`${B.value?n.transition:0}ms`}));function ae(){W()}function le(){W(),E(),k(),V(),N()}function oe(){k(),V()}ce(()=>Object.values(t),le),ae(),we(()=>{const e=u.value!==d.value.length;t.modelValue!==void 0&&v.value!==t.modelValue&&b(Number(t.modelValue),!0),e&&oe()});const ie={config:n,slidesBuffer:S,slidesCount:u,slideWidth:g,currentSlide:v,maxSlide:D,minSlide:j,middleSlide:$};o({updateBreakpointsConfigs:E,updateSlidesData:k,updateSlideWidth:N,updateSlidesBuffer:V,initCarousel:ae,restartCarousel:le,updateCarousel:oe,slideTo:b,next:X,prev:ee,nav:te,data:ie});const H=l.default||l.slides,U=l.addons,ue=L(ie);return()=>{const e=be(H==null?void 0:H(ue)),s=(U==null?void 0:U(ue))||[];d.value=e,e.forEach((C,he)=>C.props.index=he);const f=w("ol",{class:"carousel__track",style:pe.value,onMousedown:n.mouseDrag?F:null,onTouchstart:n.touchDrag?F:null},e),x=w("div",{class:"carousel__viewport"},f);return w("section",{ref:c,class:"carousel","aria-label":"Gallery",onMouseenter:fe,onMouseleave:me},[x,s])}}});const _e={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},R=t=>{const l=t.name;if(!l||typeof l!="string")return;const a=_e[l],o=w("path",{d:a}),r=t.title||l,c=w("title",null,l);return w("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:r},[c,o])};R.props={name:String,title:String};const De=(t,{slots:l,attrs:a})=>{const{next:o,prev:r}=l,c=y("config",L(Object.assign({},m))),d=y("maxSlide",i(1)),S=y("minSlide",i(1)),g=y("currentSlide",i(1)),u=y("nav",{}),M=w("button",{type:"button",class:["carousel__prev",!c.wrapAround&&g.value<=S.value&&"carousel__prev--in-active",a==null?void 0:a.class],"aria-label":"Navigate to previous slide",onClick:u.prev},(r==null?void 0:r())||w(R,{name:"arrowLeft"})),A=w("button",{type:"button",class:["carousel__next",!c.wrapAround&&g.value>=d.value&&"carousel__next--in-active",a==null?void 0:a.class],"aria-label":"Navigate to next slide",onClick:u.next},(o==null?void 0:o())||w(R,{name:"arrowRight"}));return[M,A]};var je=re({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(t,{slots:l}){const a=y("config",L(Object.assign({},m))),o=y("slidesBuffer",i([])),r=y("currentSlide",i(0)),c=y("slidesToScroll",i(0)),d=i(t.index);a.wrapAround&&(S(),ce(o,S));function S(){d.value=o.value.indexOf(t.index)}const g=Y(()=>{const p=a.itemsToShow;return{width:`${1/p*100}%`,order:d.value.toString()}}),u=()=>t.index===r.value,M=()=>{const p=Math.ceil(c.value),n=Math.floor(c.value+a.itemsToShow);return o.value.slice(p,n).includes(t.index)},A=()=>t.index===o.value[Math.ceil(c.value)-1],_=()=>t.index===o.value[Math.floor(c.value+a.itemsToShow)];return()=>{var p;return w("li",{style:g.value,class:{carousel__slide:!0,"carousel__slide--active":u(),"carousel__slide--visible":M(),"carousel__slide--prev":A(),"carousel__slide--next":_()}},(p=l.default)===null||p===void 0?void 0:p.call(l))}}});export{Ce as C,De as N,je as S};
