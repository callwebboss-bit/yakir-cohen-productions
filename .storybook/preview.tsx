import type { Preview } from "@storybook/nextjs-vite";
import React from "react";

/** כמו ב-layout האפליקציה — טיפוגרפיה, טוקנים וטילווינד */
import "../src/app/globals.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div
        dir="rtl"
        lang="he"
        className="min-h-screen bg-surface text-[#1A1A1A] antialiased p-6 font-sans"
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
