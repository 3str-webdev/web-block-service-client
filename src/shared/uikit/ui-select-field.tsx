import clsx from "clsx";
import { SelectHTMLAttributes, useId } from "react";

export type UiSelectOption = {
  value: string;
  label: string;
};
export type UiSelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options?: UiSelectOption[];
};

export const UiSelectField = ({
  className,
  options,
  ...props
}: UiSelectFieldProps) => {
  const id = useId();
  const getSelectOptionKey = (index: number): string => {
    return `select_${id}_option_${index}`;
  };
  return (
    <select
      {...props}
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
};
