import { z } from "zod";

const LETTERS_REGEX = /^[a-zA-ZÀ-ÿ\s]+$/;

export const imovelLeadSchema = z.object({
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

export type ImovelLeadInput = z.infer<typeof imovelLeadSchema>;
