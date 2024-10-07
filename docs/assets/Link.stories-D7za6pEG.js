import{k as m,j as t}from"./createTheme-BLV71W9B.js";import{I as u}from"./IconWrapper-CILvoXB7.js";import{r as f}from"./index-CTjT7uj6.js";import{S as h}from"./SvgIcon-DGwFtjWv.js";import"./extends-CF3RwP-h.js";import"./DefaultPropsProvider-BMD7a7hs.js";import"./Box-CCPMVSfO.js";const x=m`
    0% {
        transform: translate(0, 0)
    }
    100% {
        transform: translate(-2px, 0);
    }
`,k=m`
    0% {
      transform: translate(-2px, 0);
    }
    100% {
        transform: translate(0, 0);
    }
`,r=i=>{const[p,o]=f.useState(""),d=()=>{const s=`${x} .5s forwards 1`;o(s)},l=()=>{const s=`${k} .5s backwards 1`;o(s)};return t.jsx(u,{onMouseOver:d,onMouseOut:l,sx:{"path:first-of-type":{transformOrigin:"center",animation:`${p}`}},children:t.jsxs(h,{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",...i,children:[t.jsx("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1"}),t.jsx("path",{d:"M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"})]})})};r.__docgenInfo={description:"",methods:[],displayName:"AnimatedLink"};const L={component:r,tags:["autodocs"]},e={render:()=>t.jsx(r,{}),parameters:{controls:{exclude:/.*/g}}};var n,a,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <AnimatedLink />,
  parameters: {
    controls: {
      exclude: /.*/g
    }
  }
}`,...(c=(a=e.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const A=["Default"];export{e as Default,A as __namedExportsOrder,L as default};
