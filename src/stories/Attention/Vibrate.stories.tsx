import { Meta, StoryObj } from "@storybook/react";
import { BasicBox } from "../../components/exampleElements/BasicBox";
import { Animator } from "../../components/lib/providers/Animator";

const meta: Meta<typeof Animator> = {
  component: Animator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Animator>;

export const Vibrate: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      overRides={{ iterationCount: 2 }}
      render={(animationSx) => <BasicBox boxSx={animationSx} />}
    />
  ),
};
Vibrate.args = {
  animation: "vibrate",
};
