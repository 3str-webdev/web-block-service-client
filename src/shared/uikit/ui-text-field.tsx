import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";

export type UiTextFieldProps = InputHTMLAttributes<HTMLInputElement>;

export const UiTextField = forwardRef<HTMLInputElement, UiTextFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className={clsx(
          className,
          "rounded border border-slate-300 transition-colors outline-none px-2 h-10",
          "focus:border-purple-700"
        )}
      />
    );
  }
);
