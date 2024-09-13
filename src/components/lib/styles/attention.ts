import { keyframes } from "@mui/material";
import { AnimationOverRides } from "../models/OverRides";
import { Keyframes } from "@emotion/react";
import { isEmpty } from "../helpers/objects";

const DefaultFillMode = "both";
const DefaultDuration = 0.5;
const DefaultTimingFunc = "linear";
const DefaultIterationCount = "infinite";

const mapOverRides = ({
  overRides,
  keyframes,
  defaults,
}: {
  overRides: AnimationOverRides;
  keyframes: Keyframes;
  defaults: AnimationOverRides;
}): string => {
  const { duration, timingFunc, fillMode, iterationCount } = overRides;
  const {
    duration: defaultDuration,
    timingFunc: defaultTimingFunc,
    fillMode: defaultFillMode,
    iterationCount: defaultIterationCount,
  } = defaults;
  const test = `${keyframes} ${duration ?? defaultDuration}s ${timingFunc ?? defaultTimingFunc} ${iterationCount ?? defaultIterationCount} ${fillMode ?? defaultFillMode}`;

  return test;
};

const Blink: Keyframes = keyframes`
    0%,
    50%,
    100% {
        opacity: 1;
    }
    25%,
    75% {
        opacity: 0;
    }
`;
export const BlinkAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${Blink} ${DefaultDuration}s ${DefaultFillMode}`;

  return mapOverRides({
    keyframes: Blink,
    overRides,
    defaults: {
      duration: DefaultDuration,
      fillMode: DefaultFillMode,
      timingFunc: "",
      iterationCount: "",
    },
  });
};

const Vibrate: Keyframes = keyframes`
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
`;
export const VibrateAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${Vibrate} ${DefaultDuration}s ${DefaultTimingFunc} ${DefaultIterationCount} ${DefaultFillMode}`;

  return mapOverRides({
    keyframes: Vibrate,
    overRides,
    defaults: {
      duration: DefaultDuration,
      timingFunc: DefaultTimingFunc,
      iterationCount: DefaultIterationCount,
      fillMode: DefaultFillMode,
    },
  });
};

const HeartBeat: Keyframes = keyframes`
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
`;
export const HeartBeatAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${HeartBeat} 1.5s ease-in-out ${DefaultIterationCount} ${DefaultFillMode}`;

  return mapOverRides({
    keyframes: HeartBeat,
    overRides,
    defaults: {
      duration: 1.5,
      timingFunc: "ease-in-out",
      iterationCount: DefaultIterationCount,
      fillMode: DefaultFillMode,
    },
  });
};

const Bounce: Keyframes = keyframes`
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
`;
export const BounceAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides)) return `${Bounce} 1s both`;

  return mapOverRides({
    keyframes: Bounce,
    overRides,
    defaults: {
      duration: 1,
      fillMode: DefaultFillMode,
      timingFunc: "",
      iterationCount: "",
    },
  });
};
