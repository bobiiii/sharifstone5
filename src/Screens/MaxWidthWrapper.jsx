import clsx from 'clsx'
import React from 'react'

function MaxWidthWrapper({ className, children }) {
    return (
        <main className={clsx('max-w-screen-2xl w-full mx-auto  md:px-6 px-4 ', className)}>
            {children}
        </main>
    )
}

export default MaxWidthWrapper