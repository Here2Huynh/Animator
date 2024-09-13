import { Meta, StoryObj } from "@storybook/react";
import { AnimatedRefresh } from "../../components/animatedIcons/Refresh";

const meta: Meta<typeof AnimatedRefresh> = {
  component: AnimatedRefresh,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AnimatedRefresh>;

export const Default: Story = {
  render: () => <AnimatedRefresh />,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};
