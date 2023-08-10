import React, { ComponentProps } from 'react'
import { VariantProps } from 'tailwind-variants'

import button from './Button.variants'

export interface ButtonProps
    extends VariantProps<typeof button>,
        Omit<ComponentProps<'button'>, keyof VariantProps<typeof button>> {
    /**
     * Label of the button
     */
    label: string
}
