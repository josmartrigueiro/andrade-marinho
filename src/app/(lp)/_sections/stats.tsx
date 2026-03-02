"use client";

import { Separator } from "@/components/ui/separator";
import { TextEffect } from "@/components/ui/text-effect";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  type Variants,
} from "motion/react";
import * as React from "react";

const stats = [
  {
    id: "empreendimentos",
    value: 9,
    prefix: "",
    suffix: "",
    decimals: 0,
    label: "EMPREENDIMENTOS\nLANÇADOS",
  },
  {
    id: "unidades",
    value: 600,
    prefix: "+",
    suffix: "",
    decimals: 0,
    label: "UNIDADES\nCONSTRUÍDAS",
  },
  {
    id: "area-total",
    value: 85220,
    prefix: "",
    suffix: " m²",
    decimals: 1,
    label: "ÁREA TOTAL\nCONSTRUÍDA",
  },
  {
    id: "area-privativa",
    value: 47385,
    prefix: "",
    suffix: " m²",
    decimals: 2,
    label: "ÁREA PRIVATIVA\nCONSTRUÍDA",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    x: -60,
    opacity: 0,
    filter: "blur(6px)",
  },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { stiffness: 80, damping: 30 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formatter = React.useMemo(
    () =>
      new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }),
    [decimals],
  );

  React.useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    }
  }, [isInView, value, motionVal]);

  React.useEffect(() => {
    const unsubscribe = springVal.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + formatter.format(latest);
      }
    });
    return () => unsubscribe();
  }, [springVal, prefix, formatter]);

  return (
    <span className="inline-flex items-baseline gap-1 whitespace-nowrap">
      <span ref={ref}>
        {prefix}
        {formatter.format(0)}
      </span>
      {suffix && (
        <span className="text-base md:text-xl lg:text-2xl font-normal">
          {suffix}
        </span>
      )}
    </span>
  );
}

export function Stats() {
  return (
    <section id="stats" className="py-16 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-6 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="lg:pt-2" variants={itemVariants}>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600">
              ANDRADE MARINHO EM DETALHES
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="mb-4 md:mb-10 text-2xl font-medium uppercase text-gray-900 md:text-4xl lg:text-5xl">
              <TextEffect
                per="char"
                as="span"
                useViewport
                viewport={{ once: true, amount: 1 }}
                delay={0.1}
                speedReveal={1.2}
                className="block"
                variants={{
                  container: {
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.04,
                        delayChildren: 0.1,
                      },
                    },
                  },
                  item: {
                    hidden: { opacity: 0, x: -20, filter: "blur(8px)" },
                    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                  },
                }}
                segmentTransition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                NOSSA JORNADA
              </TextEffect>
              <TextEffect
                per="char"
                as="span"
                useViewport
                viewport={{ once: true, amount: 1 }}
                delay={0.35}
                speedReveal={1.2}
                className="block"
                variants={{
                  container: {
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.04,
                        delayChildren: 0.35,
                      },
                    },
                  },
                  item: {
                    hidden: { opacity: 0, x: -20, filter: "blur(8px)" },
                    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                  },
                }}
                segmentTransition={{
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                EM NÚMEROS
              </TextEffect>
            </h2>

            <div className="space-y-0">
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  className="relative"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-4 md:gap-8 pt-10 pb-5">
                    <span className="shrink-0 w-28 md:w-56 lg:w-72 tabular-nums leading-none tracking-wider text-2xl font-medium uppercase text-gray-900 md:text-4xl lg:text-5xl">
                      <AnimatedNumber
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                      />
                    </span>

                    <span className="whitespace-pre-line text-sm font-normal uppercase leading-relaxed tracking-wider text-primary-dark">
                      {stat.label}
                    </span>
                  </div>

                  <Separator className="bg-primary-dark" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
