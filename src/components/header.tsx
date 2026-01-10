"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TextRoll } from "./ui/text-roll";

const ANIMATION_CONFIG = {
  column: {
    stagger: 0.08,
    duration: 1.4,
    ease: [0.23, 1, 0.32, 1],
  },
  content: {
    baseDelay: 0.25,
    stagger: 0.07,
    spring: {
      stiffness: 150,
      damping: 40,
      mass: 1.1,
    },
    slideDistance: 20,
  },
} as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const columns = Array.from({ length: 6 }, (_, i) => i);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusableElements = menu.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    firstElement?.focus();

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [isMenuOpen]);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="backdrop-blur-xs">
          <nav className="relative flex items-center justify-between mx-6 py-4 border-b border-white/30 h-20">
            {/* Desktop layout (lg+) */}
            <div className="hidden lg:flex items-center gap-4 lg:gap-8 text-white text-xs lg:text-[13px] tracking-widest [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
              <a
                href="#encontre-seu"
                className="relative transition-opacity duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100"
              >
                ENCONTRE O SEU
              </a>
              <a
                href="#clientes"
                className="relative transition-opacity duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100"
              >
                CLIENTES
              </a>
              <a
                href="#corretores"
                className="relative transition-opacity duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100"
              >
                CORRETORES
              </a>
            </div>

            <div className="lg:hidden">
              <Image
                src="/logo-white.png"
                alt="Andrade Marinho"
                width={140}
                height={50}
                className="h-8 w-auto"
                priority
              />
            </div>

            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
              <Image
                src="/logo-white.png"
                alt="Andrade Marinho"
                width={140}
                height={50}
                className="h-8 lg:h-12 w-auto"
                priority
              />
            </div>

            <div className="hidden lg:flex items-center gap-4 tracking-widest lg:gap-6 text-white text-xs lg:text-sm [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
              <a
                href="#contato"
                className="relative transition-opacity duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100"
              >
                CONTATO
              </a>
              <button
                type="button"
                ref={buttonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex flex-col justify-center items-center w-5 h-5 transition-opacity duration-200 group"
                aria-label="Menu"
                aria-expanded={isMenuOpen}
                aria-controls="menu-overlay"
              >
                <span
                  className={`absolute w-5 h-0.5 bg-white rounded-md transition-all duration-500 ${
                    isMenuOpen
                      ? "rotate-45 translate-y-0"
                      : "-translate-y-1.5 group-hover:translate-x-1.5"
                  }`}
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.165, 0.84, 0.44, 1)",
                  }}
                />
                <span
                  className={`absolute w-5 h-[1.5px] bg-white rounded-md transition-all duration-500 ${
                    isMenuOpen
                      ? "opacity-0 scale-0"
                      : "opacity-100 scale-100 translate-x-0.5"
                  }`}
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.165, 0.84, 0.44, 1)",
                  }}
                />
                <span
                  className={`absolute w-5 h-0.5 bg-white rounded-md transition-all duration-500 ${
                    isMenuOpen
                      ? "-rotate-45 translate-y-0"
                      : "translate-y-1.5 group-hover:translate-x-1.5"
                  }`}
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.165, 0.84, 0.44, 1)",
                  }}
                />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-5 h-5 transition-opacity duration-200 group relative"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
              aria-controls="menu-overlay"
            >
              <span
                className={`absolute w-5 h-0.5 bg-white rounded-md transition-all duration-500 ${
                  isMenuOpen
                    ? "rotate-45 translate-y-0"
                    : "-translate-y-1.5 group-hover:translate-x-1.5"
                }`}
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.165, 0.84, 0.44, 1)",
                }}
              />
              <span
                className={`absolute w-5 h-[1.5px] bg-white rounded-md transition-all duration-500 ${
                  isMenuOpen
                    ? "opacity-0 scale-0"
                    : "opacity-100 scale-100 translate-x-0.5"
                }`}
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.165, 0.84, 0.44, 1)",
                }}
              />
              <span
                className={`absolute w-5 h-0.5 bg-white rounded-md transition-all duration-500 ${
                  isMenuOpen
                    ? "-rotate-45 translate-y-0"
                    : "translate-y-1.5 group-hover:translate-x-1.5"
                }`}
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.165, 0.84, 0.44, 1)",
                }}
              />
            </button>
          </nav>
        </div>

        <nav className="hidden lg:flex items-center justify-between mx-6 py-3">
          <div className="text-white text-xs lg:text-sm tracking-wider [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            <span>PRIVILEGI</span>
          </div>

          <div className="flex items-center gap-6 lg:gap-8 text-white text-xs lg:text-sm tracking-wider [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            <a
              href="#ficha-tecnica"
              className="relative transition-opacity duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100"
            >
              FICHA TÉCNICA
            </a>
            <a
              href="#galeria"
              className="relative transition-opacity duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100"
            >
              GALERIA
            </a>
            <a
              href="#plantas"
              className="relative transition-opacity duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100"
            >
              PLANTAS
            </a>
            <a
              href="#projeto"
              className="relative transition-opacity duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100"
            >
              PROJETO
            </a>
          </div>
        </nav>
      </header>

      <AnimatePresence onExitComplete={() => {}}>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            id="menu-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: {
                opacity: 1,
                transition: {
                  duration: prefersReducedMotion ? 0 : 0.2,
                },
              },
              closed: {
                opacity: 0,
                transition: {
                  duration: prefersReducedMotion ? 0 : 0.2,
                  delay: prefersReducedMotion
                    ? 0
                    : (columns.length - 1) * ANIMATION_CONFIG.column.stagger +
                      0.4,
                },
              },
            }}
            onClick={handleOverlayClick}
            className="fixed inset-0 z-40 overflow-hidden bg-transparent"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
          >
            <div className="grid grid-cols-6 h-full w-full relative gap-0">
              {columns.map((colIndex) => {
                const totalColumns = columns.length;
                const openDelay = colIndex * ANIMATION_CONFIG.column.stagger;
                const closeDelay =
                  (totalColumns - 1 - colIndex) *
                  ANIMATION_CONFIG.column.stagger;

                return (
                  <div
                    key={colIndex}
                    className="h-full relative overflow-hidden -mr-[0.5px]"
                  >
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={{
                        open: {
                          scaleY: 1,
                          transition: prefersReducedMotion
                            ? { duration: 0 }
                            : {
                                duration: ANIMATION_CONFIG.column.duration,
                                ease: ANIMATION_CONFIG.column.ease,
                                delay: openDelay,
                              },
                        },
                        closed: {
                          scaleY: 0,
                          transition: prefersReducedMotion
                            ? { duration: 0 }
                            : {
                                duration: ANIMATION_CONFIG.column.duration,
                                ease: ANIMATION_CONFIG.column.ease,
                                delay: closeDelay,
                              },
                        },
                      }}
                      className="h-full w-full bg-[#2C445B] origin-top"
                      style={{
                        willChange: prefersReducedMotion ? "auto" : "transform",
                        transformOrigin: "top",
                      }}
                      onAnimationStart={(definition) => {
                        const el = document.querySelector(
                          `[data-col="${colIndex}"]`,
                        ) as HTMLElement;
                        if (el) {
                          if (definition === "closed") {
                            el.style.transformOrigin = "bottom";
                          } else {
                            el.style.transformOrigin = "top";
                          }
                        }
                      }}
                      data-col={colIndex}
                    />
                  </div>
                );
              })}
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <MenuItems onItemClick={handleClose} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const navigationItemsDesktop = [
  {
    name: "HOME",
    href: "#home",
  },
  {
    name: "PROJETO",
    href: "#projeto",
  },
  {
    name: "CONTATO",
    href: "#contato",
  },
];

