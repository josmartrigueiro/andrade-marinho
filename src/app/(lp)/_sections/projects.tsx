"use client";

import {
  Buildings,
  DiamondsFour,
  Heart,
  MapPin,
  ShieldCheck,
} from "@phosphor-icons/react";
import { motion, type Variants } from "motion/react";
import { TextEffect } from "@/components/ui/text-effect";
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
    icon: MapPin,
    title: "Localizações Privilegiadas",
  },
  {
    icon: DiamondsFour,
    title: "Acabamento Premium",
  },
  {
    icon: Heart,
    title: "Qualidade de Vida",
  },
  {
    icon: ShieldCheck,
    title: "Confiança e Solidez",
  },
];

const ventures = [
  {
    name: "Themis",
    images: [
      "/ventures/themis-1.jpg",
      "/ventures/themis-4.jpg",
      "/ventures/themis-7.jpg",
    ],
  },
  {
    name: "Miguel Carrilho",
    images: [
      "/ventures/miguel-carrilho-2.jpg",
      "/ventures/miguel-carrilho-3.jpg",
      "/ventures/miguel-carrilho-5.jpg",
    ],
  },
  {
    name: "Dunas",
    images: [
      "/ventures/dunas-3.jpg",
      "/ventures/dunas-1.jpg",
      "/ventures/dunas-2.jpg",
    ],
  },
  {
    name: "Bosque Tirol",
    images: ["/ventures/bosque-tirol-1.jpg", "/ventures/bosque-tirol-2.jpg"],
  },
];

const intervals = [7000, 8500, 5500, 7500];

function ImageSlideshow({
  images,
  interval,
  name,
  className,
}: {
  images: string[];
  interval: number;
  name: string;
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
          alt={`Empreendimento ${name} - Andrade Marinho`}
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
            alt={`Empreendimento ${name} - Andrade Marinho`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      ))}

      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-primary/70 via-primary/30 to-transparent p-4 pt-10">
        <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white drop-shadow-lg">
          {name}
        </span>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="pt-12 md:pt-16 lg:pt-20">
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
              <Buildings
                className="size-5.5 font-bold stroke-2 text-gray-700"
                strokeWidth={1.5}
              />
            </motion.div>

            <motion.span
              className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600 mb-2"
              variants={itemVariants}
            >
              Empreendimentos
            </motion.span>

            <h2 className="text-2xl font-medium uppercase text-gray-900 md:text-4xl lg:text-5xl">
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
                      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
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
                Nossas
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
                Entregas
              </TextEffect>
            </h2>

            <motion.p
              className="text-base text-gray-600 leading-relaxed mt-6 mb-6 max-w-md"
              variants={itemVariants}
            >
              Conheça os empreendimentos que levam a assinatura Andrade Marinho.
              Cada projeto reflete nosso compromisso com qualidade, design
              sofisticado e valorização do seu investimento.
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
                images={ventures[0].images}
                interval={intervals[0]}
                name={ventures[0].name}
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
                images={ventures[1].images}
                interval={intervals[1]}
                name={ventures[1].name}
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
                images={ventures[2].images}
                interval={intervals[2]}
                name={ventures[2].name}
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
                images={ventures[3].images}
                interval={intervals[3]}
                name={ventures[3].name}
                className="h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
