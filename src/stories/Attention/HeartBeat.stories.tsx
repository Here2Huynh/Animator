import { Meta, StoryObj } from "@storybook/react";
import { BasicBox } from "../../components/exampleElements/BasicBox";
import { Animator } from "../../components/lib/providers/Animator";

const meta: Meta<typeof Animator> = {
  component: Animator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Animator>;

export const HeartBeat: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      render={(animationSx) => <BasicBox boxSx={animationSx} />}
    />
  ),
};
HeartBeat.args = {
  animation: "heartBeat",
};
