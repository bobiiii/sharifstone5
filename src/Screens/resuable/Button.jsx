import { cn } from '../../utils/util';

function Button({ className, children, clickFunc }) {
  return (
    <button
      onClick={clickFunc}
      className={cn(
        'w-max bg-[#EE2A2E]  px-4 py-3 my-1  sm:text-base text-sm rounded-3xl font-semibold text-white font-albert  whitespace-nowrap"',
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
