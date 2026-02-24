"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Envelope, ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .regex(LETTERS_REGEX, "Nome deve conter apenas letras"),
  phone: z
    .string()
    .min(1, "Telefone é obrigatório")
    .refine((val) => val.replace(/\D/g, "").length >= 10, "Telefone inválido"),
  email: z.string().min(1, "E-mail é obrigatório").email("E-mail inválido"),
  message: z
    .string()
    .min(1, "Mensagem é obrigatória")
    .min(10, "Mensagem deve ter pelo menos 10 caracteres")
    .max(500, "Mensagem deve ter no máximo 500 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ─── Phone Mask ──────────────────────────────────────────────────────

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

// ─── Component ───────────────────────────────────────────────────────

export function ContactUs() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const messageValue = watch("message", "");

  const onSubmit = async (_data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const phoneRegister = register("phone");

  return (
    <section id="fale-conosco" className="py-14 md:pb-10 lg:pb-24">
      <div className="container px-4 lg:px-12">
        <motion.div
          className="mx-auto max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            className="flex size-13 shrink-0 items-center justify-center rounded-full border border-gray-300/40 bg-white shadow-lg shadow-gray-200 mb-5"
          >
            <Envelope className="size-5.5 text-gray-700" weight="light" />
          </motion.div>

          <motion.span
            className="text-sm font-medium uppercase tracking-[0.2em] text-gray-600"
            variants={itemVariants}
          >
            Encontre seu imóvel
          </motion.span>

          <h2 className="mt-3 text-3xl font-medium uppercase text-gray-900 md:text-4xl lg:text-5xl leading-tight">
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
              Encontre o imóvel ideal
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
                    transition: { staggerChildren: 0.04, delayChildren: 0.35 },
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
              para o seu momento.
            </TextEffect>
          </h2>

          <motion.p
            className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base max-w-xl"
            variants={itemVariants}
          >
            Nossa equipe especializada irá compreender seu perfil e apresentar
            opções alinhadas ao seu estilo de vida e objetivos.
          </motion.p>

          <motion.form
            className="mt-10"
            variants={itemVariants}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex flex-col gap-6">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                <Input
                  label="Nome"
                  type="text"
                  autoComplete="given-name"
                  error={errors.name?.message}
                  {...register("name")}
                />
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
              </div>

              <Input
                label="E-mail"
                type="email"
                autoComplete="email"
                error={errors.email?.message}
                {...register("email")}
              />

              <Textarea
                label="Mensagem"
                rows={3}
                maxLength={500}
                currentLength={messageValue?.length ?? 0}
                error={errors.message?.message}
                {...register("message")}
              />
            </div>

            <div className="mt-10">
              <Button
                variant="primary"
                className="w-full md:w-auto px-7"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Enviando..." : "Quero ser atendido"}
                {!isSubmitting && (
                  <ArrowRight className="h-4 w-4 align-middle mb-1 group-hover/btn:-rotate-45 transition-all" />
                )}
              </Button>
            </div>

            {/* Success Message */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  className="mt-6 flex items-center gap-3 text-sm text-primary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <CheckCircle className="size-5 shrink-0" weight="fill" />
                  <span>
                    Recebemos seu interesse! Um consultor entrará em contato em
                    breve.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
