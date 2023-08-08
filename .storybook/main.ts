import type { StorybookConfig } from "@storybook/react-vite";

import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling",
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: {
          implementation: require.resolve("postcss"),
        },
      },
    },
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    }
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    config?.plugins?.push(
      tsconfigPaths({
        // My tsconfig.json isn't simply in viteConfig.root,
        // so I've passed an explicit path to it:
        projects: [path.resolve(path.dirname(__dirname),  "tsconfig.json")],
      })
    );
    
    return config;
  },
};
export default config;
