import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

export type UiLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const UiLink = ({ className, ...props }: UiLinkProps) => {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "p-1 text-purple-600 cursor-pointer transition-colors underline underline-offset-4",
        "hover:text-purple-700"
      )}
    />
  );
};
