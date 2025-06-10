import type { ComponentProps } from "react";
import { useController, type Control } from "react-hook-form";

type InputProps = ComponentProps<"input"> & {
  control: Control<any>;
  label: string;
  name: string;
  layout?: "flex-row" | "flex-row-reverse" | "flex-col" | "flex-col-reverse";
};
const Input = ({
  control,
  label,
  name,
  layout = "flex-col",
  ...inputProps
}: InputProps) => {
  const layoutClass = getLayoutClass(layout);
  const {
    formState: { errors },
  } = useController({ control, name });
  return (
    <label
      htmlFor={name}
      className={`relative flex gap-x-2 gap-y-1 ${layoutClass}`}
    >
      <span className="text-xs font-medium text-slate-100 md:text-sm">
        {label}
      </span>
      <input
        id={name}
        {...control.register(name)}
        {...inputProps}
        className={`transition-color rounded-xl border border-slate-800 bg-slate-950 p-3 text-xs text-slate-100 duration-200 outline-none placeholder:text-slate-500 md:text-sm ${inputProps.type === "checkbox" ? "size-4" : "w-full focus:ring-1"} ${
          errors[name]
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "focus:border-blue-600 focus:ring-blue-600"
        }`}
      />
      {errors[name] && (
        <span className="absolute -top-2.5 max-w-56 self-center rounded-xl border border-red-950 bg-red-800 p-1.5 text-xs text-red-200 shadow-2xl md:text-sm">
          {errors[name].message?.toString()}
        </span>
      )}
    </label>
  );
};

export default Input;

const getLayoutClass = (layout: InputProps["layout"]) => {
  switch (layout) {
    case "flex-row":
      return "flex-row items-center justify-start";
    case "flex-row-reverse":
      return "flex-row-reverse items-center justify-end";
    case "flex-col":
      return "flex-col items-start justify-center";
    case "flex-col-reverse":
      return "flex-col-reverse items-start justify-center";
  }
};
