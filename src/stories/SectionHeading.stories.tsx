import type { Meta, StoryObj } from "@storybook/nextjs-vite";

/** דוגמה לכותרת מקטע כמו באתר — מחלקות מ־globals.css */
function SectionHeadingDemo({
  align = "center",
  title,
}: {
  align?: "center" | "start";
  title: string;
}) {
  return (
    <div className={align === "start" ? "section-heading section-heading--start" : "section-heading"}>
      <h2 className="font-serif font-bold text-zinc-900">{title}</h2>
      <span className="section-heading__bar" aria-hidden />
    </div>
  );
}

const meta = {
  title: "Site/SectionHeading",
  component: SectionHeadingDemo,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    align: {
      control: "radio",
      options: ["center", "start"],
    },
  },
} satisfies Meta<typeof SectionHeadingDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Centered: Story = {
  args: {
    align: "center",
    title: "כותרת מקטע במרכז",
  },
};

export const Start: Story = {
  args: {
    align: "start",
    title: "כותרת מקטע מיושרת להתחלה",
  },
};
