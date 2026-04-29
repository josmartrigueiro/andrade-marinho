"use client";

import {
  Buildings,
  DiamondsFour,
  Heart,
  MapPin,
  ShieldCheck,
} from "@phosphor-icons/react";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TextEffect } from "@/components/ui/text-effect";

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
    name: "Miguel Carrilho",
    images: [
      {
        src: "/ventures/miguel-carrilho-expend-16-9.png",
        alt: "Vista aérea do Edifício Miguel Carrilho ao pôr do sol com o Rio Potengi ao fundo em Natal RN",
      },
      {
        src: "/ventures/miguel-carrilho-close-16-9.png",
        alt: "Detalhe das varandas e fachada envidraçada do Edifício Miguel Carrilho com vista para o rio",
      },
    ],
  },
  {
    name: "Themis Tower",
    images: [
      {
        src: "/ventures/themis-beautiful-sky-3-4.png",
        alt: "Vista aérea do Edifício Themis ao entardecer com panorama da cidade de Natal ao fundo",
      },
      {
        src: "/ventures/themis-details-3-4.png",
        alt: "Detalhe da fachada envidraçada do Edifício Themis com reflexos da cidade de Natal",
      },
      {
        src: "/ventures/themis-take-open-3-4.png",
        alt: "Vista aérea aberta do Edifício Themis inserido no bairro Tirol em Natal RN",
      },
    ],
  },
  {
    name: "Dunas Tirol",
    images: [
      {
        src: "/ventures/dunas-close-3-4.png",
        alt: "Fachada do Dunas Tirol com varandas amplas e acabamento em tons claros em Natal RN",
      },
      {
        src: "/ventures/dunas-open-4-3.png",
        alt: "Vista aérea do Dunas Tirol entre edifícios no bairro Tirol em Natal RN",
      },
    ],
  },
  {
    name: "Bosque Tirol",
    images: [
      {
        src: "/ventures/bosque-tirol-center-3-4.png",
        alt: "Fachada cilíndrica do Edifício Bosque Tirol com varandas curvas e design arrojado em Natal RN",
      },
      {
        src: "/ventures/bosque-tirol-close-4-3.png",
        alt: "Topo do Edifício Bosque Tirol com varandas panorâmicas e vista para o skyline de Natal",
      },
    ],
  },
  {
    name: "Lourdes Marinho",
    images: [
      {
        src: "/ventures/residencial-lourdes-marinho.png",
        alt: "Fachada do Residencial Lourdes Marinho em Natal RN",
      },
    ],
  },
  {
    name: "Topázio",
    images: [
      {
        src: "/ventures/residencial-topazio.png",
        alt: "Fachada do Residencial Topázio em Natal RN",
      },
    ],
  },
  {
    name: "Terraços do Atlântico",
    images: [
      {
        src: "/ventures/residencial-terraços-do-atlantico.png",
        alt: "Fachada do Residencial Terraços do Atlântico em Natal RN",
      },
    ],
  },
  {
    name: "José Marinho de Lucena",
    images: [
      {
        src: "/ventures/residencial-jose-marinho-de-lucena.png",
        alt: "Fachada do Residencial José Marinho de Lucena em Natal RN",
      },
    ],
  },
];

const intervals = [7000, 8500, 5500, 7500, 6000, 9000, 7200, 6500];

const gridAreas = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;

const animationDirections = [
  { y: -40, x: 0 },
  { x: 40, y: 0 },
  { x: -40, y: 0 },
  { y: 40, x: 0 },
  { x: -40, y: 0 },
  { y: 40, x: 0 },
  { y: 40, x: 0 },
  { x: 40, y: 0 },
];

function ImageSlideshow({
  images,
  interval,
  name,
  className,
}: {
  images: { src: string; alt: string }[];
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
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${images[0].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px)",
        }}
        aria-hidden
      />

      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 50vw, 40vw"
          priority
        />
      </div>

      {images.slice(1).map((image, index) => (
        <motion.div
          key={image.src}
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
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
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 50vw, 40vw"
            loading="lazy"
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
            className="grid gap-4
              grid-cols-2
              lg:grid-cols-3 lg:grid-rows-4 lg:h-[900px]
              lg:[grid-template-areas:'a_a_b'_'c_d_d'_'e_e_h'_'f_g_h']"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {ventures.map((venture, index) => {
              const dir = animationDirections[index];
              return (
                <motion.div
                  key={venture.name}
                  className="aspect-[3/4] lg:aspect-auto"
                  style={{ gridArea: gridAreas[index] }}
                  variants={{
                    hidden: { ...dir, opacity: 0, filter: "blur(6px)" },
                    visible: {
                      x: 0,
                      y: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    },
                  }}
                >
                  <ImageSlideshow
                    images={venture.images}
                    interval={intervals[index]}
                    name={venture.name}
                    className="h-full w-full"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
