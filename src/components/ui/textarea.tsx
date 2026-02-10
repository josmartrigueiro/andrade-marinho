"use client";

import { forwardRef, useId } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  maxLength?: number;
  currentLength?: number;
}

const lineClasses =
  "w-full border-0 border-b bg-transparent px-0 py-2 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-sm focus:outline-none transition-colors duration-300";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, error, className, id: externalId, maxLength, currentLength, ...props },
    ref,
  ) => {
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
        <textarea
          ref={ref}
          id={id}
          className={cn(
            lineClasses,
            "resize-none",
            error
              ? "border-destructive"
              : "border-gray-300 focus:border-primary",
            className,
          )}
          maxLength={maxLength}
          {...props}
        />
        <div className="flex items-center justify-between mt-1.5">
          <AnimatePresence>
            {error && (
              <motion.p
                className="text-xs text-destructive"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
          {maxLength != null && currentLength != null && (
            <span className="text-xs text-gray-400 ml-auto">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
