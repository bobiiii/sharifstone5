import { cn } from '../../utils/util'

function Heading({ className, children }) {
    return (
        <h1 className={cn('lg:text-5xl  sm:text-4xl xs:text-2xl text-xl font-semibold    font-gelasio text-[rgb(34,31,31)]', className)}>
            {children}
        </h1>
    )
}

export default Heading