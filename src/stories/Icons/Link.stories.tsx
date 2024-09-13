import { Meta, StoryObj } from "@storybook/react";
import { AnimatedLink } from "../../components/animatedIcons/Link";

const meta: Meta<typeof AnimatedLink> = {
  component: AnimatedLink,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AnimatedLink>;

export const Default: Story = {
  render: () => <AnimatedLink />,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};
