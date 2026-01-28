"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

const imageVariants: Variants = {
  hidden: {
    x: -80,
    opacity: 0,
    filter: "blur(8px)",
  },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-250, 250]);

  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-primary">
      <motion.div
        className="relative lg:absolute lg:left-8 xl:left-10 lg:top-0 lg:-translate-y-48 lg:w-[45%] h-130 lg:h-256 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
      >
        <motion.div
          className="absolute inset-0 h-[120%] -top-[10%]"
          style={{ y: imageY }}
        >
          <Image
            src="/privilege/street-frontage.jpg"
            alt="Fachada do empreendimento Andrade Marinho"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={100}
          />
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-150 lg:min-h-230">
        <div className="hidden lg:block" />

        <motion.div
          className="flex flex-col justify-center px-8 py-16 md:px-16 lg:px-20 lg:py-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-medium text-primary-foreground uppercase tracking-tight mb-8"
            variants={itemVariants}
          >
            Conheça a<br />
            Andrade Marinho
          </motion.h2>

          <motion.p
            className="text-sm md:text-base text-primary-foreground/80 tracking-wider leading-relaxed mb-12 max-w-md"
            variants={itemVariants}
          >
            Transformando sonhos em realidade, criando espaços que elevam a
            qualidade de vida e o bem-estar das pessoas.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Button
              variant="secondary"
              className="w-fit"
              render={(buttonProps) => (
                <a
                  {...(buttonProps as React.ComponentProps<"a">)}
                  href="#contato"
                />
              )}
            >
              Andrade Marinho
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
