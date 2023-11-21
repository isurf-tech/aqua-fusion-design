import React from 'react'

export default function BoxDotted({ children, ...props }: any) {
    return (
        <div
            {...props}
            className="flex min-w-[195px] flex-col items-start justify-around rounded-base border-1 border-dashed border-brand-medium p-4 [&>*:not(:first-child)]:mt-3"
        >
            {children}
        </div>
    )
}
