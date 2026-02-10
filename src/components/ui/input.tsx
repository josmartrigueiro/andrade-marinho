"use client";

import { forwardRef, useId } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const lineClasses =
  "w-full border-0 border-b bg-transparent px-0 py-2 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-sm focus:outline-none transition-colors duration-300";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id: externalId, ...props }, ref) => {
    const autoId = useId();
    const id = externalId ?? autoId;

    return (
      <div>
        <label
          htmlFor={id}
          className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={cn(
            lineClasses,
            error
              ? "border-destructive"
              : "border-gray-300 focus:border-primary",
            className,
          )}
          {...props}
        />
        <AnimatePresence>
          {error && (
            <motion.p
              className="mt-1.5 text-xs text-destructive"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
