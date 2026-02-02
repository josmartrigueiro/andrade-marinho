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

const NAV_LINK_CLASS =
  "relative transition-opacity duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollState, setScrollState] = useState<
    "top" | "scrolling-down" | "scrolling-up"
  >("top");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);

  const columns = Array.from({ length: 6 }, (_, i) => i);

  useEffect(() => {
    const threshold = 10;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= threshold) {
        setScrollState("top");
      } else if (currentY > lastScrollY.current) {
        setScrollState("scrolling-down");
      } else {
        setScrollState("scrolling-up");
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const isTop = scrollState === "top";
  const showMainNav = isTop || scrollState === "scrolling-up";
  const showBgPrimary = !isTop;

  const useDark = !isTop || isMenuOpen;
  const textColor = useDark ? "text-foreground" : "text-white";
  const barColor = useDark ? "bg-foreground" : "bg-white";
  const borderColor = useDark ? "border-border" : "border-white/30";
  const logoSrc = useDark ? "/logo-blue.png" : "/logo-white.png";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full" role="banner">
        <div
          className={`absolute inset-0 bg-background transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showBgPrimary ? "translate-y-0 shadow-sm" : "-translate-y-full"
          }`}
          aria-hidden="true"
        />

        <div
          className={`relative overflow-hidden transition-[max-height,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            showMainNav ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={isTop ? "backdrop-blur-xs" : ""}>
            <nav
              className={`relative flex items-center justify-between mx-6 py-4 border-b ${borderColor} h-20 transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`}
              aria-label="Navegacao principal"
            >
              {/* Desktop left links */}
              <div
                className={`hidden lg:flex items-center gap-4 lg:gap-8 ${textColor} text-xs lg:text-[13px] tracking-widest transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`}
              >
                <a href="#encontre-seu" className={NAV_LINK_CLASS}>
                  ENCONTRE O SEU
                </a>
                <a href="#clientes" className={NAV_LINK_CLASS}>
                  CLIENTES
                </a>
                <a href="#corretores" className={NAV_LINK_CLASS}>
                  CORRETORES
                </a>
              </div>

              {/* Mobile logo */}
              <a
                href="#home"
                className="lg:hidden"
                aria-label="Andrade Marinho Empreendimentos - Inicio"
              >
                <Image
                  src={logoSrc}
                  alt="Andrade Marinho Empreendimentos"
                  width={140}
                  height={50}
                  className="h-8 w-auto"
                  priority
                />
              </a>

              <a
                href="#home"
                className="hidden lg:block absolute left-1/2 -translate-x-1/2"
                aria-label="Andrade Marinho Empreendimentos - Inicio"
              >
                <Image
                  src={logoSrc}
                  alt="Andrade Marinho Empreendimentos"
                  width={140}
                  height={50}
                  className="h-8 lg:h-12 w-auto"
                  priority
                />
              </a>

              <div
                className={`hidden lg:flex items-center gap-4 tracking-widest lg:gap-6 ${textColor} text-xs lg:text-sm transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`}
              >
                <a href="#contato" className={NAV_LINK_CLASS}>
                  CONTATO
                </a>
                <button
                  type="button"
                  ref={buttonRef}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex flex-col justify-center items-center w-5 h-5 transition-opacity duration-200 group"
                  aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                  aria-expanded={isMenuOpen}
                  aria-controls="menu-overlay"
                >
                  <span
                    className={`absolute w-5 h-0.5 ${barColor} rounded-md transition-all duration-500 ${
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
                    className={`absolute w-5 h-[1.5px] ${barColor} rounded-md transition-all duration-500 ${
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
                    className={`absolute w-5 h-0.5 ${barColor} rounded-md transition-all duration-500 ${
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

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-5 h-5 transition-opacity duration-200 group relative"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMenuOpen}
                aria-controls="menu-overlay"
              >
                <span
                  className={`absolute w-5 h-0.5 ${barColor} rounded-md transition-all duration-500 ${
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
                  className={`absolute w-5 h-[1.5px] ${barColor} rounded-md transition-all duration-500 ${
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
                  className={`absolute w-5 h-0.5 ${barColor} rounded-md transition-all duration-500 ${
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
        </div>

        {/* Sub nav — PRIVILEGE + section links */}
        <nav
          className="relative hidden lg:flex items-center justify-between mx-6 py-3"
          aria-label="Navegacao do empreendimento"
        >
          <span
            className={`${textColor} text-xs lg:text-sm tracking-wider font-medium transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`}
          >
            PRIVILEGE
          </span>

          <div
            className={`flex items-center gap-6 lg:gap-8 ${textColor} text-xs lg:text-sm tracking-wider transition-colors duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]`}
          >
            <a href="#ficha-tecnica" className={NAV_LINK_CLASS}>
              FICHA TECNICA
            </a>
            <a href="#galeria" className={NAV_LINK_CLASS}>
              GALERIA
            </a>
            <a href="#plantas" className={NAV_LINK_CLASS}>
              PLANTAS
            </a>
            <a href="#projeto" className={NAV_LINK_CLASS}>
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
            aria-label="Menu de navegacao"
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
                      className="h-full w-full bg-background origin-top"
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
                ease: [0.55, 0.085, 0.68, 0.53],
                delay: prefersReducedMotion ? 0 : reverseIndex * 0.025,
              }}
            >
              <TextRoll
                center
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase leading-[0.8] tracking-[-0.03em] transition-opacity duration-300 ${
                  isActive
                    ? "text-foreground opacity-100"
                    : "text-foreground opacity-50"
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
