"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Handshake,
  ArrowRight,
  CheckCircle,
  Buildings,
  ChartLineUp,
  Users,
} from "@phosphor-icons/react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TextEffect } from "@/components/ui/text-effect";

// ─── Animation Variants ─────────────────────────────────────────────

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

// ─── Schema ──────────────────────────────────────────────────────────

const LETTERS_REGEX = /^[a-zA-ZÀ-ÿ\s]+$/;
const CRECI_REGEX = /^CRECI [0-9]{1,5}-[A-Z]\/[A-Z]{2}$/;

const brokerSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .regex(LETTERS_REGEX, "Nome deve conter apenas letras"),
  cpf: z
    .string()
    .min(1, "CPF é obrigatório")
    .refine((val) => val.replace(/\D/g, "").length === 11, "CPF inválido"),
  creci: z
    .string()
    .min(1, "CRECI é obrigatório")
    .regex(CRECI_REGEX, "Formato inválido. Ex: CRECI 12345-F/SP"),
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .refine((val) => val.replace(/\D/g, "").length >= 10, "Telefone inválido"),
  email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
});

type BrokerFormData = z.infer<typeof brokerSchema>;

// ─── Masks ───────────────────────────────────────────────────────────

function formatCPF(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9)
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

// ─── Benefits ────────────────────────────────────────────────────────

const benefits = [
  {
    icon: Buildings,
    title: "Empreendimentos exclusivos",
    description:
      "Acesso antecipado ao portfólio de lançamentos e unidades disponíveis.",
  },
  {
    icon: ChartLineUp,
    title: "Comissões competitivas",
    description:
      "Condições diferenciadas e pagamento ágil para corretores parceiros.",
  },
  {
    icon: Users,
    title: "Suporte dedicado",
    description: "Equipe comercial à disposição para apoiar suas negociações.",
  },
];

// ─── Component ───────────────────────────────────────────────────────

export default function PortalDoCorretor() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BrokerFormData>({
    resolver: zodResolver(brokerSchema),
    mode: "onBlur",
  });

  const onSubmit = async (_data: BrokerFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const cpfRegister = register("cpf");
  const phoneRegister = register("phone");

  return (
    <section className="min-h-[calc(100dvh-var(--header-height))] flex items-center py-14 md:py-20">
      <div className="container px-4 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <motion.div
            className="flex flex-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              variants={itemVariants}
              className="flex size-13 shrink-0 items-center justify-center rounded-full border border-gray-300/40 bg-white shadow-lg shadow-gray-200 mb-5"
            >
              <Handshake className="size-5.5 text-gray-700" weight="light" />
            </motion.div>

            <motion.span
              className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600"
              variants={itemVariants}
            >
              Portal do corretor
            </motion.span>

            <h1 className="mt-3 text-3xl font-medium uppercase text-gray-900 md:text-4xl lg:text-5xl leading-tight">
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
                      transition: {
                        staggerChildren: 0.04,
                        delayChildren: 0.1,
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
                Seja um corretor
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
                parceiro.
              </TextEffect>
            </h1>

            <motion.p
              className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base max-w-md"
              variants={itemVariants}
            >
              Junte-se à rede de corretores Andrade Marinho e tenha acesso a
              empreendimentos de alto padrão, ferramentas de venda e suporte
              comercial exclusivo.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-6"
              variants={containerVariants}
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start gap-4"
                  variants={itemVariants}
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white">
                    <benefit.icon
                      className="size-4.5 text-gray-700"
                      weight="light"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {benefit.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="pt-2"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600 mb-8">
                Cadastro do corretor
              </h2>
            </motion.div>

            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <motion.div variants={itemVariants}>
                <Input
                  label="Nome completo"
                  type="text"
                  autoComplete="name"
                  error={errors.name?.message}
                  {...register("name")}
                />
              </motion.div>

              <motion.div
                className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
                variants={itemVariants}
              >
                <Input
                  label="CPF"
                  type="text"
                  inputMode="numeric"
                  placeholder="000.000.000-00"
                  error={errors.cpf?.message}
                  {...cpfRegister}
                  onChange={(e) => {
                    const formatted = formatCPF(e.target.value);
                    setValue("cpf", formatted, { shouldValidate: true });
                  }}
                />
                <Input
                  label="CRECI"
                  type="text"
                  placeholder="CRECI 12345-F/SP"
                  error={errors.creci?.message}
                  {...register("creci")}
                />
              </motion.div>

              <motion.div
                className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
                variants={itemVariants}
              >
                <Input
                  label="Telefone"
                  type="tel"
                  autoComplete="tel"
                  error={errors.phone?.message}
                  {...phoneRegister}
                  onChange={(e) => {
                    const formatted = formatPhone(e.target.value);
                    setValue("phone", formatted, { shouldValidate: true });
                  }}
                />
                <Input
                  label="E-mail"
                  type="email"
                  autoComplete="email"
                  error={errors.email?.message}
                  {...register("email")}
                />
              </motion.div>

              <motion.div className="mt-4" variants={itemVariants}>
                <Button
                  variant="primary"
                  className="w-full md:w-56"
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting ? "Enviando..." : "Enviar cadastro"}
                  {!isSubmitting && (
                    <ArrowRight className="h-4 w-4 align-middle mb-1 group-hover/btn:-rotate-45 transition-all" />
                  )}
                </Button>
              </motion.div>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    className="flex items-center gap-3 text-sm text-primary"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    <CheckCircle className="size-5 shrink-0" weight="fill" />
                    <span>
                      Cadastro recebido! Nossa equipe entrará em contato em
                      breve.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
