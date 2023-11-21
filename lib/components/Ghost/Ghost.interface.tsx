import React, { ComponentProps } from 'react'

export interface GhostProps extends ComponentProps<'button'> {
    /**
     * Label of the ghost
     */
    label: string
}
