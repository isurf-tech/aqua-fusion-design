import React from 'react'

export default function ButtonStoriesPreview({ children }: any) {
    return (
        <div className="flex flex-col items-start justify-around rounded-base border-1 border-dashed border-brand-medium p-4 [&>*:not(:first-child)]:mt-3 min-w-[195px]">
            {children}
        </div>
    )
}