const navigationItemsMobile = [
  {
    name: "HOME",
    href: "#home",
  },
  {
    name: "ENCONTRE O SEU",
    href: "#encontre-seu",
  },
  {
    name: "CLIENTES",
    href: "#clientes",
  },
  {
    name: "CORRETORES",
    href: "#corretores",
  },
  {
    name: "CONTATO",
    href: "#contato",
  },
  {
    name: "FICHA TECNICA",
    href: "#ficha-tecnica",
  },
  {
    name: "GALERIA",
    href: "#galeria",
  },
  {
    name: "PLANTAS",
    href: "#plantas",
  },
  {
    name: "PROJETO",
    href: "#projeto",
  },
];

const MenuItems = ({ onItemClick }: { onItemClick: () => void }) => {
  const [activeHash, setActiveHash] = useState("");

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const isLargeScreen =
    typeof window !== "undefined" && window.innerWidth >= 1024;

  const navigationItems = isLargeScreen
    ? navigationItemsDesktop
    : navigationItemsMobile;

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <ul className="flex min-h-full w-full flex-1 flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 rounded-2xl px-4 sm:px-7 py-3 pointer-events-auto overflow-y-auto max-h-screen">
      {navigationItems.map((item) => {
        const index = navigationItems.indexOf(item);
        const totalItems = navigationItems.length;
        const reverseIndex = totalItems - 1 - index;
        const isActive =
          activeHash === item.href ||
          (activeHash === "" && item.href === "#home");

        return (
          <motion.li
            className="relative flex cursor-pointer flex-col items-center overflow-visible"
            key={item.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              delay: prefersReducedMotion ? 0 : 0.4 + index * 0.08,
            }}
            style={{
              willChange: "transform, opacity",
            }}
          >
            <motion.a
              href={item.href}
              onClick={onItemClick}
              className="relative flex items-start motion-reduce:transform-none motion-reduce:transition-none"
              initial={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{
                duration: 0.15,
                ease: [0.55, 0.085, 0.68, 0.53], // ease-in-quad
                delay: prefersReducedMotion ? 0 : reverseIndex * 0.025,
              }}
            >
              <TextRoll
                center
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.8] tracking-[-0.03em] transition-opacity duration-300 ${
                  isActive ? "text-white opacity-100" : "text-white opacity-50"
                }`}
              >
                {item.name}
              </TextRoll>
            </motion.a>
          </motion.li>
        );
      })}
    </ul>
  );
};
