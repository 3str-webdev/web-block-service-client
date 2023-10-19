import clsx from "clsx";
import { HTMLAttributes, useId } from "react";

type UiFormElementWrapperProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
  helperText?: string;
  errorText?: string;
  isRequired?: boolean;
  render?: (id: string) => JSX.Element;
};
export const UiFormElementWrapper = ({
  className,
  label,
  helperText,
  isRequired = false,
  errorText,
  render,
  children,
  ...props
}: UiFormElementWrapperProps) => {
  const id = useId();
  const labelHtmlFor = render !== undefined ? id : "";

  const getHelperOrErrorTextElem = () => {
    if (errorText) {
      return <div className="text-rose-500 text-xs">{errorText}</div>;
    }

    if (helperText) {
      return <div className="text-xs">{helperText}</div>;
    }

    return null;
  };

  return (
    <div {...props} className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={labelHtmlFor} className="block text-sm">
          {label}
          {isRequired && <span className="text-rose-500">*</span>}
        </label>
      )}
      {render ? render(id) : children}
      {getHelperOrErrorTextElem()}
    </div>
  );
};
