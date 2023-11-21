import React from 'react'

import { ButtonProps } from './Button.interface'
import buttonVariants from './Button.variants'

export default function Button({
    size,
    label,
    variant,
    disabled,
    onClick, 
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={buttonVariants({ size, variant, class: className })}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
