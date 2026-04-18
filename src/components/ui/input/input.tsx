import * as React from "react";
import { Input as BaseInput } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

export type InputSize = "default" | "small";

export interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<typeof BaseInput>, "size" | "className"> {
  size?: InputSize;
  error?: boolean;
  className?: string;
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 13.15 13.15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("size-[18px] shrink-0 text-muted-foreground", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.37954 9.56363C7.69036 9.56363 9.56363 7.69036 9.56363 5.37954C9.56363 3.06873 7.69036 1.19545 5.37954 1.19545C3.06873 1.19545 1.19545 3.06873 1.19545 5.37954C1.19545 7.69036 3.06873 9.56363 5.37954 9.56363ZM5.37954 10.7591C6.64973 10.7591 7.81709 10.3189 8.73738 9.58264L12.1296 12.975C12.363 13.2083 12.7415 13.2083 12.975 12.975C13.2083 12.7415 13.2083 12.363 12.975 12.1296L9.58264 8.73738C10.3189 7.81709 10.7591 6.64973 10.7591 5.37954C10.7591 2.40851 8.35058 0 5.37954 0C2.40851 0 0 2.40851 0 5.37954C0 8.35058 2.40851 10.7591 5.37954 10.7591Z"
        fill="currentColor"
      />
    </svg>
  );
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = "default", error = false, className, type, ...props }, ref) => {
    const isFile = type === "file";

    return (
      <div
        className={cn(
          "relative flex w-64 items-center rounded-lg border bg-background px-2.5 transition-shadow",
          size === "default" ? "h-9" : "h-8",
          error ? "border-destructive" : "border-muted-foreground",
          error
            ? "has-[input:focus]:shadow-[0_0_0_3px_var(--destructive-subtle)]"
            : "has-[input:focus]:border-background has-[input:focus]:shadow-[0_0_0_3px_var(--ring)]",
          "has-[input:disabled]:opacity-50",
          isFile && "cursor-pointer",
          className,
        )}
      >
        <BaseInput
          ref={ref}
          type={type}
          className={cn(
            "min-w-0 flex-1 bg-transparent font-plain outline-none",
            "text-body-small leading-body-small tracking-body-small",
            "text-foreground placeholder:text-muted-foreground",
            "disabled:cursor-not-allowed",
            isFile &&
              "file:mr-2 file:cursor-pointer file:rounded file:border-0 file:bg-transparent file:font-plain file:text-body-small file:font-medium file:text-foreground",
          )}
          {...props}
        />
        {!isFile && <SearchIcon />}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
