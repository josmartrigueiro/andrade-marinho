"use client";

import { Separator } from "@/components/ui/separator";
import { motion, type Variants } from "motion/react";
import { CountingNumber } from "@/components/ui/counting-number";

const stats = [
  {
    number: "+15",
    value: 15,
    suffix: "",
    label: "PROJETOS\nLANÇADOS",
  },
  {
    number: "+13",
    value: 13,
    suffix: "",
    label: "PROJETOS\nENTREGUES",
  },
  {
    number: "+222mil",
    value: 222,
    suffix: "mil",
    label: "METROS QUADRADOS\nCONSTRUÍDOS",
  },
  {
    number: "+1007mil",
    value: 1007,
    suffix: "mil",
    label: "CLIENTES",
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

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  return (
    <span>
      +
      <CountingNumber
        number={value}
        fromNumber={0}
        inView={true}
        inViewMargin="-100px"
        inViewOnce={true}
        transition={{ stiffness: 120, damping: 25 }}
      />
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="stats" className="py-16 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="lg:pt-2" variants={itemVariants}>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary-dark">
              ANDRADE MARINHO EM DETALHES
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="mb-10 text-2xl font-medium uppercase text-gray-900 md:text-4xl lg:text-5xl">
              NOSSA JORNADA
              <br />
              EM NÚMEROS
            </h2>

            <div className="space-y-0">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.number}
                  className="relative"
                  variants={itemVariants}
                >
                  <div className="flex items-center pt-10 pb-5">
                    <span className="w-72 leading-none tracking-wider text-2xl font-medium uppercase text-gray-900 md:text-4xl lg:text-5xl">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
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
