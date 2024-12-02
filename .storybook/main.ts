import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../stories/pages/**/*.mdx",
    "../stories/pages/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },
  typescript: {
    // Prevents TS errors during build
    check: false,
  },
  webpackFinal: async (config) => {
    // Ensure public directory is handled correctly
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@public': '/public',
      }
    }
    return config
  },
};

export default config;
