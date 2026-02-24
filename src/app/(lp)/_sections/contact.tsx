"use client";
import { ArrowRight, ChatCenteredText } from "@phosphor-icons/react";
import { motion, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

const logoVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 3,
        ease: [0.25, 0.1, 0.25, 1],
      },
      opacity: {
        duration: 0.5,
      },
    },
  },
};

const drawVariants: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1],
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
};

function AnimatedLogo() {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[560px]">
      {/* Blob 1 - primary-light (topo direita) */}
      <motion.div
        className="absolute top-[2%] right-[5%] w-[48%] h-[38%] rounded-[40%_60%_55%_45%/50%_40%_60%_50%] bg-primary-light/30"
        initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        animate={{ rotate: [0, 45, -10, 20, -5, 0] }}
        transition={{
          opacity: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
          scale: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
          rotate: {
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      />

      {/* Blob 2 - primary principal (centro) */}
      <motion.div
        className="absolute top-[20%] left-[18%] w-[65%] h-[58%] rounded-[50%_40%_55%_45%/45%_55%_40%_60%] bg-primary/80"
        initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        animate={{ rotate: [0, -95, 8, -35, 5, 0] }}
        transition={{
          opacity: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 },
          scale: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 },
          rotate: {
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      />

      {/* Blob 3 - border/muted (inferior esquerda) */}
      <motion.div
        className="absolute bottom-[12%] left-[-5%] w-[42%] h-[42%] rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-muted-foreground/30"
        initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        animate={{ rotate: [0, 20, -8, 12, -18, 0] }}
        transition={{
          opacity: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.25 },
          scale: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.25 },
          rotate: {
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      />

      {/* Blob 4 - primary-light variante (direita) */}
      <motion.div
        className="absolute top-[30%] right-[-2%] w-[38%] h-[42%] rounded-[55%_45%_50%_50%/45%_55%_45%_55%] bg-primary-light/40"
        initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        animate={{ rotate: [0, -18, 10, -6, 14, 0] }}
        transition={{
          opacity: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 },
          scale: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 },
          rotate: {
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      />

      {/* Linhas decorativas - hachura diagonal (inferior esquerda) */}
      <motion.svg
        className="absolute bottom-[18%] left-[0%] w-[28%] h-auto"
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        aria-hidden="true"
      >
        {/* Linhas paralelas diagonais */}
        <motion.path
          d="M5 95 L55 45 M10 100 L65 45 M18 100 L72 46 M26 100 L78 48 M34 100 L84 48 M42 100 L90 48 M50 100 L96 48 M58 100 L102 48 M66 100 L108 48"
          className="stroke-foreground"
          strokeWidth="0.8"
          fill="none"
          variants={drawVariants}
          transition={{ delay: 0.6, duration: 1.8 }}
        />
        {/* Linhas cruzadas */}
        <motion.path
          d="M15 45 L55 95 M22 45 L62 95"
          className="stroke-foreground"
          strokeWidth="0.6"
          fill="none"
          variants={drawVariants}
          transition={{ delay: 0.9, duration: 1.5 }}
        />
      </motion.svg>

      {/* Linhas decorativas - curvas orgânicas (direita) */}
      <motion.svg
        className="absolute top-[25%] right-[2%] w-[18%] h-auto"
        viewBox="0 0 60 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        aria-hidden="true"
      >
        <motion.path
          d="M30 5 C15 30, 10 60, 25 90 C35 110, 20 125, 30 138"
          className="stroke-foreground"
          strokeWidth="0.8"
          fill="none"
          variants={drawVariants}
          transition={{ delay: 0.5, duration: 2 }}
        />
        <motion.path
          d="M38 8 C22 35, 18 62, 32 92 C42 112, 28 128, 38 138"
          className="stroke-foreground"
          strokeWidth="0.7"
          fill="none"
          variants={drawVariants}
          transition={{ delay: 0.65, duration: 2 }}
        />
        <motion.path
          d="M46 12 C30 38, 26 65, 40 95 C48 113, 36 130, 45 138"
          className="stroke-foreground"
          strokeWidth="0.6"
          fill="none"
          variants={drawVariants}
          transition={{ delay: 0.8, duration: 2 }}
        />
      </motion.svg>

      <motion.svg
        width="226"
        height="298"
        viewBox="0 0 113 149"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-32 h-auto md:w-44 lg:w-52"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        role="img"
        aria-label="Logo Andrade Marinho"
      >
        <motion.path
          d="M109.446 106.977C109.627 107.203 110.442 107.339 110.85 107.928C111.997 109.605 111.514 111.342 109.914 112.46L59.7585 148.079C58.5204 148.773 56.9805 149.453 55.6669 148.592C38.259 136.372 20.5039 124.529 3.69994 111.523C2.91485 110.119 3.44327 108.412 3.29229 106.871C2.19015 95.995 0.272713 83.2611 0.0160489 72.5212C-0.255713 60.8749 3.00543 47.0987 3.62445 35.1957C3.71504 33.3075 2.5374 32.0386 4.21327 30.0145L32.386 13.3079L55.063 0.36253L14.1628 33.0507L26.2713 42.552L55.063 26.0418L30.4383 45.9205L47.3329 55.9807L54.6856 52.0684L48.888 57.1287C50.8356 57.3402 55.1385 60.7238 56.6785 60.7238C58.2185 60.7238 62.5818 56.4188 64.4539 56.0412L59.0187 51.3434C60.77 51.6606 64.3935 55.1197 65.9033 54.8025L81.8316 44.274L59.7434 26.0267L85.9835 41.4493L99.9189 32.3558L59.0489 0C61.5098 1.08759 63.85 2.55282 66.1751 3.91231C80.9861 12.5979 95.6311 21.5555 110.442 30.2109C111.635 31.6006 111.922 32.9752 110.774 34.4857C110.412 34.9691 109.748 35.1503 109.551 35.4373C108.585 36.9479 113.069 66.7509 112.994 71.056L109.446 106.977ZM19.9453 46.6456L7.64049 37.6125L8.36519 52.7935C9.33146 53.3222 18.0731 46.9779 19.9453 46.6456ZM104.312 52.431L105.037 38.685C103.859 39.7424 94.695 45.4825 94.544 46.1018C94.4233 46.6003 94.846 46.7211 95.148 46.9477C97.8354 48.9416 101.595 50.3766 104.327 52.431H104.312ZM39.8594 60.7541L25.139 49.9386L13.7853 58.7752L26.2713 68.3672L39.8594 60.7692V60.7541ZM99.9642 58.5789L89.3504 49.9537L74.6299 60.2103L86.3459 67.189L99.9793 58.5789H99.9642ZM42.2751 62.2646L30.4534 71.4185C33.9712 73.8051 37.5193 76.2522 41.2031 78.3972C42.5016 79.1525 46.7894 81.947 47.9217 81.66C48.3746 81.5391 54.7309 77.7628 54.8969 77.3851C55.1989 76.7658 55.5763 72.204 55.365 71.494C55.0026 70.2856 44.1019 63.5335 42.2902 62.2646H42.2751ZM60.5738 78.0347L65.9335 80.8141L82.2242 69.9684L72.8031 62.3552L71.716 62.325C69.9798 64.0168 61.072 68.9563 60.3171 70.4971C59.6981 71.7357 60.9512 76.2673 60.5738 78.0196V78.0347ZM19.9453 72.3248L9.45224 64.7419C9.99577 69.2131 9.7391 73.639 9.45224 78.1253L19.9453 72.3399V72.3248ZM103.225 77.3851V65.8144C102.214 66.7056 94.6648 71.2674 94.544 71.781C94.4233 72.2946 94.846 72.4003 95.148 72.6269C97.4881 74.3641 100.795 75.6782 103.24 77.3851H103.225ZM74.6299 86.4333C78.6912 88.3064 82.2543 91.2972 86.3761 92.9588L99.9793 84.0919L88.988 75.6329L75.0225 85.5572L74.645 86.4333H74.6299ZM24.5501 75.9954L14.1628 84.4243L25.758 93.8652C26.6488 94.273 27.6754 93.4422 28.5209 93.0193C32.3407 91.0556 36.0699 88.3517 39.8594 86.2671C37.9571 85.0738 25.6221 75.7235 24.5501 76.0105V75.9954ZM54.7007 78.4727L48.9182 82.6267L54.3534 85.3457L54.7158 78.4727H54.7007ZM60.8606 83.8956C61.072 84.1373 64.0614 82.098 64.1218 81.8866C64.2124 81.4938 61.2683 78.8504 61.0418 78.8353C60.3926 78.805 60.7398 79.6509 60.7549 79.8322C60.8002 81.1766 60.9512 82.5361 60.8606 83.8956ZM53.1909 95.1793L42.26 87.9136L30.4383 97.0977C37.5947 102.007 45.038 106.569 52.8889 110.3C52.0132 105.285 52.7983 100.209 53.1758 95.1793H53.1909ZM61.9477 108.85L82.2091 95.6476C80.5332 94.7413 73.0446 87.8381 71.9576 87.9438C68.4398 90.255 64.8012 92.551 61.6306 95.3606C61.8873 99.862 62.5516 104.379 61.9477 108.85ZM8.00284 104.877L19.9453 97.8228L9.27107 90.0586C8.53127 89.968 8.80303 90.0888 8.74264 90.5873C8.12363 95.2851 8.24441 100.149 8.01794 104.877H8.00284ZM104.675 104.152L104.327 92.3848L103.769 91.1462C101.338 93.3969 97.3523 95.0736 95.0876 97.2941C94.7403 97.6415 94.3931 97.7624 94.544 98.3666L104.675 104.152ZM60.8606 135.254L99.9642 109.756L89.1088 101.418L61.5551 120.949L61.1928 122.037L60.8455 135.254H60.8606ZM55.063 137.067L53.7948 121.523L25.8486 102.052L24.6709 101.811L13.7853 109.968C26.2713 120.708 40.0104 130.269 55.063 137.082V137.067Z"
          stroke="white"
          strokeWidth="0.5"
          fill="transparent"
          variants={logoVariants}
        />
        <motion.path
          d="M109.446 106.977C109.627 107.203 110.442 107.339 110.85 107.928C111.997 109.605 111.514 111.342 109.914 112.46L59.7585 148.079C58.5204 148.773 56.9805 149.453 55.6669 148.592C38.259 136.372 20.5039 124.529 3.69994 111.523C2.91485 110.119 3.44327 108.412 3.29229 106.871C2.19015 95.995 0.272713 83.2611 0.0160489 72.5212C-0.255713 60.8749 3.00543 47.0987 3.62445 35.1957C3.71504 33.3075 2.5374 32.0386 4.21327 30.0145L32.386 13.3079L55.063 0.36253L14.1628 33.0507L26.2713 42.552L55.063 26.0418L30.4383 45.9205L47.3329 55.9807L54.6856 52.0684L48.888 57.1287C50.8356 57.3402 55.1385 60.7238 56.6785 60.7238C58.2185 60.7238 62.5818 56.4188 64.4539 56.0412L59.0187 51.3434C60.77 51.6606 64.3935 55.1197 65.9033 54.8025L81.8316 44.274L59.7434 26.0267L85.9835 41.4493L99.9189 32.3558L59.0489 0C61.5098 1.08759 63.85 2.55282 66.1751 3.91231C80.9861 12.5979 95.6311 21.5555 110.442 30.2109C111.635 31.6006 111.922 32.9752 110.774 34.4857C110.412 34.9691 109.748 35.1503 109.551 35.4373C108.585 36.9479 113.069 66.7509 112.994 71.056L109.446 106.977ZM19.9453 46.6456L7.64049 37.6125L8.36519 52.7935C9.33146 53.3222 18.0731 46.9779 19.9453 46.6456ZM104.312 52.431L105.037 38.685C103.859 39.7424 94.695 45.4825 94.544 46.1018C94.4233 46.6003 94.846 46.7211 95.148 46.9477C97.8354 48.9416 101.595 50.3766 104.327 52.431H104.312ZM39.8594 60.7541L25.139 49.9386L13.7853 58.7752L26.2713 68.3672L39.8594 60.7692V60.7541ZM99.9642 58.5789L89.3504 49.9537L74.6299 60.2103L86.3459 67.189L99.9793 58.5789H99.9642ZM42.2751 62.2646L30.4534 71.4185C33.9712 73.8051 37.5193 76.2522 41.2031 78.3972C42.5016 79.1525 46.7894 81.947 47.9217 81.66C48.3746 81.5391 54.7309 77.7628 54.8969 77.3851C55.1989 76.7658 55.5763 72.204 55.365 71.494C55.0026 70.2856 44.1019 63.5335 42.2902 62.2646H42.2751ZM60.5738 78.0347L65.9335 80.8141L82.2242 69.9684L72.8031 62.3552L71.716 62.325C69.9798 64.0168 61.072 68.9563 60.3171 70.4971C59.6981 71.7357 60.9512 76.2673 60.5738 78.0196V78.0347ZM19.9453 72.3248L9.45224 64.7419C9.99577 69.2131 9.7391 73.639 9.45224 78.1253L19.9453 72.3399V72.3248ZM103.225 77.3851V65.8144C102.214 66.7056 94.6648 71.2674 94.544 71.781C94.4233 72.2946 94.846 72.4003 95.148 72.6269C97.4881 74.3641 100.795 75.6782 103.24 77.3851H103.225ZM74.6299 86.4333C78.6912 88.3064 82.2543 91.2972 86.3761 92.9588L99.9793 84.0919L88.988 75.6329L75.0225 85.5572L74.645 86.4333H74.6299ZM24.5501 75.9954L14.1628 84.4243L25.758 93.8652C26.6488 94.273 27.6754 93.4422 28.5209 93.0193C32.3407 91.0556 36.0699 88.3517 39.8594 86.2671C37.9571 85.0738 25.6221 75.7235 24.5501 76.0105V75.9954ZM54.7007 78.4727L48.9182 82.6267L54.3534 85.3457L54.7158 78.4727H54.7007ZM60.8606 83.8956C61.072 84.1373 64.0614 82.098 64.1218 81.8866C64.2124 81.4938 61.2683 78.8504 61.0418 78.8353C60.3926 78.805 60.7398 79.6509 60.7549 79.8322C60.8002 81.1766 60.9512 82.5361 60.8606 83.8956ZM53.1909 95.1793L42.26 87.9136L30.4383 97.0977C37.5947 102.007 45.038 106.569 52.8889 110.3C52.0132 105.285 52.7983 100.209 53.1758 95.1793H53.1909ZM61.9477 108.85L82.2091 95.6476C80.5332 94.7413 73.0446 87.8381 71.9576 87.9438C68.4398 90.255 64.8012 92.551 61.6306 95.3606C61.8873 99.862 62.5516 104.379 61.9477 108.85ZM8.00284 104.877L19.9453 97.8228L9.27107 90.0586C8.53127 89.968 8.80303 90.0888 8.74264 90.5873C8.12363 95.2851 8.24441 100.149 8.01794 104.877H8.00284ZM104.675 104.152L104.327 92.3848L103.769 91.1462C101.338 93.3969 97.3523 95.0736 95.0876 97.2941C94.7403 97.6415 94.3931 97.7624 94.544 98.3666L104.675 104.152ZM60.8606 135.254L99.9642 109.756L89.1088 101.418L61.5551 120.949L61.1928 122.037L60.8455 135.254H60.8606ZM55.063 137.067L53.7948 121.523L25.8486 102.052L24.6709 101.811L13.7853 109.968C26.2713 120.708 40.0104 130.269 55.063 137.082V137.067Z"
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        />
      </motion.svg>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contato" className="pb-2 md:py-18 lg:py-12">
      <div className="container px-4 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <AnimatedLogo />

          <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={itemVariants}
              className="flex size-13 shrink-0 items-center justify-center rounded-full border border-gray-300/40 bg-white shadow-lg shadow-gray-200 mb-6"
            >
              <ChatCenteredText
                className="size-5.5 text-gray-700"
                weight="light"
              />
            </motion.div>

            <motion.span
              className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600"
              variants={itemVariants}
            >
              Entre em contato
            </motion.span>

            <h2 className="mt-4 text-3xl font-medium uppercase text-gray-900 md:text-4xl lg:text-5xl leading-tight">
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
                Excelência que
              </TextEffect>
              <TextEffect
                per="char"
                as="span"
                useViewport
                viewport={{ once: true, amount: 1 }}
                delay={0.55}
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
                começa na decisão.
              </TextEffect>
            </h2>

            <motion.p
              className="mt-6 text-sm leading-relaxed text-gray-600 md:text-base"
              variants={itemVariants}
            >
              Escolher um empreendimento é uma decisão importante. Nossa equipe
              está pronta para apresentar informações detalhadas, esclarecer
              dúvidas e orientar você com transparência e segurança em cada
              etapa do processo.
            </motion.p>

            <motion.div className="mt-10" variants={itemVariants}>
              <Button
                variant="primary"
                className="w-68"
                render={(buttonProps) => (
                  <a
                    {...(buttonProps as React.ComponentProps<"a">)}
                    href="#fale-conosco"
                  />
                )}
              >
                Fale com um consultor
                <ArrowRight className="h-4 w-4 align-middle mb-1 group-hover/btn:-rotate-45 transition-all" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
