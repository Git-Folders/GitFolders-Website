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
      <span className="text-text-primary text-sm font-medium">{label}</span>
      <input
        id={name}
        {...control.register(name)}
        {...inputProps}
        className={`placeholder:text-text-placeholder transition-color rounded-xl border border-gray-300 bg-gray-50 p-3 text-sm duration-200 outline-none ${inputProps.type === "checkbox" ? "size-4" : "w-full focus:ring-1"} ${
          errors[name]
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "focus:border-accent focus:ring-accent"
        }`}
      />
      {errors[name] && (
        <span className="absolute -top-2.5 max-w-56 animate-pulse self-center rounded-xl border-2 border-red-200 bg-red-50 p-1.5 text-sm text-red-500 shadow-2xl">
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
