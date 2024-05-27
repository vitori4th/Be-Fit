import { z } from "zod";

// Esquema para cadastro de usuário
export const createUserFormSchema = z.object({
    name: z.string()
        .nonempty("Nome é obrigatório")
        .regex(/^[A-Za-z]+$/i, "Somente letras são permitidas")
        .max(50, "Nome deve ter no máximo 50 caracteres"),
    lastname: z.string()
        .nonempty("Sobrenome é obrigatório")
        .regex(/^[A-Za-z]+$/i, "Somente letras são permitidas")
        .max(50, "Sobrenome deve ter no máximo 50 caracteres"),
    email: z.string().email("E-mail inválido"),
    dateBirth:  z.string(),
    cellphone: z.string()
        .regex(/^\d{11}$/, "Telefone deve ter 11 dígitos"),
    cpf: z.string()
        .regex(/^\d{11}$/, "CPF deve ter 11 dígitos"),
    password: z.string()
        .min(8, "Senha deve ter no mínimo 8 caracteres")
        .regex(/^(?=.*[A-Z]).*/, "Senha precisa ter letra maiúscula")
        .regex(/^(?=.*[0-9]).*/, "Senha precisa ter número")
        .regex(/^(?=.*[!@#$%^&*]).*/, "Senha precisa ter especial")
        .nonempty("Senha é obrigatória"),
    confirmPassword: z.string()
        .nonempty("Confirmação de senha é obrigatória")
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não coincidem",
        path: ['confirmPassword']
      });
    }
  });

// Esquema para edição de usuário
export const updateUserFormSchema = z.object({
    name: z.string()
        .nonempty("Nome é obrigatório")
        .regex(/^[A-Za-z]+$/i, "Somente letras são permitidas")
        .max(50, "Nome deve ter no máximo 50 caracteres"),
    lastname: z.string()
        .nonempty("Sobrenome é obrigatório")
        .regex(/^[A-Za-z]+$/i, "Somente letras são permitidas")
        .max(50, "Sobrenome deve ter no máximo 50 caracteres"),
    dateBirth: z.string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato de data inválido"),
    cellphone: z.string()
        .regex(/^\d{11}$/, "Telefone deve ter 11 dígitos")
});
