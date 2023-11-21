import React from 'react'

import { GhostProps } from './Ghost.interface'
import ghostVariants from './Ghost.variants'

export default function Ghost({
    ref,
    label,
    disabled,
    onClick,
    className,
    ...props
}: GhostProps) {
    return (
        <button
            {...props}
            disabled={disabled}
            onClick={onClick}
            className={ghostVariants({ class: className })}
        >
            {label}
        </button>
    )
}
