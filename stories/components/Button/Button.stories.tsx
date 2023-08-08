import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Button from 'lib/components/Button'
import ButtonStoriesPreview from './ButtonPreview'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        variant: {
            description: 'The variant of the button',
            defaultValue: 'solid',
            control: 'select',
        },
        size: {
            description: 'The size of the button',
            defaultValue: 'sm',
            control: 'select',
        },
        disabled: {
            description: 'Whether the button is disabled',
            defaultValue: false,
            control: 'boolean',
        }
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Solid: Story = {
    args: {
        variant: 'solid',
        label: 'Button',
    },
    render: (args) => (
        <ButtonStoriesPreview>
            <Button {...args} size="lg" />
            <Button {...args} size="md" />
            <Button {...args} size="sm" />
        </ButtonStoriesPreview>
    ),
}

export const SolidBoxed: Story = {
    args: {
        variant: 'solid-boxed',
        label: 'Button',
    },
    render: (args) => (
        <ButtonStoriesPreview>
            <Button {...args} />
            <Button {...args} />
            <Button {...args} />
        </ButtonStoriesPreview>
    ),
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        label: 'Button',
    },
    render: (args) => (
        <ButtonStoriesPreview>
            <Button {...args} size="lg" />
            <Button {...args} size="md" />
            <Button {...args} size="sm" />
        </ButtonStoriesPreview>
    ),
}

export const OutlineBoxed: Story = {
    args: {
        variant: 'outline-boxed',
        label: 'Button',
    },
    render: (args) => (
        <ButtonStoriesPreview>
            <Button {...args} />
            <Button {...args} />
            <Button {...args} />
        </ButtonStoriesPreview>
    ),
}
