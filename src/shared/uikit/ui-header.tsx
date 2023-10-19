import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { UiLogo } from "./ui-logo";

export type UiHeaderProps = HTMLAttributes<HTMLElement> & {
  contentElement?: ReactNode;
};

export const UiHeader = ({
  className,
  contentElement,
  ...props
}: UiHeaderProps) => {
  return (
    <header
      {...props}
      className={clsx(
        className,
        "px-4 py-2 border-b border-purple-700 flex items-center justify-between bg-slate-50"
      )}
    >
      <div className="flex items-center gap-1">
        <UiLogo className="w-12 h-12" />
        <h1 className="text-2xl font-semibold">WBS</h1>
      </div>
      {contentElement}
    </header>
  );
};
