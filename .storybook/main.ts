import type { StorybookConfig } from '@storybook/react-vite'

import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

const base = path.dirname(__dirname)

const config: StorybookConfig = {
    stories: [
        path.resolve(base, 'stories/**/*.mdx'),
        path.resolve(base, 'stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'),
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    viteFinal: async (config) => {
        config?.plugins?.push(
            tsconfigPaths({
                projects: [path.resolve(base, 'tsconfig.json')],
            })
        )

        return config
    },
}

export default config
