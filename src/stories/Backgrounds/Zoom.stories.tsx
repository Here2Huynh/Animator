import { Meta, StoryObj } from "@storybook/react";
import { Animator } from "../../components/lib/providers/Animator";
import { BasicBackground } from "../../components/exampleElements/BasicBackground";

const meta: Meta<typeof Animator> = {
  component: Animator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Animator>;

export const ZoomTopOnLoad: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      render={(animationSx) => <BasicBackground bgSx={animationSx} />}
    />
  ),
};
ZoomTopOnLoad.args = {
  animation: "zoomTop",
};

export const ZoomBottomOnLoad: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      render={(animationSx) => <BasicBackground bgSx={animationSx} />}
    />
  ),
};
ZoomBottomOnLoad.args = {
  animation: "zoomBottom",
};

export const ZoomLeftOnLoad: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      render={(animationSx) => <BasicBackground bgSx={animationSx} />}
    />
  ),
};
ZoomLeftOnLoad.args = {
  animation: "zoomLeft",
};

export const ZoomRightOnLoad: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      render={(animationSx) => <BasicBackground bgSx={animationSx} />}
    />
  ),
};
ZoomRightOnLoad.args = {
  animation: "zoomRight",
};
