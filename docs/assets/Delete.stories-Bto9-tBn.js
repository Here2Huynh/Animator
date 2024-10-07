import{k as p,j as t}from"./createTheme-BLV71W9B.js";import{I as f}from"./IconWrapper-CILvoXB7.js";import{r as x}from"./index-CTjT7uj6.js";import{S as u}from"./SvgIcon-DGwFtjWv.js";import"./extends-CF3RwP-h.js";import"./DefaultPropsProvider-BMD7a7hs.js";import"./Box-CCPMVSfO.js";const h=p`
    0% {
        transform: translate(0, 0)
    }

    100% {
        transform: translate(0, -10px);
    }
`,g=p`
    0% {
        transform: rotate(10deg) translate(-2px, -10px);
    }
    50% {
        transform: rotate(10deg) translate(-2px, -2px);
    }
    70% {
        transform: rotate(-10deg) translate(2px, -2px);
    }
    90% {
        transform: rotate(10deg) translate(-2px, -2px);
    }
    100% {
        transform: rotate(0deg) translate(0, 0);
    }
`,a=c=>{const[d,s]=x.useState(""),l=()=>{const r=`${h} 0.5s forwards 1`;s(r)},i=()=>{const r=`${g} 0.25s forwards 1`;s(r)};return t.jsx(f,{onMouseOver:l,onMouseOut:i,sx:{"path:first-of-type":{transformOrigin:"center",animation:`${d}`}},children:t.jsxs(u,{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",...c,children:[t.jsx("path",{d:"M19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6z"})]})})};a.__docgenInfo={description:"",methods:[],displayName:"AnimatedDelete"};const A={component:a,tags:["autodocs"]},e={render:()=>t.jsx(a,{}),parameters:{controls:{exclude:/.*/g}}};var o,n,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <AnimatedDelete />,
  parameters: {
    controls: {
      exclude: /.*/g
    }
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,A as default};
