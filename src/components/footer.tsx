"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
    filter: "blur(4px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const NAV_LINKS = [
  { label: "Inicio", href: "#home" },
  { label: "Sobre a Andrade", href: "#presentation" },
  { label: "Nossa entregas", href: "#projects" },
  { label: "Contato", href: "#contato" },
];

const CONTACT_INFO = {
  phone: {
    display: "(84) 98833-0213",
    href: "tel:+5584988330213",
  },
  phone2: {
    display: "(84) 3231-8338",
    href: "tel:+558432318338",
  },
  email: {
    display: "luciana@andrademarinho.com.br",
    href: "mailto:contato@andrademarinho.com.br",
  },
  instagram: {
    display: "@andrademarinhoconstrucoes",
    href: "https://instagram.com/andrademarinhoconstrucoes",
  },
};

const linkClassName =
  "relative w-fit text-sm text-foreground transition-opacity duration-200 hover:opacity-70 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-foreground after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out hover:after:origin-left hover:after:scale-x-100";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container px-4 lg:px-12 pt-16 md:pt-20 lg:pt-24 pb-8!">
        <motion.div
          className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex flex-col gap-6" variants={itemVariants}>
            <Image
              src="/logo-blue.png"
              alt="Andrade Marinho Empreendimentos"
              width={280}
              height={80}
              className="h-12 md:h-16 w-auto self-start"
            />

            <p className="text-sm text-muted-foreground">
              CNPJ: 04.058.268/0001-35
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-5" variants={itemVariants}>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Navegação
            </h3>

            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className={linkClassName}>
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div className="flex flex-col gap-5" variants={itemVariants}>
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contato
            </h3>

            <div className="flex flex-col gap-3">
              <a href={CONTACT_INFO.phone.href} className={linkClassName}>
                {CONTACT_INFO.phone.display}
              </a>
              <a href={CONTACT_INFO.phone2.href} className={linkClassName}>
                {CONTACT_INFO.phone2.display}
              </a>
              <a href={CONTACT_INFO.email.href} className={linkClassName}>
                {CONTACT_INFO.email.display}
              </a>
              <a
                href={CONTACT_INFO.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                {CONTACT_INFO.instagram.display}
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-16 border-t border-border pt-8 pb-4 flex flex-col items-center gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Andrade Marinho Empreendimentos
            LTDA. Todos os direitos reservados.
          </span>

          <span className="text-sm text-muted-foreground text-center">
            Desenhado e desenvolvido por{" "}
            <a href="https://" className="text-gray-800 underline">
              Josmar Trigueiro
            </a>{" "}
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
