import { Meta, StoryObj } from "@storybook/react";
import { BasicBox } from "../../components/exampleElements/BasicBox";
import { Animator } from "../../components/lib/providers/Animator";

const meta: Meta<typeof Animator> = {
  component: Animator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Animator>;

export const Bounce: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      overRides={{}}
      render={(animationSx) => <BasicBox boxSx={animationSx} />}
    />
  ),
};
Bounce.args = {
  animation: "bounce",
};
