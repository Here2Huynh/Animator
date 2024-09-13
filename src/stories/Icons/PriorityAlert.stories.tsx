import { Meta, StoryObj } from "@storybook/react";
import { AnimatedPriorityHigh } from "../../components/animatedIcons/PriorityAlert";

const meta: Meta<typeof AnimatedPriorityHigh> = {
  component: AnimatedPriorityHigh,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AnimatedPriorityHigh>;

export const Default: Story = {
  render: () => <AnimatedPriorityHigh />,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};
