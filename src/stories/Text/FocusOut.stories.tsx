import { Meta, StoryObj } from "@storybook/react";
import { Animator } from "../../components/lib/providers/Animator";
import { BasicText } from "../../components/exampleElements/BasicText";

const meta: Meta<typeof Animator> = {
  component: Animator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Animator>;

export const FocusOut: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      render={(animationSx) => <BasicText textSx={animationSx} />}
    />
  ),
};
FocusOut.args = {
  animation: "focusOut",
};
