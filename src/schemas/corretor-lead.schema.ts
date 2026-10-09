import { z } from "zod";

const LETTERS_REGEX = /^[a-zA-ZÀ-ÿ\s]+$/;
const CRECI_REGEX = /^CRECI [0-9]{1,5}-[A-Z]\/[A-Z]{2}$/;

export const corretorLeadSchema = z.object({
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

export type CorretorLeadInput = z.infer<typeof corretorLeadSchema>;
