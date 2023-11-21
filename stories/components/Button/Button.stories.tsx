import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Button from 'lib/components/Button'
import BoxDotted from 'stories/shared/components/box-dotted'

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
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
        },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Solid: Story = {
    args: {
        variant: 'solid',
        label: 'Button',
    },
    render: (args) => (
        <BoxDotted>
            <Button {...args} size="lg" />
            <Button {...args} size="md" />
            <Button {...args} size="sm" />
        </BoxDotted>
    ),
}

export const SolidBoxed: Story = {
    args: {
        variant: 'solid-boxed',
        label: 'Button',
    },
    render: (args) => (
        <BoxDotted>
            <Button {...args} />
            <Button {...args} />
            <Button {...args} />
        </BoxDotted>
    ),
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        label: 'Button',
    },
    render: (args) => (
        <BoxDotted>
            <Button {...args} size="lg" />
            <Button {...args} size="md" />
            <Button {...args} size="sm" />
        </BoxDotted>
    ),
}

export const OutlineBoxed: Story = {
    args: {
        variant: 'outline-boxed',
        label: 'Button',
    },
    render: (args) => (
        <BoxDotted>
            <Button {...args} />
            <Button {...args} />
            <Button {...args} />
        </BoxDotted>
    ),
}
