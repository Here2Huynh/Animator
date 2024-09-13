import { Meta, StoryObj } from "@storybook/react";
import { Animator } from "../../components/lib/providers/Animator";
import { BasicBox } from "../../components/exampleElements/BasicBox";

const meta: Meta<typeof Animator> = {
  component: Animator,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Animator>;

export const SlitInVertical: Story = {
  render: (args) => (
    <Animator
      animation={args.animation}
      render={(animationSx) => <BasicBox boxSx={{ ...animationSx }} />}
    />
  ),
};
SlitInVertical.args = {
  animation: "slitInVertical",
};
