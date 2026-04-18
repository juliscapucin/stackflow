import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Logo } from "./logo";

const meta = {
  title: "UI/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "compact"],
    },
    asLink: {
      control: { type: "boolean" },
    },
    className: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-background p-8">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Compact: Story = {
  args: {
    variant: "compact",
  },
};

export const AsHomeLink: Story = {
  args: {
    variant: "default",
    asLink: true,
  },
};
