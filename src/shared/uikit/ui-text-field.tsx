import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export type UiTextFieldProps = InputHTMLAttributes<HTMLInputElement>;

export const UiTextField = ({ className, ...props }: UiTextFieldProps) => {
  return (
    <input
      {...props}
      className={clsx(
        className,
        "rounded border border-slate-300 transition-colors outline-none px-2 h-10",
        "focus:border-purple-700"
      )}
    />
  );
};
