import React from 'react'

import { ButtonProps } from './Button.interface'
import buttonVariants from './Button.variants'

export default function Button({
    size,
    label,
    variant,
    disabled,
    onClick,
}: ButtonProps) {
    return (
        <button
            className={buttonVariants({ size, variant })}
            disabled={disabled}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
