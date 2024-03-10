import React from 'react'
import { cn } from '../utils/util';

function MaxWidthWrapper({ className, children }) {
    return (
        <main className={cn('max-w-screen-2xl  w-full mx-auto  md:px-6 px-4 md:mt-16 mt-8', className)}>
            {children}
        </main>
    )
}

export default MaxWidthWrapper;