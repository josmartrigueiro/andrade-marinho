"use client";

import { CaretLeft, CaretRight, MouseSimple } from "@phosphor-icons/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const easeOutCubic = [0.215, 0.61, 0.355, 1] as const;
const HERO_BASE_DELAY = 2.3;
const AUTOPLAY_DELAY = 8000;
const PROGRESS_INTERVAL = 50;
const FADE_DURATION_MS = 1200;
const PROGRESS_BAR_TRANSITION_MS = 100;

const HERO_SLIDES = [
  {
    image: "/privilege/street-frontage.jpg",
    alt: "Fachada do empreendimento Andrade Marinho.",
    projectName: "Privilege Ponta Negra",
  },
  {
    image: "/privilege/front-walkway.jpg",
    alt: "Entrada e passeio do empreendimento.",
    projectName: "Residencial Mar Azul",
  },
  {
    image: "/privilege/rooftop-social-club.jpg",
    alt: "Área de convivência no topo do edifício.",
    projectName: "Vista Parque",
  },
  {
    image: "/privilege/garden-courtyard.jpg",
    alt: "Jardim e área comum do empreendimento.",
    projectName: "Jardins do Alto",
  },
  {
    image: "/privilege/infinity-pool-view.jpg",
    alt: "Piscina e vista do empreendimento.",
    projectName: "Terraço Nobre",
  },
];

const formatIndex = (index: number) => String(index + 1).padStart(2, "0");

