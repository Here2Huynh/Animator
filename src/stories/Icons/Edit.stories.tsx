import { AnimatedEdit } from "../../components/animatedIcons/Edit";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AnimatedEdit> = {
  component: AnimatedEdit,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AnimatedEdit>;

export const Default: Story = {
  render: () => <AnimatedEdit />,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};
