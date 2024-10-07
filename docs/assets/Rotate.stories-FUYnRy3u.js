import{j as o}from"./createTheme-BLV71W9B.js";import{A as t}from"./Animator-DuIOaKPE.js";import{B as p}from"./BasicBox-Cm8GkF3K.js";import"./extends-CF3RwP-h.js";import"./index-CTjT7uj6.js";import"./basics-8Qn8XNaG.js";import"./Box-CCPMVSfO.js";import"./Typography-BKf6OEzd.js";import"./DefaultPropsProvider-BMD7a7hs.js";const f={component:t,tags:["autodocs"]},r={render:e=>o.jsx(t,{animation:e.animation,overRides:{degrees:45},render:n=>o.jsx(p,{boxSx:n})})};r.args={animation:"rotate"};const a={render:e=>o.jsx(t,{animation:e.animation,render:n=>o.jsx(p,{boxSx:{"&:hover":{...n}}})})};a.args={animation:"rotate"};var i,s,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Animator animation={args.animation} overRides={{
    degrees: 45
  }} render={animationSx => <BasicBox boxSx={animationSx} />} />
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var d,x,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Animator animation={args.animation} render={animationSx => <BasicBox boxSx={{
    "&:hover": {
      ...animationSx
    }
  }} />} />
}`,...(c=(x=a.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};const A=["RotateOnLoad","RotateOnHover"];export{a as RotateOnHover,r as RotateOnLoad,A as __namedExportsOrder,f as default};
