import { Meta, StoryObj } from "@storybook/react";
import { BasicBox } from "../../components/exampleElements/BasicBox";
import { Animator } from "../../components/lib/providers/Animator";

const meta: Meta<typeof Animator> = {
  component: Animator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Animator>;

export const Blink: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      overRides={{
        iterationCount: 2,
        // duration: 1,
        // timingFunc: "ease",
      }}
      render={(animationSx) => <BasicBox boxSx={animationSx} />}
    />
  ),
};
Blink.args = {
  animation: "blink",
};
