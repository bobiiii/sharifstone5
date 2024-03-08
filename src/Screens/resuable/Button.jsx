import clsx from 'clsx'
import React from 'react'

function Button({className,children}) {
    return (
        <main className={clsx('bg-white sm:px-6 px-2 py-3 sm:text-base text-sm rounded-3xl font-medium text-red-500 whitespace-nowrap ', className)}>
            {children}
        </main>
    )
}

export default Button