import React, { ComponentProps } from 'react'

import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
    base: 'rounded-base font-inter text-xs font-medium focus:outline-none focus:outline-offset-1 focus:outline-2 disabled:opacity-30 focus:outline-brand-medium',
    variants: {
        size: {
            sm: 'py-2 px-4 text-xs',
            md: 'py-4 px-8 text-xs',
            lg: 'py-6 px-12 text-sm',
        },
        variant: {
            solid: 'border-0 bg-brand-dark text-neutral-lightest hover:bg-brand-darkest',
            'solid-boxed':
                'border-0 bg-brand-dark text-neutral-lightest hover:bg-brand-darkest w-full px-6 py-4 min-w-[10.5rem]',
            outline:
                'border-1 border-neutral-dark bg-neutral-lightest text-neutral-dark hover:bg-neutral-darkest hover:text-neutral-lightest',
            'outline-boxed':
                'border-1 border-neutral-dark bg-neutral-lightest text-neutral-dark hover:bg-neutral-darkest hover:text-neutral-lightest w-full px-6 py-4 min-w-[10.5rem]',
        },
    },
    defaultVariants: {
        size: 'md',
        variant: 'solid',
    },
})

interface ButtonProps
    extends VariantProps<typeof button>,
        Omit<ComponentProps<'button'>, keyof VariantProps<typeof button>> {
    /**
     * Label of the button
     */
    label: string
}

export default function Button({
    size,
    label,
    variant,
    disabled,
    onClick,
}: ButtonProps) {
    return (
        <button
            className={button({ size, variant })}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
