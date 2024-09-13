import { Meta, StoryObj } from "@storybook/react";
import { AnimatedSettings } from "../../components/animatedIcons/Settings";

const meta: Meta<typeof AnimatedSettings> = {
  component: AnimatedSettings,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AnimatedSettings>;

export const Default: Story = {
  render: () => <AnimatedSettings />,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};
