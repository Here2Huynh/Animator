import { ReactNode, useMemo } from "react";
import { BgZoom } from "../styles/background";
import {
  FlipInAnimation,
  ScaleInHorizontalCenterAnimation,
  SlitInVerticalAnimation,
} from "../styles/entrances";
import { RotateAnimation, ScaleAnimation } from "../styles/basics";
import {
  BlinkAnimation,
  BounceAnimation,
  HeartBeatAnimation,
  VibrateAnimation,
} from "../styles/attention";
import { Animations } from "../types/AnimationTypes";
import { AnimationStyleObj } from "../models/AnimationStyleObj";
import {
  ExpandInAnimation,
  ContractInAnimation,
  ExpandOutAnimation,
  ContractOutAnimation,
  FocusInAnimation,
  FocusOutAnimation,
  FocusInExpandAnimation,
  FocusInContractAnimation,
  FocusOutExpandAnimation,
  FocusOutContractAnimation,
} from "../styles/text";
import { AnimationOverRides } from "../models/OverRides";

export const Animator = ({
  animation,
  overRides,
  render,
}: {
  /**
   * Type of animation for animator to apply.
   */
  animation: Animations;
  /**
   * Object consisting of potential overrides for the given animation.
   *
   * More information at https://developer.mozilla.org/en-US/docs/Web/CSS/animation
   */
  overRides?: AnimationOverRides;
  /**
   * Child render slot for the component being animated. Gives render prop (animationSx) for children to use.
   */
  render: (animationSx: AnimationStyleObj) => ReactNode;
}): JSX.Element => {
  const styles = useMemo(() => {
    switch (animation) {
      case "flipIn":
        return { animation: FlipInAnimation(overRides) };
      case "slitInVertical":
        return { animation: SlitInVerticalAnimation(overRides) };
      case "scaleInHorizontalCenter":
        return { animation: ScaleInHorizontalCenterAnimation(overRides) };
      case "scale":
        return { animation: ScaleAnimation(overRides) };
      case "rotate":
        return { animation: RotateAnimation(overRides) };
      case "vibrate":
        return { animation: VibrateAnimation(overRides) };
      case "blink":
        return { animation: BlinkAnimation(overRides) };
      case "heartBeat":
        return { animation: HeartBeatAnimation(overRides) };
      case "zoomTop":
        return { animation: BgZoom({ direction: "top", overRides }) };
      case "zoomBottom":
        return { animation: BgZoom({ direction: "bottom", overRides }) };
      case "zoomLeft":
        return { animation: BgZoom({ direction: "left", overRides }) };
      case "zoomRight":
        return { animation: BgZoom({ direction: "right", overRides }) };
      case "bounce":
        return { animation: BounceAnimation(overRides) };
      case "expandIn":
        return { animation: ExpandInAnimation(overRides) };
      case "expandOut":
        return { animation: ExpandOutAnimation(overRides) };
      case "contractIn":
        return { animation: ContractInAnimation(overRides) };
      case "contractOut":
        return { animation: ContractOutAnimation(overRides) };
      case "focusIn":
        return { animation: FocusInAnimation(overRides) };
      case "focusInExpand":
        return { animation: FocusInExpandAnimation(overRides) };
      case "focusInContract":
        return { animation: FocusInContractAnimation(overRides) };
      case "focusOut":
        return { animation: FocusOutAnimation(overRides) };
      case "focusOutExpand":
        return { animation: FocusOutExpandAnimation(overRides) };
      case "focusOutContract":
        return { animation: FocusOutContractAnimation(overRides) };
    }
  }, [animation, overRides]);

  return <>{render(styles)}</>;
};
