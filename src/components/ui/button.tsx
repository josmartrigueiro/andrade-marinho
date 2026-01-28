"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex justify-center items-center pt-[1.7rem] px-[2rem] pb-[1.5rem] uppercase text-sm overflow-hidden group isolate bg-transparent before:content-[''] before:absolute before:inset-0 before:block before:w-full before:h-full before:border before:border-primary-dark before:-z-10 before:[backface-visibility:hidden] before:pointer-events-none before:transition-all before:duration-[400ms] before:[transition-timing-function:cubic-bezier(.645,.045,.355,1)] before:delay-0 after:content-[''] after:absolute after:inset-0 after:block after:w-full after:h-full after:origin-bottom after:scale-y-0 after:-z-0 after:[backface-visibility:hidden] after:pointer-events-none after:transition-all after:duration-[400ms] after:[transition-timing-function:cubic-bezier(.645,.045,.355,1)] after:delay-0 hover:after:scale-y-100",
  {
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
    variants: {
      size: {
        default: "h-9 px-[calc(--spacing(3)-1px)] sm:h-8",
        icon: "size-9 sm:size-8",
        "icon-lg": "size-10 sm:size-9",
        "icon-sm": "size-8 sm:size-7",
        "icon-xl":
          "size-11 sm:size-10 [&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-4.5",
        "icon-xs":
          "size-7 sm:size-6 not-in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-4 sm:not-in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-10 px-[calc(--spacing(3.5)-1px)] sm:h-9",
        sm: "h-8 gap-1.5 px-[calc(--spacing(2.5)-1px)] sm:h-7",
        xl: "h-11 px-[calc(--spacing(4)-1px)] text-lg sm:h-10 sm:text-base [&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-4.5",
        xs: "h-7 gap-1 px-[calc(--spacing(2)-1px)] text-sm sm:h-6 sm:text-xs [&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5",
        "view-all": "px-12 py-5 text-sm uppercase tracking-widest",
      },
      variant: {
        primary:
          "border-primary text-primary-dark shadow-primary/24 shadow-xs after:bg-primary",
        secondary:
          "border-white text-white shadow-none before:border-white after:bg-primary-dark",
        tertiary:
          "border-primary-light text-primary-light-foreground shadow-xs after:bg-primary-light",
      },
      rounded: {},
    },
  },
);

interface ButtonProps extends useRender.ComponentProps<"button"> {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
}

function Button({ className, variant, size, render, ...props }: ButtonProps) {
  const typeValue: React.ButtonHTMLAttributes<HTMLButtonElement>["type"] =
    render ? undefined : "button";

  const defaultProps = {
    className: cn(buttonVariants({ className, size, variant })),
    "data-slot": "button",
    type: typeValue,
  };

  const mergedProps = mergeProps<"button">(defaultProps, props);

  return useRender({
    defaultTagName: "button",
    props: {
      ...mergedProps,
      children: (
        <span className="flex items-center justify-center gap-2.5 relative z-1 transition-colors duration-300 group-hover:text-white">
          {mergedProps.children}
        </span>
      ),
    },
    render,
  });
}

export { Button, buttonVariants };
