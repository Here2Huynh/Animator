import { keyframes } from "@mui/material";
import { AnimationOverRides } from "../models/OverRides";
import { Keyframes } from "@emotion/react";
import { isEmpty } from "../helpers/objects";

const DefaultFillMode = "both";
const DefaultDuration = "0.4s";
const DefaultTimingFunc = "cubic-bezier(0.390, 0.575, 0.565, 1.000)";
const DefaultRotateDeg = 360;
const BasicBaseConfig = `${DefaultDuration} ${DefaultTimingFunc} ${DefaultFillMode}`;

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

export const Scale: Keyframes = keyframes`
    50% {
        transform: scale(0.5);
    }
    100% {
        transform: scale(1);
    }
`;
export const ScaleAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides)) return `${Scale} ${BasicBaseConfig}`;

  return mapOverRides({ keyframes: Scale, overRides });
};

export const Rotate = (degrees?: number): Keyframes => keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(${degrees ?? DefaultRotateDeg}deg);
    }
`;
export const RotateAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${Rotate()} ${BasicBaseConfig} `;

  return mapOverRides({
    keyframes: Rotate(overRides.degrees ?? DefaultRotateDeg),
    overRides,
  });
};
