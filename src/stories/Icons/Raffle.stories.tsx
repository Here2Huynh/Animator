import { Meta, StoryObj } from "@storybook/react";
import { AnimatedRaffle } from "../../components/animatedIcons/Raffle";

const meta: Meta<typeof AnimatedRaffle> = {
  component: AnimatedRaffle,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AnimatedRaffle>;

export const Default: Story = {
  render: () => <AnimatedRaffle />,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};
