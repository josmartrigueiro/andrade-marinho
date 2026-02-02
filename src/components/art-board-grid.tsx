"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

interface ArtBoardGridProps {
  images?: GalleryImage[];
  className?: string;
}

const defaultImages: GalleryImage[] = [
  {
    src: "/privilege/gourmet-lounge.jpg",
    alt: "Gourmet Lounge",
    label: "ESPAÇO GOURMET",
  },
  {
    src: "/privilege/ocean-lounge-terrace.jpg",
    alt: "Ocean Lounge Terrace",
    label: "TERRAÇO LOUNGE",
  },
  {
    src: "/privilege/resort-pool-deck.jpg",
    alt: "Resort Pool Deck",
    label: "DECK DA PISCINA",
  },
  {
    src: "/privilege/rooftop-social-club.jpg",
    alt: "Rooftop Social Club",
    label: "ROOFTOP SOCIAL",
  },
];

const defaultWidths = [
  "calc(8.3333333333% - 20px)",
  "calc(16.6666666667% - 20px)",
  "calc(33.3333333333% - 20px)",
  "calc(41.6666666667% - 20px)",
];

const collapsedWidth = "calc(8.3333333333% - 20px)";
const expandedWidth = "calc(75% - 20px)";

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
    x: -60,
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

export function ArtBoardGrid({
  images = defaultImages,
  className,
}: ArtBoardGridProps) {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  return (
    <motion.div
      className={cn(
        "grid h-auto grid-cols-2 gap-4 lg:flex lg:h-150 lg:items-stretch",
        className,
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {images.map((image, index) => (
        <motion.div
          key={image.src}
          className="relative h-62.5 cursor-pointer overflow-hidden lg:h-auto"
          variants={itemVariants}
          animate={
            isDesktop
              ? {
                  width:
                    activeImage === null
                      ? defaultWidths[index]
                      : activeImage === index
                        ? expandedWidth
                        : collapsedWidth,
                }
              : undefined
          }
          transition={{
            width: {
              duration: 1,
              ease: [0.25, 0.1, 0.25, 1],
            },
          }}
          onMouseEnter={() => setActiveImage(index)}
          onMouseLeave={() => setActiveImage(null)}
        >
          <motion.div
            className="absolute inset-0"
            initial={false}
            animate={{
              scale: activeImage === index ? 1.05 : 1,
            }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              quality={100}
              className="object-cover"
              sizes="100vw"
              priority
            />
          </motion.div>

          <AnimatePresence>
            {activeImage === index && (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-black/20 shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-linear-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-linear-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50"
                    aria-label={`Ver ${image.alt}`}
                  >
                    <motion.span
                      initial={{ rotate: 0, opacity: 0 }}
                      animate={{ rotate: 1080, opacity: 1 }}
                      exit={{ rotate: 0, opacity: 0 }}
                      transition={{
                        duration: 1,
                      }}
                      className="relative z-10"
                    >
                      <ArrowUpRight className="h-6 w-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                    </motion.span>
                  </motion.button>
                </div>
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: {
                      delay: 0,
                    },
                  }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-4 right-4 text-base font-normal uppercase tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                >
                  {image.label}
                </motion.span>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}
