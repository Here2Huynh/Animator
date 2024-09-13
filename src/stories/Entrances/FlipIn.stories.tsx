import { Meta, StoryObj } from "@storybook/react";
import { Animator } from "../../components/lib/providers/Animator";
import { BasicCard } from "../../components/exampleElements/BasicCard";

const meta: Meta<typeof Animator> = {
  component: Animator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Animator>;

export const FlipIn: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      render={(animationSx) => <BasicCard cardSx={{ ...animationSx }} />}
    />
  ),
};
FlipIn.args = {
  animation: "flipIn",
};
