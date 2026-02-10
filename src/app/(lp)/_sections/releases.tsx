"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TextEffect } from "@/components/ui/text-effect";
import { Button } from "@/components/ui/button";

const AUTOPLAY_DELAY = 5000;
const PROGRESS_INTERVAL = 50;

const RELEASES = [
  {
    name: "Privilege\nPonta Negra",
    description: "270 e 328 m² e Duplex Penthouse\n3 e 4 Suítes",
    location: "Ponta Negra, Natal\nRN",
    image: "/privilege/infinity-pool-view.jpg",
    href: "#projeto",
  },
  {
    name: "Residencial\nMar Azul",
    description: "180 e 240 m²\n2 e 3 Suítes",
    location: "Via Costeira, Natal\nRN",
    image: "/privilege/ocean-lounge-terrace.jpg",
    href: "#projeto",
  },
  {
    name: "Vista\nParque",
    description: "120 e 160 m²\n2 e 3 Suítes",
    location: "Tirol, Natal\nRN",
    image: "/privilege/resort-pool-deck.jpg",
    href: "#projeto",
  },
  {
    name: "Jardins\ndo Alto",
    description: "200 e 280 m²\n3 e 4 Suítes",
    location: "Petrópolis, Natal\nRN",
    image: "/privilege/rooftop-social-club.jpg",
    href: "#projeto",
  },
  {
    name: "Terraço\nNobre",
    description: "150 e 210 m²\n2 e 3 Suítes",
    location: "Areia Preta, Natal\nRN",
    image: "/privilege/gourmet-lounge.jpg",
    href: "#projeto",
  },
  {
    name: "Parque\nDas Dunas",
    description: "160 e 220 m²\n3 Suítes",
    location: "Capim Macio, Natal\nRN",
    image: "/privilege/garden-courtyard.jpg",
    href: "#projeto",
  },
];

const formatIndex = (index: number) => String(index + 1).padStart(2, "0");

export function Releases() {
  const autoplayPlugin = useRef(
    Autoplay({
      delay: AUTOPLAY_DELAY,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayPlugin.current,
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startProgress = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    progressRef.current = 0;
    setProgress(0);

    intervalRef.current = setInterval(() => {
      progressRef.current += (PROGRESS_INTERVAL / AUTOPLAY_DELAY) * 100;
      if (progressRef.current >= 100) {
        progressRef.current = 100;
        setProgress(100);
        if (intervalRef.current) clearInterval(intervalRef.current);
      } else {
        setProgress(progressRef.current);
      }
    }, PROGRESS_INTERVAL);
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    startProgress();
  }, [emblaApi, startProgress]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      autoplayPlugin.current.reset();
    },
    [emblaApi],
  );

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplayPlugin.current.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplayPlugin.current.reset();
  }, [emblaApi]);

  const currentRelease = RELEASES[selectedIndex];

  return (
    <section id="releases" className="relative w-full h-screen overflow-hidden">
      {/* Embla viewport */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {RELEASES.map((release, index) => (
            <div
              key={index}
              className="relative min-w-0 flex-[0_0_100%] h-full"
            >
              <Image
                src={release.image}
                alt={release.name.replace("\n", " ")}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
                quality={90}
              />
              <div className="absolute inset-0 bg-black/35" />
            </div>
          ))}
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Top badge */}
        <div className="flex justify-center pt-24 md:pt-32">
          <span className="border border-white/60 px-6 py-2 text-xs tracking-[0.25em] uppercase text-white">
            Lançamentos
          </span>
        </div>

        {/* Center content */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Left description */}
          <div className="hidden md:block absolute left-16 lg:left-24">
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${selectedIndex}`}
                className="text-xs lg:text-sm text-white/90 whitespace-pre-line leading-relaxed tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {currentRelease.description}
              </motion.p>
            </AnimatePresence>
          </div>

          <h2
            key={`name-${selectedIndex}`}
            className="text-3xl md:text-5xl space-y-2 lg:text-6xl font-medium text-white uppercase text-center leading-[0.9] tracking-tight"
          >
            {currentRelease.name.split("\n").map((line, i) => (
              <TextEffect
                key={`${selectedIndex}-${i}`}
                per="char"
                as="span"
                delay={i * 0.25}
                speedReveal={0.8}
                className="block"
                variants={{
                  container: {
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.07,
                        delayChildren: i * 0.25,
                      },
                    },
                  },
                  item: {
                    hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  },
                }}
                segmentTransition={{
                  duration: 1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {line}
              </TextEffect>
            ))}
          </h2>

          <div className="hidden md:block absolute right-16 lg:right-24">
            <AnimatePresence mode="wait">
              <motion.p
                key={`loc-${selectedIndex}`}
                className="text-xs lg:text-sm text-white/90 whitespace-pre-line leading-relaxed tracking-wide text-right"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {currentRelease.location}
              </motion.p>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200"
            aria-label="Empreendimento anterior"
          >
            <CaretLeft className="size-8 lg:size-10" weight="thin" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200"
            aria-label="Próximo empreendimento"
          >
            <CaretRight className="size-8 lg:size-10" weight="thin" />
          </button>
        </div>

        {/* Bottom bar */}
        <div className="relative mx-4 md:mx-6 lg:mx-8 mb-6 md:mb-8 lg:mb-10">
          <div className="flex justify-center mb-0">
            <Button
              variant="outline-white"
              render={(props) => <a {...props} href="/" />}
              className="w-64"
            >
              Ver empreendimento
            </Button>
          </div>

          <div className="absolute left-0 bottom-0 flex items-center gap-2 h-full">
            {RELEASES.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-3 h-3 bg-white"
                    : "w-2 h-2 border border-white/60 hover:border-white"
                }`}
                aria-label={`Ir para empreendimento ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress + Counter - absolute right */}
          <div className="absolute right-0 bottom-0 flex flex-col items-end gap-1">
            <span className="text-sm text-white tracking-[0.15em] font-light">
              {formatIndex(selectedIndex)}
            </span>
            <div className="w-28 md:w-40 lg:w-48 h-px bg-white/30 relative">
              <div
                className="absolute top-0 left-0 h-full bg-white"
                style={{
                  width: `${progress}%`,
                  transition: `width ${PROGRESS_INTERVAL}ms linear`,
                }}
              />
            </div>
            <span className="text-sm text-white/50 tracking-[0.15em] font-light">
              {formatIndex(RELEASES.length - 1)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
