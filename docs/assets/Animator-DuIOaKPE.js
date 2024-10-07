import{k as a,j as b}from"./createTheme-BLV71W9B.js";import{r as Z}from"./index-CTjT7uj6.js";import{i as e,a as R,b as nn}from"./basics-8Qn8XNaG.js";const j="both",H="5s",V="ease-out",tn=`${H} ${V} ${j}`,an=({overRides:n,keyframes:t})=>{const{duration:r,timingFunc:o,fillMode:l}=n;return`${t} ${r?r+"s":H} ${o??V} ${l??j}`},en=a`
    0% {
        transform: scale(1) translateY(0);
        transform-origin: 50% 15%;
    }
    100% {
        transform: scale(1.25) translateY(-15px);
        transform-origin: top;
    }
`,rn=a`
0% {
    transform: scale(1) translateY(0);
    transform-origin: 50% 85%;
  }
  100% {
    transform: scale(1.25) translateY(15px);
    transform-origin: bottom;
  }
`,on=a`
  0% {
    transform: scale(1) translate(0, 0);
    transform-origin: 85% 50%;
  }
  100% {
    transform: scale(1.25) translateX(20px);
    transform-origin: right;
  }
`,ln=a`
  0% {
    transform: scale(1) translate(0, 0);
    transform-origin: 15% 50%;
  }
  100% {
    transform: scale(1.25) translate(-20px, 15px);
    transform-origin: left;
  }
`,m=({direction:n,overRides:t})=>{const r=Z.useMemo(()=>{switch(n){case"top":return en;case"bottom":return rn;case"right":return on;case"left":return ln}},[n]);return!t||e(t)?`${r} ${tn}`:an({keyframes:r,overRides:t})},y="both",L="0.5s",X="cubic-bezier(0.250, 0.460, 0.450, 0.940)",K=`${L} ${X} ${y}`,x=({overRides:n,keyframes:t})=>{const{duration:r,timingFunc:o,fillMode:l}=n;return`${t} ${r?r+"s":L} ${o??X} ${l??y}`},d=a`
  0% {
    transform: translateZ(-800px) rotateY(90deg);
    opacity: 0;
  }
  54% {
    transform: translateZ(-160px) rotateY(87deg);
    opacity: 1;
  }
  100% {
    transform: translateZ(0) rotateY(0);
  }
`,un=n=>!n||e(n)?`${d} 0.45s ease-out ${y}`:x({keyframes:d,overRides:n}),F=a`
    0% {
        transform: rotateX(-80deg);
        opacity: 0;
    }
    100% {
        transform: rotateX(0deg);
        opacity: 1;
    }
`,sn=n=>!n||e(n)?`${F} ${K}`:x({keyframes:F,overRides:n}),I=a`
    0% {
        transform: scaleX(0);
        opacity: 1;
    }
    100% {
        transform: scaleX(1);
        opacity: 1;
    }
`,cn=n=>!n||e(n)?`${I} ${K}`:x({keyframes:I,overRides:n}),u="both",f=.5,k="linear",p="infinite",g=({overRides:n,keyframes:t,defaults:r})=>{const{duration:o,timingFunc:l,fillMode:G,iterationCount:U}=n,{duration:W,timingFunc:J,fillMode:P,iterationCount:Q}=r;return`${t} ${o??W}s ${l??J} ${U??Q} ${G??P}`},C=a`
    0%,
    50%,
    100% {
        opacity: 1;
    }
    25%,
    75% {
        opacity: 0;
    }
`,mn=n=>!n||e(n)?`${C} ${f}s ${u}`:g({keyframes:C,overRides:n,defaults:{duration:f,fillMode:u,timingFunc:"",iterationCount:""}}),O=a`
    0% {
        transform: translate(0);
    }
    20% {
        transform: translate(-2px, 2px);
    }
    40% {
        transform: translate(-2px, -2px);
    }
    60% {
        transform: translate(2px, 2px);
    }
    80% {
        transform: translate(2px, -2px);
    }
    100% {
        transform: translate(0);
    }
`,fn=n=>!n||e(n)?`${O} ${f}s ${k} ${p} ${u}`:g({keyframes:O,overRides:n,defaults:{duration:f,timingFunc:k,iterationCount:p,fillMode:u}}),h=a`
    from {
        transform: scale(1);
        transform-origin: center center;
        animation-timing-function: ease-out;
    }
    10% {
        transform: scale(.90);
        animation-timing-function: ease-in;
    }
    20% {
        transform: scale(.99);
        animation-timing-function: ease-out;
    }
    35% {
        transform: scale(.85);
        animation-timing-function: ease-in;
    }
    45% {
        transform: scale(1);
        animation-timing-function: ease-out;
    }
`,pn=n=>!n||e(n)?`${h} 1.5s ease-in-out ${p} ${u}`:g({keyframes:h,overRides:n,defaults:{duration:1.5,timingFunc:"ease-in-out",iterationCount:p,fillMode:u}}),z=a`
    0% {
        transform: translateY(-45px);
        opacity: 1;
        animation-timing-function: ease-in;
    }
    25% {
        opacity: 1;
    }
    40% {
        transform: translateY(-25px);
        animation-timing-function: ease-in;
    }
    65% {
        transform: translateY(-15px);
        animation-timing-function: ease-in;
    }
    85% {
        transform: translateY(-5px);
        animation-timing-function: ease-in;
    }
    95% {
        transform: translateY(-3px);
        animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%, 
    90% {
        transform: translateY(0px);
        animation-timing-function: ease-out;
    }
    100% {
        transform: translateY(0px);
        animation-timing-function: ease-out;
        opacity: 1;
    }   
`,gn=n=>!n||e(n)?`${z} 1s both`:g({keyframes:z,overRides:n,defaults:{duration:1,fillMode:u,timingFunc:"",iterationCount:""}}),$="both",N="cubic-bezier(0.215, 0.610, 0.355, 1.000)",s="1s",v=`${s} ${N} ${$}`,c=`cubic-bezier(0.550, 0.085, 0.680, 0.530) ${$}`,_=`.8s ${c}`,i=({overRides:n,keyframes:t})=>{const{duration:r,timingFunc:o,fillMode:l}=n;return`${t} ${r?r+"s":s} ${o??N} ${l??$}`},A=a`
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
    }
    50% {
        opacity: .5;
    }
    100% {
        letter-spacing: normal;
        opacity: 1;
    }
`,$n=n=>!n||e(n)?`${A} ${v}`:i({keyframes:A,overRides:n}),B=a`
    0% {
        opacity: 1;
        letter-spacing: normal;
    }
    50% {
        opacity: .5;
    }
    100% {
        opacity: 0;
        letter-spacing: 1em;
    }
`,yn=n=>!n||e(n)?`${B} ${v}`:i({keyframes:B,overRides:n}),M=a`
    0% {
        opacity: 0;
        letter-spacing: 1em;
    }
    50% {
        opacity: .5;
    }
    100% {
        opacity: 1;
        letter-spacing: normal;
    }
`,xn=n=>!n||e(n)?`${M} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${$}`:i({keyframes:M,overRides:n}),D=a`
    0% {
        opacity: 1;
        letter-spacing: normal;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        letter-spacing: -.5em;
    }
`,bn=n=>!n||e(n)?`${D} 0.7s ${c}`:i({keyframes:D,overRides:n}),T=a`
    0% {
        opacity: 0;
        filter: blur(12px);
    }
    100% {
        opacity: 1;
        filter: blur(0px);
    }
`,dn=n=>!n||e(n)?`${T} ${s} ${c}`:i({keyframes:T,overRides:n}),E=a`
    0% {
        opacity: 0;
        filter: blur(12px);
        letter-spacing: -0.5em;
    }
    100% {
        opacity: 1;
        filter: blur(0px);
        letter-spacing: normal;
    }
`,Fn=n=>!n||e(n)?`${E} ${_} `:i({keyframes:E,overRides:n}),w=a`
    0%{
        opacity: 0;
        filter: blur(12px);
        letter-spacing: 1em;
    }
    100% {
        opacity: 1;
        filter: blur(0px);
    }
`,In=n=>!n||e(n)?`${w} ${_}`:i({keyframes:w,overRides:n}),Y=a`
    0% {
        opacity: 1;
        filter: blur(0px);
    }
    100% {
        opacity: 0;
        filter: blur(12px);
    }
`,kn=n=>!n||e(n)?`${Y} ${s} ${c}`:i({keyframes:Y,overRides:n}),S=a`
    0% {
        opacity: 1;
        filter: blur(0px);
        letter-spacing: normal;
    }
    100% {
        opacity: 0;
        filter: blur(12px);
        letter-spacing: 1em;
    }
`,Cn=n=>!n||e(n)?`${S} ${s} ${c}`:i({keyframes:S,overRides:n}),q=a`
    0% {
        opacity: 1;
        filter: blur(0px);
        letter-spacing: normal;
    }
    100% {
        opacity: 0;
        filter: blur(12px);
        letter-spacing: -.5em;
    }
`,On=n=>!n||e(n)?`${q} ${s} ${c}`:i({keyframes:q,overRides:n}),hn=({animation:n,overRides:t,render:r})=>{const o=Z.useMemo(()=>{switch(n){case"flipIn":return{animation:sn(t)};case"slitInVertical":return{animation:un(t)};case"scaleInHorizontalCenter":return{animation:cn(t)};case"scale":return{animation:nn(t)};case"rotate":return{animation:R(t)};case"vibrate":return{animation:fn(t)};case"blink":return{animation:mn(t)};case"heartBeat":return{animation:pn(t)};case"zoomTop":return{animation:m({direction:"top",overRides:t})};case"zoomBottom":return{animation:m({direction:"bottom",overRides:t})};case"zoomLeft":return{animation:m({direction:"left",overRides:t})};case"zoomRight":return{animation:m({direction:"right",overRides:t})};case"bounce":return{animation:gn(t)};case"expandIn":return{animation:$n(t)};case"expandOut":return{animation:yn(t)};case"contractIn":return{animation:xn(t)};case"contractOut":return{animation:bn(t)};case"focusIn":return{animation:dn(t)};case"focusInExpand":return{animation:Fn(t)};case"focusInContract":return{animation:In(t)};case"focusOut":return{animation:kn(t)};case"focusOutExpand":return{animation:Cn(t)};case"focusOutContract":return{animation:On(t)}}},[n,t]);return b.jsx(b.Fragment,{children:r(o)})};hn.__docgenInfo={description:"",methods:[],displayName:"Animator",props:{animation:{required:!0,tsType:{name:"union",raw:`| "flipIn"
| "slitInVertical"
| "scale"
| "rotate"
| "vibrate"
| "blink"
| "heartBeat"
| "bounce"
| "zoomTop"
| "zoomBottom"
| "zoomLeft"
| "zoomRight"
| "scaleInHorizontalCenter"
| "expandIn"
| "contractIn"
| "expandOut"
| "contractOut"
| "focusIn"
| "focusInExpand"
| "focusInContract"
| "focusOut"
| "focusOutExpand"
| "focusOutContract"`,elements:[{name:"literal",value:'"flipIn"'},{name:"literal",value:'"slitInVertical"'},{name:"literal",value:'"scale"'},{name:"literal",value:'"rotate"'},{name:"literal",value:'"vibrate"'},{name:"literal",value:'"blink"'},{name:"literal",value:'"heartBeat"'},{name:"literal",value:'"bounce"'},{name:"literal",value:'"zoomTop"'},{name:"literal",value:'"zoomBottom"'},{name:"literal",value:'"zoomLeft"'},{name:"literal",value:'"zoomRight"'},{name:"literal",value:'"scaleInHorizontalCenter"'},{name:"literal",value:'"expandIn"'},{name:"literal",value:'"contractIn"'},{name:"literal",value:'"expandOut"'},{name:"literal",value:'"contractOut"'},{name:"literal",value:'"focusIn"'},{name:"literal",value:'"focusInExpand"'},{name:"literal",value:'"focusInContract"'},{name:"literal",value:'"focusOut"'},{name:"literal",value:'"focusOutExpand"'},{name:"literal",value:'"focusOutContract"'}]},description:"Type of animation for animator to apply."},overRides:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  duration?: number;
  timingFunc?: TimingFunc | "";
  fillMode?: FillMode;
  degrees?: number;
  iterationCount?: number | "infinite" | "";
}`,signature:{properties:[{key:"duration",value:{name:"number",required:!1}},{key:"timingFunc",value:{name:"union",raw:'TimingFunc | ""',elements:[{name:"union",raw:`| "linear"
| "ease"
| "ease-in"
| "ease-out"
| "ease-in-out"
| "step-start"
| "step-end"
| "initial"
| "inherit"
| "steps(int,start|end)"
| "cubic-bezier(n,n,n,n)"`,elements:[{name:"literal",value:'"linear"'},{name:"literal",value:'"ease"'},{name:"literal",value:'"ease-in"'},{name:"literal",value:'"ease-out"'},{name:"literal",value:'"ease-in-out"'},{name:"literal",value:'"step-start"'},{name:"literal",value:'"step-end"'},{name:"literal",value:'"initial"'},{name:"literal",value:'"inherit"'},{name:"literal",value:'"steps(int,start|end)"'},{name:"literal",value:'"cubic-bezier(n,n,n,n)"'}]},{name:"literal",value:'""'}],required:!1}},{key:"fillMode",value:{name:"union",raw:`| "none"
| "forwards"
| "backwards"
| "both"
| "initial"
| "inherit"`,elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"forwards"'},{name:"literal",value:'"backwards"'},{name:"literal",value:'"both"'},{name:"literal",value:'"initial"'},{name:"literal",value:'"inherit"'}],required:!1}},{key:"degrees",value:{name:"number",required:!1}},{key:"iterationCount",value:{name:"union",raw:'number | "infinite" | ""',elements:[{name:"number"},{name:"literal",value:'"infinite"'},{name:"literal",value:'""'}],required:!1}}]}},description:`Object consisting of potential overrides for the given animation.

More information at https://developer.mozilla.org/en-US/docs/Web/CSS/animation`},render:{required:!0,tsType:{name:"signature",type:"function",raw:"(animationSx: AnimationStyleObj) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  animation: string;
}`,signature:{properties:[{key:"animation",value:{name:"string",required:!0}}]}},name:"animationSx"}],return:{name:"ReactNode"}}},description:"Child render slot for the component being animated. Gives render prop (animationSx) for children to use."}}};export{hn as A};
