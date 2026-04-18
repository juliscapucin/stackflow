import * as React from "react";
import NextLink from "next/link";

import { cn } from "@/lib/utils";

/**
 * Figma `Link` states: Default | Hover | Active | Focus | Disabled.
 * Storybook `state` prop matches those visuals (`focus` ≈ `focus-visible`; `disabled` ≈ `aria-disabled`).
 */
export type LinkState = "default" | "hover" | "active" | "focus" | "disabled";

const linkClassName = cn(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-transparent bg-transparent px-5 py-2",
  "font-plain text-label-large leading-label-large tracking-label-large font-normal uppercase text-foreground",
  "transition-[color,background-color,border-color] duration-150 ease-out",
  "cursor-pointer",
  "hover:bg-accent-1 hover:border-foreground",
  "active:bg-transparent active:border-foreground",
  "data-[state=hover]:bg-accent-1 data-[state=hover]:border-foreground",
  "data-[state=active]:bg-transparent data-[state=active]:border-foreground",
  "data-[state=focus]:bg-accent-1 data-[state=focus]:border-foreground data-[state=focus]:outline-none data-[state=focus]:ring-2 data-[state=focus]:ring-ring",
  "focus-visible:bg-accent-1 focus-visible:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  "aria-disabled:pointer-events-none aria-disabled:text-muted-foreground aria-disabled:bg-transparent aria-disabled:border-transparent",
);

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink> & {
  state?: LinkState;
  disabled?: boolean;
};

export function Link({
  className,
  children,
  state = "default",
  disabled,
  onClick,
  tabIndex,
  ...props
}: LinkProps) {
  const isDisabled = disabled || state === "disabled";
  const dataState = isDisabled || state === "default" ? undefined : state;

  return (
    <NextLink
      data-state={dataState}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : tabIndex}
      onClick={
        isDisabled
          ? (e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
            }
          : onClick
      }
      className={cn(linkClassName, className)}
      {...props}
    >
      {children}
    </NextLink>
  );
}
