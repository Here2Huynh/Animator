import { Meta, StoryObj } from "@storybook/react";
import { Animator } from "../../components/lib/providers/Animator";
import { BasicText } from "../../components/exampleElements/BasicText";

const meta: Meta<typeof Animator> = {
  component: Animator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Animator>;

export const FocusOutContract: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      overRides={
        {
          // duration: 10,
          // timingFunc: "ease",
          // fillMode: "none",
        }
      }
      render={(animationSx) => (
        <BasicText textSx={{ width: "100vw", ...animationSx }} />
      )}
    />
  ),
};
FocusOutContract.args = {
  animation: "focusOutContract",
};
