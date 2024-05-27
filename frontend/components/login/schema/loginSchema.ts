import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email('E-mail inválido').min(1, { message: "Email é obrigatório" }),
  password: z.string().min(1, { message: "Senha é obrigatório" }),
});
