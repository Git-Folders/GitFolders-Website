import type { ComponentProps, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ComponentProps<"button">>;

const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return (
    <button
      {...buttonProps}
      className="hover:disabled:bg-disabled-button-hover mt-5 flex w-full items-center justify-center rounded-lg bg-blue-600 p-3 font-medium text-slate-100 transition-colors hover:bg-blue-800 disabled:bg-gray-900"
    >
      {children}
    </button>
  );
};

export default Button;
