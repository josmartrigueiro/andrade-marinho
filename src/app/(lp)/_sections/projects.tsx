"use client";

import {
  ChartBar,
  DiamondsFour,
  Heart,
  PencilRuler,
  SlidersHorizontal,
} from "@phosphor-icons/react";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

const features = [
  {
    icon: PencilRuler,
    title: "Design Moderno e Inovador",
  },
  {
    icon: DiamondsFour,
    title: "Renderizações Realistas",
  },
  {
    icon: Heart,
    title: "Qualidade",
  },
  {
    icon: SlidersHorizontal,
    title: "Acessível e Personalizado",
  },
];

const slideImages = [
  [
    "/privilege/front-walkway.jpg",
    "/privilege/garden-courtyard.jpg",
    "/privilege/street-frontage.jpg",
  ],
  [
    "/privilege/gourmet-lounge.jpg",
    "/privilege/praca-caramanchao.jpg",
    "/privilege/ocean-lounge-terrace.jpg",
  ],
  [
    "/privilege/rooftop-social-club.jpg",
    "/privilege/infinity-pool-view.jpg",
    "/privilege/resort-pool-deck.jpg",
  ],
  [
    "/privilege/sunset-living-patio.jpg",
    "/privilege/gourmet-lounge.jpg",
    "/privilege/garden-courtyard.jpg",
  ],
];

const intervals = [7000, 8500, 5500, 7500];

function ImageSlideshow({
  images,
  interval,
  className,
}: {
  images: string[];
  interval: number;
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px)",
        }}
      />

      <div className="absolute inset-0">
        <Image
          src={images[0]}
          alt="Projeto Andrade Marinho"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {images.slice(1).map((src, index) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentIndex === index + 1 ? 1 : 0,
          }}
          transition={{
            duration: 2,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <Image
            src={src}
            alt="Projeto Andrade Marinho"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </motion.div>
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[calc(33.3333%-10px)_calc(66.6666%-10px)] gap-5">
          <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="flex size-13 items-center justify-center rounded-full border border-gray-300/40 bg-white shadow-lg shadow-gray-200 mb-4"
              variants={itemVariants}
            >
              <ChartBar
                className="size-5.5 font-bold stroke-2 text-gray-700"
                strokeWidth={1.5}
              />
            </motion.div>

            <motion.span
              className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600 mb-2"
              variants={itemVariants}
            >
              Projetos
            </motion.span>

            <motion.h2
              className="text-2xl font-medium uppercase text-gray-900 md:text-4xl lg:text-5xl"
              variants={itemVariants}
            >
              Espaços
              <br />
              Redefinidos
            </motion.h2>

            <motion.p
              className="text-sm text-gray-600 leading-relaxed mt-6 mb-6 max-w-sm"
              variants={itemVariants}
            >
              Elaborando sua visão única. Os serviços de Arquitetura, Interiores
              e Sustentabilidade da Andrade Marinho redefinem espaços com
              inovação e elegância.
            </motion.p>

            <motion.div className="flex flex-col" variants={containerVariants}>
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  className="flex items-center gap-3 py-3 border-t border-gray-200 first:border-t-0"
                  variants={itemVariants}
                >
                  <div className="flex size-13 items-center justify-center rounded-full border border-gray-300/40 bg-white shadow-lg shadow-gray-200">
                    <feature.icon
                      className="size-5.5 font-bold stroke-2 text-gray-700"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-base font-medium text-gray-900">
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-4 h-137.5 md:h-175 lg:h-187.5 [grid-template-areas:'a_a_a_a_a'_'b_b_c_c_c'_'b_b_d_d_d'] grid-cols-5 grid-rows-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
          >
            <motion.div
              className="[grid-area:a]"
              variants={{
                hidden: { y: -40, opacity: 0, filter: "blur(6px)" },
                visible: {
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
            >
              <ImageSlideshow
                images={slideImages[0]}
                interval={intervals[0]}
                className="h-full"
              />
            </motion.div>

            <motion.div
              className="[grid-area:b]"
              variants={{
                hidden: { y: 40, opacity: 0, filter: "blur(6px)" },
                visible: {
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
            >
              <ImageSlideshow
                images={slideImages[1]}
                interval={intervals[1]}
                className="h-full"
              />
            </motion.div>

            <motion.div
              className="[grid-area:c]"
              variants={{
                hidden: { x: -40, opacity: 0, filter: "blur(6px)" },
                visible: {
                  x: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
            >
              <ImageSlideshow
                images={slideImages[2]}
                interval={intervals[2]}
                className="h-full"
              />
            </motion.div>

            <motion.div
              className="[grid-area:d]"
              variants={{
                hidden: { x: 40, opacity: 0, filter: "blur(6px)" },
                visible: {
                  x: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
            >
              <ImageSlideshow
                images={slideImages[3]}
                interval={intervals[3]}
                className="h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
