"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "@phosphor-icons/react";
import { motion, type Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    x: -50,
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

export function CtaPresentation() {
  return (
    <section
      id="cta-presentation"
      className="container py-0! md:pb-16! lg:pb-20"
    >
      <motion.div
        className="flex flex-col md:items-center justify-between gap-6 md:flex-row md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="md:flex-row flex-col flex md:items-center gap-6 md:gap-12">
          <motion.div
            variants={itemVariants}
            className="flex size-13 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white"
          >
            <Lightbulb className="size-5.5 text-gray-700" strokeWidth={2} />
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-xl font-medium italic text-gray-900 md:text-2xl lg:text-4xl max-w-3xl"
          >
            Projetos pensados para quem valoriza qualidade e visão de longo
            prazo.
          </motion.h2>
        </div>

        <motion.div variants={itemVariants}>
          <Button
            variant="primary"
            className="w-80"
            render={(buttonProps) => (
              <a
                {...(buttonProps as React.ComponentProps<"a">)}
                href="#contato"
              />
            )}
          >
            Conheça as oportunidades
            <ArrowRight className="h-4 w-4 align-middle mb-1 group-hover/btn:-rotate-45 transition-all" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
