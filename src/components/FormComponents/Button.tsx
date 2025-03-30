import type { ComponentProps, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ComponentProps<"button">>;

const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className="bg-accent hover:bg-accent-hover mt-5 flex w-full items-center justify-center rounded-lg p-3 font-medium text-white transition-colors disabled:bg-gray-400 hover:disabled:bg-gray-600"
    >
      {children}
    </button>
  );
};

export default Button;
