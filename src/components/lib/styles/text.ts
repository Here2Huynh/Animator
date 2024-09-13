import { keyframes } from "@mui/material";
import { AnimationOverRides } from "../models/OverRides";
import { isEmpty } from "../helpers/objects";
import { Keyframes } from "@emotion/react/macro";

const DefaultFillMode = "both";
const DefaultTimingFunc = "cubic-bezier(0.215, 0.610, 0.355, 1.000)";
const DefaultDuration = "1s";
const TimingFunc = `${DefaultDuration} ${DefaultTimingFunc} ${DefaultFillMode}`;
const TimingFuncSlower = `cubic-bezier(0.550, 0.085, 0.680, 0.530) ${DefaultFillMode}`;
const FocusInTimingFunc = `.8s ${TimingFuncSlower}`;

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

const ExpandIn: Keyframes = keyframes`
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
`;
export const ExpandInAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides)) return `${ExpandIn} ${TimingFunc}`;

  return mapOverRides({ keyframes: ExpandIn, overRides });
};

const ExpandOut: Keyframes = keyframes`
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
`;
export const ExpandOutAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides)) return `${ExpandOut} ${TimingFunc}`;

  return mapOverRides({ keyframes: ExpandOut, overRides });
};

const ContractIn: Keyframes = keyframes`
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
`;
export const ContractInAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${ContractIn} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) ${DefaultFillMode}`;

  return mapOverRides({ keyframes: ContractIn, overRides });
};

const ContractOut: Keyframes = keyframes`
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
`;
export const ContractOutAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${ContractOut} 0.7s ${TimingFuncSlower}`;

  return mapOverRides({ keyframes: ContractOut, overRides });
};

const FocusIn: Keyframes = keyframes`
    0% {
        opacity: 0;
        filter: blur(12px);
    }
    100% {
        opacity: 1;
        filter: blur(0px);
    }
`;
export const FocusInAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${FocusIn} ${DefaultDuration} ${TimingFuncSlower}`;

  return mapOverRides({ keyframes: FocusIn, overRides });
};

const FocusInExpand: Keyframes = keyframes`
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
`;
export const FocusInExpandAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${FocusInExpand} ${FocusInTimingFunc} `;

  return mapOverRides({ keyframes: FocusInExpand, overRides });
};

const FocusInContract: Keyframes = keyframes`
    0%{
        opacity: 0;
        filter: blur(12px);
        letter-spacing: 1em;
    }
    100% {
        opacity: 1;
        filter: blur(0px);
    }
`;
export const FocusInContractAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${FocusInContract} ${FocusInTimingFunc}`;

  return mapOverRides({ keyframes: FocusInContract, overRides });
};

const FocusOut: Keyframes = keyframes`
    0% {
        opacity: 1;
        filter: blur(0px);
    }
    100% {
        opacity: 0;
        filter: blur(12px);
    }
`;
export const FocusOutAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${FocusOut} ${DefaultDuration} ${TimingFuncSlower}`;

  return mapOverRides({ keyframes: FocusOut, overRides });
};

const FocusOutExpand: Keyframes = keyframes`
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
`;
export const FocusOutExpandAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${FocusOutExpand} ${DefaultDuration} ${TimingFuncSlower}`;

  return mapOverRides({ keyframes: FocusOutExpand, overRides });
};

const FocusOutContract: Keyframes = keyframes`
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
`;

export const FocusOutContractAnimation = (
  overRides: AnimationOverRides | undefined
): string => {
  if (!overRides || isEmpty(overRides))
    return `${FocusOutContract} ${DefaultDuration} ${TimingFuncSlower}`;

  return mapOverRides({ keyframes: FocusOutContract, overRides });
};
