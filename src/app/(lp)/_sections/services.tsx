"use client";

import { Separator } from "@/components/ui/separator";
import { Building2, Award } from "lucide-react";
import { motion, type Variants } from "motion/react";

const services = [
  {
    icon: Building2,
    title: "Empreendimentos Residenciais",
    description:
      "Transformamos sonhos em lares com soluções inovadoras que elevam a qualidade de vida. Desde residenciais a empreendimentos comerciais, nossa equipe combina experiência, estratégia e conhecimento técnico para criar espaços que valorizam cidades e incentivam seu desenvolvimento com sustentabilidade e tecnologia.",
  },
  {
    icon: Award,
    title: "Qualidade Certificada",
    description:
      "Somos certificados pelo PBQP-H Nível A e ISO 9001, garantindo excelência em cada projeto. Nosso compromisso vai além da construção: cultivamos relações duradouras baseadas no respeito e atenção a cada pessoa que confia em nosso trabalho, fortalecendo e enriquecendo histórias.",
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
    <section id="services" className="py-16 md:py-20 lg:py-24">
      <motion.div
        className="flex flex-col gap-10 lg:flex-row lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="lg:w-1/4" variants={itemVariants}>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600">
            O QUE FAZEMOS
          </span>
          <h2 className="mt-4 text-2xl font-medium uppercase text-gray-900 md:text-4xl lg:text-5xl">
            Nossa
            <br />
            essência
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-gray-600 md:text-base">
            Pioneiros no crescimento e desenvolvimento da cidade, estamos
            comprometidos em atender às necessidades de cada cliente com
            excelência e cuidado.
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
