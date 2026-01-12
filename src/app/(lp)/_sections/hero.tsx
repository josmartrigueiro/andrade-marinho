"use client";

import { TextEffect } from "@/components/ui/text-effect";
import Image from "next/image";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden z-0 flex items-center justify-center"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.23, 1, 0.32, 1],
          delay: 3.6,
        }}
      >
        <Image
          src="/privilegi/praca-caramanchao.jpg"
          alt="Praça do Caramanchão"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/20" />

      <h1 className="uppercase text-5xl text-white tracking-widest">
        <span className="sr-only">Privilegi Ponta Negra</span>
        <TextEffect
          per="char"
          delay={3.7}
          as="span"
          preset="elegant"
          speedReveal={1.0}
          speedSegment={0.4}
          segmentTransition={{
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1],
          }}
        >
          Privilegi Ponta Negra
        </TextEffect>
      </h1>
    </section>
  );
}
