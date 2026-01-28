"use client";

import { motion, type Transition, type Variants } from "motion/react";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const smoothEasing = [0.25, 0.1, 0.25, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    x: -80,
    opacity: 0,
    filter: "blur(6px)",
  },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
};

const itemTransition: Transition = {
  duration: 1.2,
  ease: smoothEasing,
};

const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const reducedMotionTransition: Transition = {
  duration: 0.3,
};

export function Presentation() {
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion ? reducedMotionVariants : itemVariants;
  const transition = prefersReducedMotion
    ? reducedMotionTransition
    : itemTransition;

  return (
    <section id="presentation">
      <div className="container px-4 pb-9 md:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-6 py-4 md:flex-row md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="w-full md:w-[25%]"
            variants={variants}
            transition={transition}
          >
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary-light">
              INTRODUÇÃO
            </h3>
          </motion.div>

          <motion.div
            className="w-full md:w-[66.66%]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={variants} transition={transition}>
              <Image
                src="/logo-white.png"
                alt="Andrade Marinho"
                width={180}
                height={180}
                className="h-auto w-30 md:w-37.5 lg:w-45"
              />
            </motion.div>

            <motion.h2
              className="mt-6 text-white text-xl font-medium md:mt-8 md:text-3xl lg:text-4xl"
              variants={variants}
              transition={transition}
            >
              Andrade Marinho Empreendimentos é uma construtora sediada no
              Nordeste, dedicada a entregar apartamentos com acabamento de
              excelência. Unindo conforto, funcionalidade e cuidado, nosso
              propósito é transformar sonhos em lares tangíveis, humanos e
              duráveis.
            </motion.h2>

            <motion.div
              className="mt-8 w-full max-w-227 border-t border-primary-light/50 md:mt-10"
              variants={variants}
              transition={transition}
            />

            <motion.p
              className="mt-8 text-sm text-gray-400 sm:text-base md:mt-10"
              variants={variants}
              transition={transition}
            >
              Na Andrade Marinho, não entregamos apenas metros quadrados;
              criamos ambientes que contam histórias. Nossa abordagem humana,
              acessível e sofisticada redefine o morar com elegância funcional.
              Explore a sensibilidade minimalista e contemporânea que expressa a
              essência da Andrade Marinho Empreendimentos.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
