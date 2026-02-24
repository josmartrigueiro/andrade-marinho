"use client";

import { motion } from "motion/react";
import type React from "react";

import { cn } from "@/lib/utils";

const STAGGER = 0.035;

interface TextRollProps {
  children: string;
  className?: string;
  center?: boolean;
}

export const TextRoll: React.FC<TextRollProps> = ({
  children,
  className,
  center = false,
}) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={cn("relative block overflow-hidden", className)}
      style={{
        lineHeight: 1,
      }}
    >
      <div className="overflow-hidden">
        {children.split("").map((l, i, arr) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;
          const uniqueKey = `${arr.slice(0, i).join("")}${l}${i}`;

          return (
            <motion.span
              key={uniqueKey}
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {children.split("").map((l, i, arr) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;
          const uniqueKey = `bottom-${arr.slice(0, i).join("")}${l}${i}`;

          return (
            <motion.span
              key={uniqueKey}
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};
