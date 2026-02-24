"use client";

import { Separator } from "@/components/ui/separator";
import { TextEffect } from "@/components/ui/text-effect";
import { Buildings, SealCheck } from "@phosphor-icons/react";
import { motion, type Variants } from "motion/react";

const services = [
  {
    icon: Buildings,
    title: "Engenharia e Planejamento",
    description:
      "Cada obra é conduzida com acompanhamento técnico especializado, gestão eficiente de cronograma e controle detalhado de execução. Excelência começa na fundação e termina nos detalhes.",
  },
  {
    icon: SealCheck,
    title: "Compromisso com Entrega",
    description:
      "Transparência e respeito ao cliente sustentam cada projeto. Cumprimos prazos, comunicamos com clareza e assumimos responsabilidade em cada etapa. Mais do que chaves, entregamos credibilidade.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    x: -100,
    opacity: 0,
    filter: "blur(6px)",
  },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function Services() {
  return (
    <section
      id="services"
      className="relative container px-4 pb-16 lg:px-12 py-0"
    >
      <motion.div
        className="flex flex-col gap-10 lg:flex-row lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="lg:w-[34%]" variants={itemVariants}>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600">
            Nossa Base
          </span>
          <h2 className="mt-4 text-2xl font-medium uppercase text-gray-900 md:text-4xl lg:text-5xl -translate-x-1">
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
                  hidden: {
                    opacity: 0,
                    x: -20,
                    filter: "blur(8px)",
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  },
                },
              }}
              segmentTransition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              Precisão e
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
                  hidden: {
                    opacity: 0,
                    x: -20,
                    filter: "blur(8px)",
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  },
                },
              }}
              segmentTransition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              Compromisso
            </TextEffect>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-gray-600 md:text-base">
            Não construímos apenas imóveis. Desenvolvemos projetos pensados para
            valorização patrimonial, segurança estrutural e impacto positivo na
            cidade. Confiança, para nós, não é discurso. É processo.
          </p>
        </motion.div>

        <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="flex flex-col"
              variants={itemVariants}
            >
              <div className="mb-6 flex size-13 items-center justify-center rounded-full border border-gray-300/40 bg-white shadow-lg shadow-gray-200">
                <service.icon
                  className="size-5.5 font-bold stroke-2 text-gray-700"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 md:text-2xl">
                {service.title}
              </h3>
              <Separator className="my-6" />
              <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Separator className="mt-12 md:mt-16" />
    </section>
  );
}
