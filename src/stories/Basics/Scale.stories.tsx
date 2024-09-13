import { Meta, StoryObj } from "@storybook/react";
import { Animator } from "../../components/lib/providers/Animator";
import { BasicBox } from "../../components/exampleElements/BasicBox";

const meta: Meta<typeof Animator> = {
  component: Animator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Animator>;

export const ScaleOnLoad: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      render={(animationSx) => <BasicBox boxSx={animationSx} />}
    />
  ),
};
ScaleOnLoad.args = {
  animation: "scale",
};

export const ScaleOnHover: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      render={(animationSx) => (
        <BasicBox boxSx={{ "&:hover": { ...animationSx } }} />
      )}
    />
  ),
};
ScaleOnHover.args = {
  animation: "scale",
};
