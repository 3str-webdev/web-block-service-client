import clsx from "clsx";
import { SelectHTMLAttributes, forwardRef, useId } from "react";

export type UiSelectOption<T = string> = {
  value: T;
  label: string;
};
export type UiSelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options?: UiSelectOption[];
};

export const UiSelectField = forwardRef<HTMLSelectElement, UiSelectFieldProps>(
  ({ className, options, ...props }, ref) => {
    const id = useId();
    const getSelectOptionKey = (index: number): string => {
      return `select_${id}_option_${index}`;
    };
    return (
      <select
        {...props}
        ref={ref}
        className={clsx(
          className,
          "rounded border border-slate-300 transition-colors outline-none px-2 h-10",
          "focus:border-purple-700"
        )}
      >
        {options?.map((option, i) => {
          return (
            <option key={getSelectOptionKey(i)} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    );
  }
);