const slideCount = HERO_SLIDES.length;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateIsMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  useEffect(() => {
    // No autoplay / progress animation on mobile
    if (isMobile) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      setProgress(0);
      return;
    }

    startProgress();
    autoplayRef.current = setInterval(() => {
      setSelectedIndex((i) => (i + 1) % slideCount);
      startProgress();
    }, AUTOPLAY_DELAY);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [startProgress, isMobile]);

  const scrollPrev = useCallback(() => {
    // No progress animation reset on mobile
    if (isMobile) {
      setSelectedIndex((i) => (i - 1 + slideCount) % slideCount);
      return;
    }

    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setSelectedIndex((i) => (i + 1) % slideCount);
        startProgress();
      }, AUTOPLAY_DELAY);
    }
    setSelectedIndex((i) => (i - 1 + slideCount) % slideCount);
    startProgress();
  }, [startProgress, isMobile]);

  const scrollNext = useCallback(() => {
    if (isMobile) {
      setSelectedIndex((i) => (i + 1) % slideCount);
      return;
    }

    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setSelectedIndex((i) => (i + 1) % slideCount);
        startProgress();
      }, AUTOPLAY_DELAY);
    }
    setSelectedIndex((i) => (i + 1) % slideCount);
    startProgress();
  }, [startProgress, isMobile]);

  const scrollTo = useCallback(
    (index: number) => {
      if (isMobile) {
        setSelectedIndex(index);
        return;
      }

      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => {
          setSelectedIndex((i) => (i + 1) % slideCount);
          startProgress();
        }, AUTOPLAY_DELAY);
      }
      setSelectedIndex(index);
      startProgress();
    },
    [startProgress, isMobile],
  );

  const currentSlide = HERO_SLIDES[selectedIndex];

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-background"
      ref={heroRef}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0 hidden lg:block"
        aria-hidden
      >
        <div
          className="absolute right-6 md:right-8 lg:right-[max(1.5rem,calc((100vw-1440px)/2+1.5rem))] top-0 bottom-0 w-px bg-linear-to-b from-hero-accent/30 via-hero-accent/20 to-hero-accent/12"
          aria-hidden
        />

        <motion.div
          className="absolute right-[max(1.5rem,calc((100vw-1440px)/2))] bottom-96 flex flex-col items-center gap-2 text-hero-accent/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4, ease: easeOutCubic }}
          aria-hidden
        >
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] -rotate-90 origin-right -translate-x-2">
            <MouseSimple className="size-3.5 shrink-0" weight="regular" />
            Role para conhecer o projeto
          </span>
        </motion.div>
      </div>

      <div className="md:px-6 relative mx-auto grid w-full max-w-6xl lg:max-w-[1440px] grid-cols-1 lg:grid-cols-[1fr_1.15fr]">
        <div className="relative z-10 flex flex-col justify-center pt-24 md:pt-(--header-height) pb-16">
          <div className="max-w-2xl px-4 md:px-0">
            <h1 className="mt-3 md:mt-4 text-hero-accent text-3xl font-medium uppercase tracking-tight leading-tight sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              <TextEffect
                per="word"
                delay={HERO_BASE_DELAY + 0.35}
                as="span"
                preset="elegant"
                speedReveal={0.7}
                speedSegment={0.3}
                segmentTransition={{ duration: 0.45, ease: easeOutCubic }}
                className="block sm:whitespace-nowrap"
              >
                Desenhando espaços
              </TextEffect>
              <TextEffect
                per="word"
                delay={HERO_BASE_DELAY + 0.5}
                as="span"
                preset="elegant"
                speedReveal={0.7}
                speedSegment={0.3}
                segmentTransition={{ duration: 0.45, ease: easeOutCubic }}
                className="block mt-1 sm:whitespace-nowrap"
              >
                que conectam
              </TextEffect>
              <TextEffect
                per="word"
                delay={HERO_BASE_DELAY + 0.65}
                as="span"
                preset="elegant"
                speedReveal={0.7}
                speedSegment={0.3}
                segmentTransition={{ duration: 0.45, ease: easeOutCubic }}
                className="block mt-1 sm:whitespace-nowrap"
              >
                vidas.
              </TextEffect>
            </h1>

            <motion.p
              className="mt-4 md:mt-7 text-hero-accent/80 text-sm sm:text-base leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                ease: easeOutCubic,
                delay: HERO_BASE_DELAY + 0.8,
              }}
            >
              Projetos com autenticidade, funcionalidade e elegância, pensados
              em cada detalhe para a vida real.
            </motion.p>

            <motion.div
              className="mt-8 md:mt-10 flex flex-wrap items-center"
              initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.65,
                ease: easeOutCubic,
                delay: HERO_BASE_DELAY + 1,
              }}
            >
              <Button
                variant="primary"
                className="w-72"
                render={(buttonProps) => (
                  <a
                    {...(buttonProps as React.ComponentProps<"a">)}
                    href="#about"
                  />
                )}
              >
                Conheça a Andrade Marinho
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="relative z-0 flex items-center justify-center lg:justify-end lg:items-stretch lg:min-h-screen lg:overflow-visible px-0 lg:px-0 lg:pr-8!">
          <motion.div
            className="relative w-full aspect-3/4 lg:aspect-auto lg:w-full lg:max-w-[min(85vh*0.65,44vw)] lg:max-h-[85vh] lg:min-h-0 lg:flex lg:items-center lg:justify-end lg:pr-6 xl:pr-10"
            initial={
              prefersReducedMotion
                ? {}
                : { opacity: 0, scale: 0.96, filter: "blur(12px)" }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, filter: "blur(0px)" }
            }
            transition={{
              duration: prefersReducedMotion ? 0.6 : 0.9,
              ease: easeOutCubic,
              delay: HERO_BASE_DELAY + 0.3,
            }}
            style={
              prefersReducedMotion || isMobile
                ? undefined
                : { scale: cardScale }
            }
          >
            <div className="absolute inset-0 lg:relative lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[min(85vh*0.65,44vw)] lg:max-w-[540px] lg:aspect-3/4 rounded-none lg:rounded-none">
              <div
                className="absolute inset-0 rounded-none lg:rounded-none bg-muted/60 lg:bg-muted/50"
                aria-hidden
              />

              <div className="absolute inset-0 lg:top-5 lg:left-5 lg:right-5 lg:bottom-5 overflow-hidden rounded-none lg:rounded-none lg:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] bg-background">
                <div className="absolute inset-0">
                  {HERO_SLIDES.map((slide, index) => (
                    <motion.div
                      key={slide.image}
                      className="absolute inset-0"
                      initial={false}
                      animate={{
                        opacity: index === selectedIndex ? 1 : 0,
                      }}
                      transition={{
                        duration: prefersReducedMotion
                          ? 0
                          : FADE_DURATION_MS / 1000,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      aria-hidden={index !== selectedIndex}
                    >
                      <motion.div
                        className="absolute inset-0 h-[120%] -top-[10%]"
                        style={
                          prefersReducedMotion
                            ? undefined
                            : { y: imageParallaxY }
                        }
                      >
                        <Image
                          src={slide.image}
                          alt={index === selectedIndex ? slide.alt : ""}
                          fill
                          priority={index === 0}
                          quality={90}
                          className="object-cover object-center saturate-[0.96] contrast-[1.02]"
                          sizes="(max-width: 1023px) 100vw, 44vw"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                <div
                  className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-primary/75 to-transparent pointer-events-none z-1"
                  aria-hidden
                />

                <div className="absolute bottom-5 left-5 z-10 flex items-center gap-1 text-white">
                  <button
                    type="button"
                    onClick={scrollPrev}
                    className="p-2 hover:bg-white/10 transition-colors duration-200 rounded-sm"
                    aria-label="Projeto anterior"
                  >
                    <CaretLeft className="size-5" weight="thin" />
                  </button>
                  <button
                    type="button"
                    onClick={scrollNext}
                    className="p-2 hover:bg-white/10 transition-colors duration-200 rounded-sm"
                    aria-label="Próximo projeto"
                  >
                    <CaretRight className="size-5" weight="thin" />
                  </button>
                </div>

                <div className="absolute bottom-5 right-5 z-10 flex flex-col items-end gap-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    {formatIndex(selectedIndex)} /{" "}
                    {formatIndex(HERO_SLIDES.length - 1)}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    {currentSlide.projectName}
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    {HERO_SLIDES.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => scrollTo(index)}
                        className={`rounded-full transition-all duration-1000 ${
                          index === selectedIndex
                            ? "w-4 h-1 bg-white"
                            : "w-1.5 h-1 bg-white/40 hover:bg-white/70"
                        }`}
                        aria-label={`Ir para ${HERO_SLIDES[index].projectName}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
