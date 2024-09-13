import { Keyframes } from "@emotion/react";
import { keyframes } from "@mui/material";
import { isEmpty } from "../helpers/objects";
import { AnimationOverRides } from "../models/OverRides";
import { useMemo } from "react";
import { ZoomDirection } from "../models/BgZoom";

const DefaultFillMode = "both";
const DefaultDuration = "5s";
const DefaultTimingFunc = "ease-out";
const BaseLineAnimationConfig = `${DefaultDuration} ${DefaultTimingFunc} ${DefaultFillMode}`;

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

const BgZoomTopKf: Keyframes = keyframes`
    0% {
        transform: scale(1) translateY(0);
        transform-origin: 50% 15%;
    }
    100% {
        transform: scale(1.25) translateY(-15px);
        transform-origin: top;
    }
`;

const BgZoomBottomKf: Keyframes = keyframes`
0% {
    transform: scale(1) translateY(0);
    transform-origin: 50% 85%;
  }
  100% {
    transform: scale(1.25) translateY(15px);
    transform-origin: bottom;
  }
`;

const BgZoomRightKf: Keyframes = keyframes`
  0% {
    transform: scale(1) translate(0, 0);
    transform-origin: 85% 50%;
  }
  100% {
    transform: scale(1.25) translateX(20px);
    transform-origin: right;
  }
`;

const BgZoomLeftKf: Keyframes = keyframes`
  0% {
    transform: scale(1) translate(0, 0);
    transform-origin: 15% 50%;
  }
  100% {
    transform: scale(1.25) translate(-20px, 15px);
    transform-origin: left;
  }
`;

export const BgZoom = ({
  direction,
  overRides,
}: {
  direction: ZoomDirection;
  overRides: AnimationOverRides | undefined;
}): string => {
  const keyFrame = useMemo(() => {
    switch (direction) {
      case "top":
        return BgZoomTopKf;
      case "bottom":
        return BgZoomBottomKf;
      case "right":
        return BgZoomRightKf;
      case "left":
        return BgZoomLeftKf;
    }
  }, [direction]);

  if (!overRides || isEmpty(overRides))
    return `${keyFrame} ${BaseLineAnimationConfig}`;

  return mapOverRides({ keyframes: keyFrame, overRides });
};
