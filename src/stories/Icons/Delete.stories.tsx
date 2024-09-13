import { Meta, StoryObj } from "@storybook/react";
import { AnimatedDelete } from "../../components/animatedIcons/Delete";

const meta: Meta<typeof AnimatedDelete> = {
  component: AnimatedDelete,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AnimatedDelete>;

export const Default: Story = {
  render: () => <AnimatedDelete />,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};
