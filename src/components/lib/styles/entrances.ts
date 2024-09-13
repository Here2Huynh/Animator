import { Keyframes } from "@emotion/react";
import { keyframes } from "@mui/material";
import { AnimationOverRides } from "../models/OverRides";
import { isEmpty } from "../helpers/objects";

const DefaultFillMode = "both";
const DefaultDuration = "0.5s";
const DefaultTimingFunc = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
const FlipInBaseConfig = `${DefaultDuration} ${DefaultTimingFunc} ${DefaultFillMode}`;

const mapOverRides = ({
  overRides,
  keyframes,
}: {
  overRides: AnimationOverRides;
  keyframes: Keyframes;
}): string => {
  const { duration, timingFunc, fillMode } = overRides;
  return `${keyframes} ${duration ? duration + "s" : DefaultDuration} ${timingFunc ?? DefaultTimingFunc} ${fillMode ?? DefaultFillMode}`;
};

const SlitInVertical: Keyframes = keyframes`
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
`;
export const SlitInVerticalAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${SlitInVertical} 0.45s ease-out ${DefaultFillMode}`;

  return mapOverRides({ keyframes: SlitInVertical, overRides });
};

const FlipIn: Keyframes = keyframes`
    0% {
        transform: rotateX(-80deg);
        opacity: 0;
    }
    100% {
        transform: rotateX(0deg);
        opacity: 1;
    }
`;
export const FlipInAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides)) return `${FlipIn} ${FlipInBaseConfig}`;

  return mapOverRides({ keyframes: FlipIn, overRides });
};

export const ScaleInHorizontalCenter: Keyframes = keyframes`
    0% {
        transform: scaleX(0);
        opacity: 1;
    }
    100% {
        transform: scaleX(1);
        opacity: 1;
    }
`;
export const ScaleInHorizontalCenterAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${ScaleInHorizontalCenter} ${FlipInBaseConfig}`;

  return mapOverRides({ keyframes: ScaleInHorizontalCenter, overRides });
};
