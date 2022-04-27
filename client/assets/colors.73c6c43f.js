import{a as fn,e as Zn,b as ne,j as ee}from"./index.95542f14.js";import{_ as oe,a as te}from"./DemoTitle.a57ca7d7.js";import{D as ae}from"./DocumentationFooter.13db3194.js";import{a5 as re,e as mn,N as ce,u as b,f as R,ai as Y,y as le,o as j,c as D,b as r,v as z,h as d,w as I,z as se,A as ie,g as ue,p as pe,a as de}from"./vendor.ef15629f.js";import{r as ve}from"./vue.runtime.esm-bundler.f9ec8e20.js";import"./Hero.6770d9b7.js";import"./FooterBubbles.8a82e92f.js";var rn={exports:{}};(function(E,$){(function(_,e){e($,ve)})(re,function(_,e){function y(n,o,t){return Math.max(o,Math.min(n,t))}function m(n,o=2){return n.toFixed(o).replace(/0+$/,"").replace(/\.$/,"")}function U(n){return n.endsWith(".")?NaN:(parseFloat(n)%360+360)%360/360}function A(n){return m(360*n)}function x(n){if(!n.endsWith("%"))return NaN;const o=n.substring(0,n.length-1);if(o.endsWith("."))return NaN;const t=parseFloat(o);return Number.isNaN(t)?NaN:y(t,0,100)/100}function C(n){return m(100*n)+"%"}function P(n){if(n.endsWith("%"))return x(n);if(n.endsWith("."))return NaN;const o=parseFloat(n);return Number.isNaN(o)?NaN:y(o,0,255)/255}function S(n){return m(255*n)}function F(n){return n.endsWith("%")?x(n):y(parseFloat(n),0,1)}function H(n){return String(n)}const T={hsl:{h:{to:A,from:U},s:{to:C,from:x},l:{to:C,from:x},a:{to:H,from:F}},hwb:{h:{to:A,from:U},w:{to:C,from:x},b:{to:C,from:x},a:{to:H,from:F}},rgb:{r:{to:S,from:P},g:{to:S,from:P},b:{to:S,from:P},a:{to:H,from:F}}};function M(n){const o=n.replace(/^#/,""),t=[],s=o.length>4?2:1;for(let g=0;g<o.length;g+=s){const N=o.slice(g,g+s);t.push(N.repeat(s%2+1))}t.length===3&&t.push("ff");const p=t.map(g=>parseInt(g,16)/255);return{r:p[0],g:p[1],b:p[2],a:p[3]}}function B(n){const o=n.l<.5?n.l*(1+n.s):n.l+n.s-n.l*n.s,t=2*n.l-o;return{r:O(t,o,n.h+1/3),g:O(t,o,n.h),b:O(t,o,n.h-1/3),a:n.a}}function O(n,o,t){return t<0?t+=1:t>1&&(t-=1),t<1/6?n+6*(o-n)*t:t<.5?o:t<2/3?n+(o-n)*(2/3-t)*6:n}function J(n){return{r:Q(5,n),g:Q(3,n),b:Q(1,n),a:n.a}}function Q(n,o){const t=(n+6*o.h)%6;return o.v-o.v*o.s*Math.max(0,Math.min(t,4-t,1))}function Z(n){return{h:n.h,s:n.b===1?0:1-n.w/(1-n.b),v:1-n.b,a:n.a}}function W(n){const o=Math.min(n.r,n.g,n.b),t=Math.max(n.r,n.g,n.b);let s;return s=t===o?0:t===n.r?(0+(n.g-n.b)/(t-o))/6:t===n.g?(2+(n.b-n.r)/(t-o))/6:(4+(n.r-n.g)/(t-o))/6,s<0&&(s+=1),{h:s,w:o,b:1-t,a:n.a}}function nn(n){const o=W(n),t=o.w,s=1-o.b,p=(s+t)/2;let g;return g=s===0||t===1?0:(s-p)/Math.min(p,1-p),{h:o.h,s:g,l:p,a:n.a}}function G(n){return"#"+Object.values(n).map(o=>{const t=255*o,s=Math.round(t).toString(16);return s.length===1?"0"+s:s}).join("")}const gn={hex:[["hsl",function(n){return nn(M(n))}],["hsv",function(n){return cn(M(n))}],["hwb",function(n){return W(M(n))}],["rgb",M]],hsl:[["hex",function(n){return G(B(n))}],["hsv",function(n){const o=n.l+n.s*Math.min(n.l,1-n.l),t=o===0?0:2-2*n.l/o;return{h:n.h,s:t,v:o,a:n.a}}],["hwb",function(n){return W(B(n))}],["rgb",B]],hsv:[["hex",function(n){return G(J(n))}],["hsl",function(n){const o=n.v-n.v*n.s/2,t=Math.min(o,1-o),s=t===0?0:(n.v-o)/t;return{h:n.h,s,l:o,a:n.a}}],["hwb",function(n){return{h:n.h,w:(1-n.s)*n.v,b:1-n.v,a:n.a}}],["rgb",J]],hwb:[["hex",function(n){return G(en(n))}],["hsl",function(n){return nn(en(n))}],["hsv",Z],["rgb",en]],rgb:[["hex",G],["hsl",nn],["hsv",cn],["hwb",W]]};function en(n){return J(Z(n))}function cn(n){return Z(W(n))}function q(n){const o={};for(const t in n)o[t]=n[t];return o}const bn={hex:(n,o)=>o?n.substring(0,n.length-(n.length-1)/4):n,hsl:(n,o)=>`hsl(${m(360*n.h)} ${m(100*n.s)}% ${m(100*n.l)}%`+(o?")":` / ${m(n.a)})`),hwb:(n,o)=>`hwb(${m(360*n.h)} ${m(100*n.w)}% ${m(100*n.b)}%`+(o?")":` / ${m(n.a)})`),rgb:(n,o)=>`rgb(${m(255*n.r)} ${m(255*n.g)} ${m(255*n.b)}`+(o?")":` / ${m(n.a)})`)};function ln(n,o,t){return bn[o](n,t)}function sn(n){return!!n.startsWith("#")&&!![3,4,6,8].includes(n.length-1)&&/^#[0-9A-Fa-f]+$/.test(n)}function _n(n){if(typeof n!="string")return{format:function(i){return Object.prototype.hasOwnProperty.call(i,"r")?"rgb":Object.prototype.hasOwnProperty.call(i,"w")?"hwb":Object.prototype.hasOwnProperty.call(i,"v")?"hsv":"hsl"}(n),color:n};if(sn(n))return{format:"hex",color:n};if(!n.includes("(")){const h=document.createElement("canvas").getContext("2d");h.fillStyle=n;const i=h.fillStyle;return i==="#000000"&&n!=="black"?null:{format:"hex",color:i}}const[o,t]=n.split("("),s=o.substring(0,3),p=t.replace(/[,/)]/g," ").replace(/\s+/g," ").trim().split(" ");p.length===3&&p.push("1");const g=s.split("").concat("a"),N=Object.fromEntries(g.map((h,i)=>[h,T[s][h].from(p[i])]));return{format:s,color:N}}const on=["hex","hsl","hwb","rgb"],yn=["show","hide"],kn={class:"vacp-range-input-group"},xn=["for"],wn={class:"vacp-range-input-label-text vacp-range-input-label-text--hue"},$n=e.createTextVNode("Hue"),Cn=["id","value"],Nn=["for"],En={class:"vacp-range-input-label-text vacp-range-input-label-text--alpha"},Sn=e.createTextVNode("Alpha"),Vn=["id","value"],zn=e.createTextVNode(" Copy color "),An={class:"vacp-color-inputs"},Tn={class:"vacp-color-input-group"},Mn=["for"],Bn=e.createElementVNode("span",{class:"vacp-color-input-label-text"}," Hex ",-1),Ln=["id","value"],In=["id","for","onInput"],Fn={class:"vacp-color-input-label-text"},jn=["id","value","onInput"],Dn=e.createTextVNode(" Switch format ");var un={props:{color:{type:[String,Object],required:!1,default:null},id:{type:String,required:!1,default:"color-picker"},visibleFormats:{type:Array,required:!1,default:()=>on,validator:n=>n.length>0&&n.every(o=>on.includes(o))},defaultFormat:{type:String,required:!1,default:"hsl",validator:n=>on.includes(n)},alphaChannel:{type:String,required:!1,default:"show",validator:n=>yn.includes(n)}},emits:["color-change"],setup(n,{emit:o}){const t=n,s=e.ref(null),p=e.ref(null),g=e.ref(null),N=e.ref(!1),h=e.ref(t.defaultFormat),i=e.reactive({hex:"#ffffffff",hsl:{h:0,s:0,l:1,a:1},hsv:{h:0,s:0,v:1,a:1},hwb:{h:0,w:1,b:0,a:1},rgb:{r:1,g:1,b:1,a:1}}),Hn=e.computed(()=>{const a=Object.keys(i[h.value]);return h.value!=="hex"&&t.alphaChannel==="hide"?a.slice(0,3):a}),On=e.computed(()=>t.alphaChannel==="hide"&&[5,7].includes(i.hex.length)?i.hex.substring(0,i.hex.length-(i.hex.length-1)/4):i.hex);function Wn(){const a=t.visibleFormats.findIndex(l=>l===h.value),c=a===t.visibleFormats.length-1?0:a+1;h.value=t.visibleFormats[c]}function qn(a){N.value=!0,tn(a)}function Kn(a){N.value=!0,an(a)}function X(){N.value=!1}function tn(a){a.buttons===1&&N.value!==!1&&p.value instanceof HTMLElement&&pn(p.value,a.clientX,a.clientY)}function an(a){N.value!==!1&&p.value instanceof HTMLElement&&(a.preventDefault(),pn(p.value,a.touches[0].clientX,a.touches[0].clientY))}function pn(a,c,l){const u=function(f,V,K){const w=f.getBoundingClientRect(),Jn=V-w.left,Qn=K-w.top;return{x:y(Jn/w.width,0,1),y:y(1-Qn/w.height,0,1)}}(a,c,l),v=q(i.hsv);v.s=u.x,v.v=u.y,L("hsv",v)}function Rn(a){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(a.key))return;a.preventDefault();const c=["ArrowLeft","ArrowDown"].includes(a.key)?-1:1,l=["ArrowLeft","ArrowRight"].includes(a.key)?"s":"v",u=a.shiftKey?10:1,v=i.hsv[l]+c*u*.01,f=q(i.hsv);f[l]=y(v,0,1),L("hsv",f)}function dn(a){if(a===null)return;const c=_n(a);c!==null&&L(c.format,c.color)}function Un(a){const c=a.currentTarget,l=q(i.hsv);l.h=parseInt(c.value)/360,L("hsv",l)}function Gn(a){const c=a.currentTarget,l=q(i.hsv);l.a=parseInt(c.value)/100,L("hsv",l)}function vn(a,c,l){const u=a.target,v=q(i[c]),f=T[c][l].from(u.value);Number.isNaN(f)||f===void 0||(v[l]=f,L(c,v))}function L(a,c){let l=c;if(t.alphaChannel==="hide"){if(typeof c!="string")c.a=1,l=c;else if([5,9].includes(c.length)){const u=(c.length-1)/4;l=c.substring(0,c.length-u)+"f".repeat(u)}}if(!function(u,v){if(typeof u=="string"||typeof v=="string")return u===v;for(const f in u)if(u[f]!==v[f])return!1;return!0}(i[a],l)){i[a]=l;const u=function(v){for(const[f,V]of gn[v])i[f]=V(i[v]);return s.value instanceof HTMLElement&&p.value instanceof HTMLElement&&g.value instanceof HTMLElement&&function(f,V,K,w){f.style.setProperty("--vacp-hsl-h",String(w.hsl.h)),f.style.setProperty("--vacp-hsl-s",String(w.hsl.s)),f.style.setProperty("--vacp-hsl-l",String(w.hsl.l)),f.style.setProperty("--vacp-hsl-a",String(w.hsl.a)),V.setAttribute("style",`
    position: relative;
    background-color: hsl(calc(var(--vacp-hsl-h) * 360) 100% 50%); /* 1. */
    background-image:
      linear-gradient(to top, #000, transparent),  /* 2. */
      linear-gradient(to right, #fff, transparent) /* 2. */
    ;
  `),K.setAttribute("style",`
    box-sizing: border-box;
    position: absolute;
    left: ${100*w.hsv.s}%;   /* 3. */
    bottom: ${100*w.hsv.v}%; /* 3. */
  `)}(s.value,p.value,g.value,i),function(f,V){const K=t.alphaChannel==="hide";return{colors:f,cssColor:ln(f[V],V,K)}}(i,h.value)}(a);o("color-change",u)}}function Xn(){const a=i[h.value],c=t.alphaChannel==="hide";(function(l){if(typeof document.queryCommandSupported!="function"||!document.queryCommandSupported("copy"))return!1;const u=document.createElement("textarea");let v;u.textContent=l,u.style.position="fixed",document.body.appendChild(u),u.select();try{v=document.execCommand("copy")}catch{v=!1}finally{document.body.removeChild(u)}})(ln(a,h.value,c))}function Yn(a,c){return T[a][c].to(i[a][c])}function hn(a){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(a.key)||!a.shiftKey)return;const c=a.currentTarget,l=parseFloat(c.step),u=["ArrowLeft","ArrowDown"].includes(a.key)?-1:1,v=y(parseFloat(c.value)+u*l*10,parseInt(c.min),parseInt(c.max));c.value=String(v-u*l)}return e.watch(()=>t.color,a=>{dn(a)}),e.onMounted(()=>{document.addEventListener("mousemove",tn,{passive:!1}),document.addEventListener("touchmove",an,{passive:!1}),document.addEventListener("mouseup",X),document.addEventListener("touchend",X),dn(t.color)}),e.onBeforeUnmount(()=>{document.removeEventListener("mousemove",tn),document.removeEventListener("touchmove",an),document.removeEventListener("mouseup",X),document.removeEventListener("touchend",X)}),(a,c)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"colorPicker",ref:s,class:"vacp-color-picker"},[e.createElementVNode("div",{ref_key:"colorSpace",ref:p,class:"vacp-color-space",onMousedown:qn,onTouchstart:Kn},[e.createElementVNode("div",{ref_key:"thumb",ref:g,class:"vacp-color-space-thumb",tabindex:"0","aria-label":"Color space thumb",onKeydown:Rn},null,544)],544),e.createElementVNode("div",kn,[e.createElementVNode("label",{class:"vacp-range-input-label vacp-range-input-label--hue",for:`${n.id}-hue-slider`},[e.createElementVNode("span",wn,[e.renderSlot(a.$slots,"hue-range-input-label",{},()=>[$n])]),e.createElementVNode("input",{id:`${n.id}-hue-slider`,class:"vacp-range-input vacp-range-input--hue",value:360*e.unref(i).hsv.h,type:"range",min:"0",max:"360",step:"1",onKeydownPassive:hn,onInput:Un},null,40,Cn)],8,xn),n.alphaChannel==="show"?(e.openBlock(),e.createElementBlock("label",{key:0,class:"vacp-range-input-label vacp-range-input-label--alpha",for:`${n.id}-alpha-slider`},[e.createElementVNode("span",En,[e.renderSlot(a.$slots,"alpha-range-input-label",{},()=>[Sn])]),e.createElementVNode("input",{id:`${n.id}-alpha-slider`,class:"vacp-range-input vacp-range-input--alpha",value:100*e.unref(i).hsv.a,type:"range",min:"0",max:"100",step:"1",onKeydownPassive:hn,onInput:Gn},null,40,Vn)],8,Nn)):e.createCommentVNode("",!0)]),e.createElementVNode("button",{class:"vacp-copy-button",type:"button",onClick:Xn},[e.renderSlot(a.$slots,"copy-button",{},()=>[zn])]),e.createElementVNode("div",An,[e.createElementVNode("div",Tn,[h.value==="hex"?(e.openBlock(),e.createElementBlock("label",{key:0,class:"vacp-color-input-label",for:`${n.id}-color-hex`},[Bn,e.createElementVNode("input",{id:`${n.id}-color-hex`,class:"vacp-color-input",type:"text",value:e.unref(On),onInput:c[0]||(c[0]=l=>function(u){const v=u.target;sn(v.value)&&L("hex",v.value)}(l))},null,40,Ln)],8,Mn)):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(e.unref(Hn),l=>(e.openBlock(),e.createElementBlock("label",{id:`${n.id}-color-${h.value}-${l}`,key:`${n.id}-color-${h.value}-${l}`,class:"vacp-color-input-label",for:`${n.id}-color-${h.value}`,onInput:u=>vn(u,h.value,l)},[e.createElementVNode("span",Fn,e.toDisplayString(l.toUpperCase()),1),e.createElementVNode("input",{id:`${n.id}-color-${h.value}`,class:"vacp-color-input",type:"text",value:Yn(h.value,l),onInput:u=>vn(u,h.value,l)},null,40,jn)],40,In))),128))]),n.visibleFormats.length>1?(e.openBlock(),e.createElementBlock("button",{key:0,class:"vacp-format-switch-button",type:"button",onClick:Wn},[e.renderSlot(a.$slots,"format-switch-button",{},()=>[Dn])])):e.createCommentVNode("",!0)])],512))}};(function(n,o){o===void 0&&(o={});var t=o.insertAt;if(n&&typeof document!="undefined"){var s=document.head||document.getElementsByTagName("head")[0],p=document.createElement("style");p.type="text/css",t==="top"&&s.firstChild?s.insertBefore(p,s.firstChild):s.appendChild(p),p.styleSheet?p.styleSheet.cssText=n:p.appendChild(document.createTextNode(n))}})(`
/*
This style block is unscoped intentionally.

This is done to have a lower specificity for its selectors which in turn makes it easier to override their styles.

The specificity for \`.vacp-color-space[data-v-76c97bd2]\` is 20 while the specifcitity for \`.vacp-color-space\` is 10.
*/
.vacp-color-picker {
  --vacp-color: hsl(
    calc(var(--vacp-hsl-h) * 360)
    calc(var(--vacp-hsl-s) * 100%)
    calc(var(--vacp-hsl-l) * 100%)
    / var(--vacp-hsl-a)
  );
  --vacp-focus-color: dodgerblue;
  --vacp-color-space-width: 300px;
  --vacp-spacing: 6px;
  --vacp-tiled-background-image: linear-gradient(
      45deg,
      #eee 25%,
      transparent 25%,
      transparent 75%,
      #eee 75%,
      #eee
    ),
    linear-gradient(
      45deg,
      #eee 25%,
      transparent 25%,
      transparent 75%,
      #eee 75%,
      #eee
    )
  ;

  max-width: var(--vacp-color-space-width);
  padding: var(--vacp-spacing);
  display: grid;
  grid-gap: var(--vacp-spacing);
  grid-template-columns: 1fr min-content;
  grid-template-areas:
    "color-space  color-space"
    "range-inputs copy-button"
    "color-inputs color-inputs"
  ;
  font-size: 0.8em;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  background-color: #fff;
}
.vacp-color-picker *,
.vacp-color-picker *::before,
.vacp-color-picker *::after {
  box-sizing: border-box;
}
.vacp-color-picker button::-moz-focus-inner {
  border: none;
  padding: 0;
}
.vacp-color-picker :focus {
  outline: 2px solid var(--vacp-focus-color);
}
.vacp-color-space {
  grid-area: color-space;

  overflow: hidden;
  height: calc(var(--vacp-color-space-width) * 0.6);
}
.vacp-color-space-thumb {
  --vacp-thumb-size: calc(var(--vacp-spacing) * 4);

  width: var(--vacp-thumb-size);
  height: var(--vacp-thumb-size);
  margin-left: calc(-1 * var(--vacp-thumb-size) / 2);
  margin-bottom: calc(-1 * var(--vacp-thumb-size) / 2);
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 1px #000;
}

/*
1. Don\u2019t fully remove a focus outline or border. This is important to maintain a focus style in Windows\u2019 high contrast mode.
*/
.vacp-color-space-thumb:focus {
  outline-color: transparent; /* 1. */
  box-shadow: 0 0 0 1px #000, 0 0 0 3px var(--vacp-focus-color);
}
.vacp-range-input-label {
  --vacp-slider-track-width: 100%;
  --vacp-slider-track-height: calc(var(--vacp-spacing) * 3);
  --vacp-slider-thumb-size: calc(var(--vacp-slider-track-height) + var(--vacp-spacing));

  display: block;
}
.vacp-range-input-group {
  grid-area: range-inputs;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.vacp-range-input-group > :not(:first-child) {
  margin-top: var(--vacp-spacing);
}
.vacp-range-input,
.vacp-range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
}
.vacp-range-input {
  display: block;
  width: var(--vacp-slider-track-width);
  height: var(--vacp-slider-track-height);
  margin-right: 0;
  margin-left: 0;
  margin-top: calc(var(--vacp-spacing) / 2);
  margin-bottom: calc(var(--vacp-spacing) / 2);
  padding: 0;
  border: none;
  background: none;
}
.vacp-range-input:focus {
  outline: none;
}

/* Resets one of these annoying custom focus styles in Firefox. */
.vacp-range-input::-moz-focus-outer {
  border: none;
}
.vacp-range-input--alpha {
  background-color: #fff;
  background-image: var(--vacp-tiled-background-image);
  background-size: calc(var(--vacp-spacing) * 2) calc(var(--vacp-spacing) * 2);
  background-position: 0 0, var(--vacp-spacing) var(--vacp-spacing);
}

/*
Range input: Tracks
*/
.vacp-range-input::-moz-range-track {
  display: block;
  box-sizing: border-box;
  height: var(--vacp-slider-track-height);
  border: none;
}
.vacp-range-input::-webkit-slider-runnable-track {
  width: var(--vacp-slider-track-width);
  height: var(--vacp-slider-track-height);
  border: none;
}
.vacp-range-input::-ms-track {
  width: var(--vacp-slider-track-width);
  height: var(--vacp-slider-track-height);
  border: none;
}
.vacp-range-input:focus::-moz-range-track {
  border: 1px solid var(--vacp-focus-color);
  outline: 2px solid var(--vacp-focus-color);
}
.vacp-range-input:focus::-webkit-slider-runnable-track {
  border: 1px solid var(--vacp-focus-color);
  outline: 2px solid var(--vacp-focus-color);
}
.vacp-range-input:focus::-ms-track {
  border: 1px solid var(--vacp-focus-color);
  outline: 2px solid var(--vacp-focus-color);
}
.vacp-range-input--alpha::-moz-range-track {
  background-image: linear-gradient(to right, transparent, var(--vacp-color));
}
.vacp-range-input--alpha::-webkit-slider-runnable-track {
  background-image: linear-gradient(to right, transparent, var(--vacp-color));
}
.vacp-range-input--alpha::-ms-track {
  background-image: linear-gradient(to right, transparent, var(--vacp-color));
}
.vacp-range-input--hue::-moz-range-track {
  background-image: linear-gradient(
    to right,
    /*   0\xB0 */ #f00 calc(100% *   0/360),
    /*  60\xB0 */ #ff0 calc(100% *  60/360),
    /* 120\xB0 */ #0f0 calc(100% * 120/360),
    /* 180\xB0 */ #0ff calc(100% * 180/360),
    /* 240\xB0 */ #00f calc(100% * 240/360),
    /* 300\xB0 */ #f0f calc(100% * 300/360),
    /* 360\xB0 */ #f00 calc(100% * 360/360)
  );
}
.vacp-range-input--hue::-webkit-slider-runnable-track {
  background-image: linear-gradient(
    to right,
    /*   0\xB0 */ #f00 calc(100% *   0/360),
    /*  60\xB0 */ #ff0 calc(100% *  60/360),
    /* 120\xB0 */ #0f0 calc(100% * 120/360),
    /* 180\xB0 */ #0ff calc(100% * 180/360),
    /* 240\xB0 */ #00f calc(100% * 240/360),
    /* 300\xB0 */ #f0f calc(100% * 300/360),
    /* 360\xB0 */ #f00 calc(100% * 360/360)
  );
}
.vacp-range-input--hue::-ms-track {
  background-image: linear-gradient(
    to right,
    /*   0\xB0 */ #f00 calc(100% *   0/360),
    /*  60\xB0 */ #ff0 calc(100% *  60/360),
    /* 120\xB0 */ #0f0 calc(100% * 120/360),
    /* 180\xB0 */ #0ff calc(100% * 180/360),
    /* 240\xB0 */ #00f calc(100% * 240/360),
    /* 300\xB0 */ #f0f calc(100% * 300/360),
    /* 360\xB0 */ #f00 calc(100% * 360/360)
  );
}

/*
Range input: thumbs
*/
.vacp-range-input::-moz-range-thumb {
  box-sizing: border-box;
  width: var(--vacp-slider-thumb-size);
  height: var(--vacp-slider-thumb-size);
  border: 3px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 0 0 1px #000;
  transform: rotate(0);
}
.vacp-range-input::-webkit-slider-thumb {
  width: var(--vacp-slider-thumb-size);
  height: var(--vacp-slider-thumb-size);
  margin-top: calc((var(--vacp-slider-track-height) - var(--vacp-slider-thumb-size)) / 2);
  border: 3px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 0 0 1px #000;
  transform: rotate(0);
}
.vacp-range-input::-ms-thumb {
  width: var(--vacp-slider-thumb-size);
  height: var(--vacp-slider-thumb-size);
  margin-top: 0;
  border: 3px solid #fff;
  border-radius: 50%;
  background-color: transparent;
  box-shadow: 0 0 0 1px #000;
  transform: rotate(0);
}
.vacp-copy-button {
  grid-area: copy-button;
  justify-self: center;
  align-self: center;

  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--vacp-spacing) * 6);
  height: calc(var(--vacp-spacing) * 6);
  border: 1px solid transparent;
  border-radius: 50%;
  color: #fff;

  /* Tiled background */
  background-color: #fff;
  background-image:
    linear-gradient(var(--vacp-color), var(--vacp-color)),
    var(--vacp-tiled-background-image)
  ;
  background-size: calc(var(--vacp-spacing) * 2) calc(var(--vacp-spacing) * 2);
  background-position: 0 0, var(--vacp-spacing) var(--vacp-spacing);
}
.vacp-copy-button:enabled:not(:hover) svg {
  display: none;
}

/*
1. Justification for removing the outline: The focus styles are maintained using a solid border style. This maintains a focus style in Windows\u2019 high contrast mode which would be lost with a combination of \`outline: none\` and a box shadow because box shadows are removed in high contrast mode.
*/
.vacp-copy-button:enabled:focus {
  outline: none; /* 1. */
  box-shadow: 0 0 0 2px var(--vacp-focus-color);
  border-color: var(--vacp-focus-color);
}
.vacp-copy-button:enabled:hover {
  background-color: var(--vacp-color);
  background-image: linear-gradient(rgb(0 0 0 / 0.25), rgb(0 0 0 / 0.25));
}
.vacp-color-inputs {
  grid-area: color-inputs;
  display: flex;
  align-items: center;
}
.vacp-color-inputs > :not(:first-child) {
  margin-left: var(--vacp-spacing);
}
.vacp-color-input-group {
  flex-grow: 1;
  display: flex;
}
.vacp-color-input-label {
  flex-grow: 1;
  text-align: center;
}
.vacp-color-input-label:not(:first-child) {
  margin-left: var(--vacp-spacing);
}
.vacp-color-input {
  width: 100%;
  margin: 0;
  margin-top: calc(var(--vacp-spacing) / 2);
  padding: var(--vacp-spacing);
  border: 1px solid #ccc;
  font: inherit;
  text-align: center;
  color: inherit;
  background-color: #fff;
}
.vacp-color-input:enabled:focus {
  border-color: var(--vacp-focus-color);
}
.vacp-format-switch-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: var(--vacp-spacing);
  border: 1px solid transparent;
  font: inherit;
  color: inherit;
  background-color: #fff;
}
.vacp-format-switch-button:enabled:focus {
  border-color: var(--vacp-focus-color);
}
.vacp-format-switch-button:enabled:hover {
  background-color: #eee;
}
`);const Pn={install(n){n.component("ColorPicker",un)}};_.ColorPicker=un,_.default=Pn,Object.defineProperty(_,"__esModule",{value:!0})})})(rn,rn.exports);const k=E=>(pe("data-v-64b13b29"),E=E(),de(),E),he={class:"color-card"},fe={class:"color-card-header"},me=k(()=>r("div",{class:"color-dot is-primary"},null,-1)),ge={class:"meta"},be={class:"actions"},_e={key:0},ye={key:1},ke={key:0},xe=k(()=>r("div",{class:"is-divider"},null,-1)),we={class:"color-picker"},$e=k(()=>r("span",{class:"sr-only"},"Hue",-1)),Ce=k(()=>r("span",{class:"sr-only"},"Alpha",-1)),Ne=k(()=>r("span",{class:"is-sr-only"},"Copy color",-1)),Ee=k(()=>r("i",{class:"iconify is-clickable","aria-hidden":"true","data-icon":"feather:copy"},null,-1)),Se=k(()=>r("span",{class:"sr-only"},"Switch format",-1)),Ve=k(()=>r("i",{class:"iconify rem-120 is-clickable","aria-hidden":"true","data-icon":"fluent:chevron-up-down-20-filled"},null,-1)),ze=k(()=>r("div",{class:"is-divider"},null,-1)),Ae=k(()=>r("span",null,"Hue",-1)),Te=k(()=>r("span",null,"Saturation",-1)),Me=k(()=>r("span",null,"Luminance",-1)),Be=mn({props:{color:null},setup(E){const $=E;ce(T=>({"0a7f7d4c":b(P)}));const _=R(()=>`--${$.color}`),e=R(()=>`--${$.color}-h`),y=R(()=>`--${$.color}-s`),m=R(()=>`--${$.color}-l`),U=Y(_.value),A=Y(e.value),x=Y(y.value),C=Y(m.value),P=R(()=>`hsl(${A.value}, ${x.value}, ${C.value})`),S=le(!1),F=()=>{S.value=!S.value};function H({colors:T}){const{h:M,s:B,l:O}=T.hsl;A.value=`${Math.round(M*360)}`,x.value=`${Math.round(B*100)}%`,C.value=`${Math.round(O*100)}%`}return(T,M)=>{const B=Zn;return j(),D("div",he,[r("div",fe,[me,r("div",ge,[r("span",null,"var("+z(b(_))+")",1),r("span",null,z(b(U)),1)]),r("div",be,[d(B,{tabindex:"0",onKeydown:se(ie(F,["prevent"]),["space"]),onClick:F},{default:I(()=>[S.value?(j(),D("span",_e,"Close")):(j(),D("span",ye,"Customize"))]),_:1},8,["onKeydown"])])]),S.value?(j(),D("div",ke,[xe,r("div",we,[d(b(rn.exports.ColorPicker),{id:$.color,class:"hide-alpha hide-copy",color:`hsl(${b(A)}, ${b(x)}, ${b(C)})`,onColorChange:H},{"hue-range-input-label":I(()=>[$e]),"alpha-range-input-label":I(()=>[Ce]),"copy-button":I(()=>[Ne,Ee]),"format-switch-button":I(()=>[Se,Ve]),_:1},8,["id","color"])]),ze,r("dl",null,[r("dt",null,[Ae,r("small",null,"var("+z(b(e))+")",1)]),r("dd",null,z(b(A)),1)]),r("dl",null,[r("dt",null,[Te,r("small",null,"var("+z(b(y))+")",1)]),r("dd",null,z(b(x)),1)]),r("dl",null,[r("dt",null,[Me,r("small",null,"var("+z(b(m))+")",1)]),r("dd",null,z(b(C)),1)])])):ue("",!0)])}}});var Le=fn(Be,[["__scopeId","data-v-64b13b29"]]);const Ie={},Fe={class:"theme-colors pb-6"},je={class:"columns is-multiline py-4"},De={class:"column is-4"},Pe={class:"column is-4"},He={class:"column is-4"},Oe={class:"column is-4"},We={class:"column is-4"},qe={class:"column is-4"},Ke={class:"columns is-multiline py-4"},Re={class:"column is-4"},Ue={class:"column is-4"},Ge={class:"column is-4"},Xe={class:"column is-4"},Ye={class:"column is-4"},Je={class:"column is-4"},Qe={class:"column is-4"},Ze={class:"column is-4"},no={class:"columns is-multiline py-4"},eo={class:"column is-4"},oo={class:"column is-4"},to={class:"column is-4"};function ao(E,$){const _=oe,e=Le;return j(),D("div",Fe,[d(_,{title:"Main colors",subtitle:"Main theme and primary colors"}),r("div",je,[r("div",De,[d(e,{color:"primary"})]),r("div",Pe,[d(e,{color:"secondary"})]),r("div",He,[d(e,{color:"info"})]),r("div",Oe,[d(e,{color:"success"})]),r("div",We,[d(e,{color:"warning"})]),r("div",qe,[d(e,{color:"danger"})])]),d(_,{title:"Additional colors",subtitle:"Additional and secondary colors"}),r("div",Ke,[r("div",Re,[d(e,{color:"dark"})]),r("div",Ue,[d(e,{color:"dark-bg"})]),r("div",Ge,[d(e,{color:"green"})]),r("div",Xe,[d(e,{color:"blue"})]),r("div",Ye,[d(e,{color:"purple"})]),r("div",Je,[d(e,{color:"yellow"})]),r("div",Qe,[d(e,{color:"orange"})]),r("div",Ze,[d(e,{color:"red"})])]),d(_,{title:"Text colors",subtitle:"typography and text colors"}),r("div",no,[r("div",eo,[d(e,{color:"light-text"})]),r("div",oo,[d(e,{color:"medium-text"})]),r("div",to,[d(e,{color:"dark-text"})])])])}var ro=fn(Ie,[["render",ao],["__scopeId","data-v-0415ef28"]]);const ho=mn({setup(E){return($,_)=>{const e=te,y=ne,m=ee;return j(),D("div",null,[d(e,{title:"Vulk Colors",subtitle:"Although it is based on Bulma and Sass, Vulk uses native CSS variables for colors. Explore Vulk colors."}),d(m,null,{default:I(()=>[d(y,null,{default:I(()=>[d(ro)]),_:1})]),_:1}),d(ae)])}}});export{ho as default};
