import{k as s}from"./createTheme-BLV71W9B.js";const r=t=>Object.keys(t).length===0&&Object.values(t).length===0,o="both",c="0.4s",f="cubic-bezier(0.390, 0.575, 0.565, 1.000)",i=360,m=`${c} ${f} ${o}`,l=({overRides:t,keyframes:u})=>{const{duration:a,timingFunc:$,fillMode:g}=t;return`${u} ${a?a+"s":c} ${$??f} ${g??o}`},e=s`
    50% {
        transform: scale(0.5);
    }
    100% {
        transform: scale(1);
    }
`,y=t=>!t||r(t)?`${e} ${m}`:l({keyframes:e,overRides:t}),n=t=>s`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(${t??i}deg);
    }
`,D=t=>!t||r(t)?`${n()} ${m} `:l({keyframes:n(t.degrees??i),overRides:t});export{n as R,e as S,D as a,y as b,r as i};
