import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import PaymentMethodBadges from "@/components/PaymentMethodBadges";

const meta = {
  title: "Site/PaymentMethodBadges",
  component: PaymentMethodBadges,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof PaymentMethodBadges>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
