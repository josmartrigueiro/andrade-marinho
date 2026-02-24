"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const phrases = [
  "Seu próximo capítulo começa com uma decisão.",
  "Escolha construir com quem constrói excelência.",
  "Agende uma conversa personalizada.",
];

export function ScrollText() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const containerOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.85, 1],
    [0, 1, 1, 1],
  );

  const opacity1 = useTransform(
    scrollYProgress,
    [0.08, 0.12, 0.25, 0.38],
    [0, 1, 1, 0],
  );
  const y1 = useTransform(
    scrollYProgress,
    [0.08, 0.12, 0.25, 0.38],
    [80, 0, 0, -250],
  );
  const rotate1 = useTransform(
    scrollYProgress,
    [0.08, 0.12, 0.25, 0.38],
    [4, 0, 0, -5],
  );

  const opacity2 = useTransform(
    scrollYProgress,
    [0.38, 0.5, 0.58, 0.68],
    [0, 1, 1, 0],
  );
  const y2 = useTransform(
    scrollYProgress,
    [0.38, 0.5, 0.58, 0.68],
    [60, 0, 0, -250],
  );
  const rotate2 = useTransform(
    scrollYProgress,
    [0.38, 0.5, 0.58, 0.68],
    [4, 0, 0, -5],
  );

  const opacity3 = useTransform(
    scrollYProgress,
    [0.58, 0.68, 0.85, 1],
    [0, 1, 1, 1],
  );
  const y3 = useTransform(
    scrollYProgress,
    [0.58, 0.68, 0.85, 1],
    [60, 0, 0, -620],
  );
  const rotate3 = useTransform(
    scrollYProgress,
    [0.58, 0.68, 0.85, 1],
    [4, 0, 0, 0],
  );

  const opacities = [opacity1, opacity2, opacity3];
  const yValues = [y1, y2, y3];
  const rotateValues = [rotate1, rotate2, rotate3];

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <motion.div
        className="fixed inset-0 w-full h-screen flex items-center justify-center pointer-events-none z-10"
        style={{ opacity: containerOpacity }}
      >
        <div className="relative flex items-center justify-center w-full h-full">
          {phrases.map((phrase, index) => (
            <motion.h2
              key={`phrase-${index}`}
              className="absolute text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 text-center px-8 max-w-5xl leading-tight"
              style={{
                opacity: opacities[index],
                y: yValues[index],
                rotate: rotateValues[index],
              }}
            >
              {phrase}
            </motion.h2>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
