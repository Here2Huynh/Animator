import { Meta, StoryObj } from "@storybook/react";
import { Animator } from "../../components/lib/providers/Animator";
import { BasicText } from "../../components/exampleElements/BasicText";

const meta: Meta<typeof Animator> = {
  component: Animator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Animator>;

export const FocusInContract: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      render={(animationSx) => (
        <BasicText textSx={{ width: "100vw", ...animationSx }} />
      )}
    />
  ),
};
FocusInContract.args = {
  animation: "focusInContract",
};
