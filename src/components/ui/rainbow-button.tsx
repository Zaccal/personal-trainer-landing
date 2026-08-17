import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const rainbowButtonVariants = cva(
  cn(
    "group relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2",
    "animate-rainbow text-sm font-medium whitespace-nowrap transition-all",
    "rounded-sm outline-none",
    "focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "aria-invalid:border-destructive",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none",
    "[&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ),
  {
    variants: {
      variant: {
        default:
          "border-0 bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] text-primary-foreground [border:calc(0.125rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:bg-[length:200%] before:[filter:blur(0.75rem)] dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",

        outline:
          "border border-input border-b-transparent bg-[linear-gradient(#ffffff,#ffffff),linear-gradient(#ffffff_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] text-accent-foreground before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))] before:bg-[length:200%] before:[filter:blur(0.75rem)] dark:bg-[linear-gradient(#0a0a0a,#0a0a0a),linear-gradient(#0a0a0a_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
      },

      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-xl px-3 text-xs",
        lg: "h-11 rounded-xl px-8",
        responsive: "h-10 rounded-xl px-4 sm:h-11 sm:px-8 sm:text-sm",
        icon: "size-9",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface RainbowButtonProps extends useRender.ComponentProps<"button">, VariantProps<typeof rainbowButtonVariants> {}

function RainbowButton({ className, variant, size, render, ...props }: RainbowButtonProps) {
  return useRender({
    defaultTagName: "button",
    render,
    props: {
      ...props,
      "data-slot": "rainbow-button",
      className: cn(
        rainbowButtonVariants({
          variant,
          size,
        }),
        className,
      ),
    },
  });
}

export { RainbowButton, rainbowButtonVariants, type RainbowButtonProps };
