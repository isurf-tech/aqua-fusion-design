import React, { useEffect, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import Ghost from 'lib/components/Ghost'
import BoxDotted from 'stories/shared/components/box-dotted'

const meta = {
    title: 'Components/Ghost',
    component: Ghost,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Ghost>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Ghost',
    },
    render: (args) => {
        const [classHoverElement, setClassHoverElement] = useState<string>('')
        const [classFocusElement, setClassFocusElement] = useState<string>('')

        const getClassesByState = (id: string, state: string) => {
            return document
                .getElementById(id)
                ?.className?.split(' ')
                ?.filter((className: string) => className.includes(`${state}:`))
                ?.map((className: string) => className.replace(`${state}:`, ''))
        }

        useEffect(() => {
            const ghostHoverElement = getClassesByState('ghost-hover', 'hover')
            const ghostFocusElement = getClassesByState('ghost-focus', 'focus')

            setClassHoverElement(ghostHoverElement?.join(' ') || '')
            setClassFocusElement(ghostFocusElement?.join(' ') || '')
        }, [
            document.getElementById('ghost-hover'),
            document.getElementById('ghost-focus'),
        ])

        return (
            <BoxDotted>
                <Ghost {...args} id="ghost" />
                <Ghost
                    {...args}
                    id="ghost-hover"
                    className={classHoverElement}
                />
                <Ghost
                    {...args}
                    id="ghost-focus"
                    className={[classHoverElement, classFocusElement].join(' ')}
                />
            </BoxDotted>
        )
    },
}
