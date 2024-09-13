import { Meta, StoryObj } from "@storybook/react";
import { Animator } from "../../components/lib/providers/Animator";
import { BasicBox } from "../../components/exampleElements/BasicBox";

const meta: Meta<typeof Animator> = {
  component: Animator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Animator>;

export const RotateOnLoad: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      overRides={{ degrees: 45 }}
      render={(animationSx) => <BasicBox boxSx={animationSx} />}
    />
  ),
};
RotateOnLoad.args = {
  animation: "rotate",
};

export const RotateOnHover: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      render={(animationSx) => (
        <BasicBox boxSx={{ "&:hover": { ...animationSx } }} />
      )}
    />
  ),
};
RotateOnHover.args = {
  animation: "rotate",
};

// TODO: add scale up & scale down
