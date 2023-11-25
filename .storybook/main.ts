import type { StorybookConfig } from "@storybook/vue3-webpack5";

const config: StorybookConfig = {
  // stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  stories: ["../src/components/**/*.stories.@(js|ts)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
