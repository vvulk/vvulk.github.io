import{e as s,N as c,o as h,c as u,x as m}from"./vendor.ef15629f.js";import{a as r}from"./index.95542f14.js";const a=/(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/;const v=s({props:{width:{default:"100%"},height:{default:"10px"},mobileWidth:{default:void 0},mobileHeight:{default:void 0},disabled:{type:Boolean},centered:{type:Boolean}},setup(l){var o,n;const e=l;c(d=>({"76f55c2f":e.width,"47063f40":l.height}));const i=(o=e.mobileWidth)!=null?o:e.width,t=(n=e.mobileHeight)!=null?n:e.height;return e.width.match(a)===null&&console.warn(`VPlaceload: invalid "${e.width}" width. Should be a valid css unit value.`),e.height.match(a)===null&&console.warn(`VPlaceload: invalid "${e.height}" height. Should be a valid css unit value.`),i.match(a)===null&&console.warn(`VPlaceload: invalid "${i}" mobileWidth. Should be a valid css unit value.`),t.match(a)===null&&console.warn(`VPlaceload: invalid "${t}" mobileHeight. Should be a valid css unit value.`),(d,p)=>(h(),u("div",{class:m(["content-shape",[e.centered&&"is-centered",!e.disabled&&"loads"]])},null,2))}});var b=r(v,[["__scopeId","data-v-5381d2ec"]]);export{a as C,b as _};