import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type InteractiveHoverButtonSize = "xs" | "sm" | "md" | "lg" | "default" | "responsive-md";

interface InteractiveHoverButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: InteractiveHoverButtonSize;
}

const sizeClasses: Record<InteractiveHoverButtonSize, string> = {
  xs: "rounded-sm px-3 py-1 text-xs [&_svg]:size-3",
  sm: "rounded-sm px-4 py-1.5 text-xs [&_svg]:size-3.5",
  md: "rounded-md px-6 py-2 text-sm [&_svg]:size-5",
  lg: "rounded-lg px-8 py-3 text-base [&_svg]:size-5",
  default: "rounded-md px-6 py-2 text-sm [&_svg]:size-4",
  "responsive-md": "md:rounded-md md:px-6 md:py-2 md:text-sm md:[&_svg]:size-5 rounded-sm px-4 py-1.5 text-xs [&_svg]:size-3.5",
};

const dotSizeClasses: Record<InteractiveHoverButtonSize, string> = {
  xs: "h-1.5 w-1.5",
  sm: "h-2 w-2",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5",
  default: "h-2 w-2",
  "responsive-md": "h-2 w-2",
};

export function InteractiveHoverButton({ children, className, size = "default", ...props }: InteractiveHoverButtonProps) {
  return (
    <button
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden border border-primary bg-background text-center font-semibold hover:border-primary",
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        <div className={cn("rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]", dotSizeClasses[size])}></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">{children}</span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <HugeiconsIcon icon={ArrowRight02Icon} />
      </div>
    </button>
  );
}
