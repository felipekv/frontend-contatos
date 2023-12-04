import { z } from "zod";

export const RegisterSchema = z
    .object({
        name: z.string().min(3),
        email: z.string().min(6).email("Deve ser um email"),
        password: z.string().min(8),
        confirm: z.string().min(8),
        phone: z.string()
    })
    .refine(({ password, confirm }) => password === confirm, {
        message: "As senhas precisam corresponderem",
        path: ["confirm"],
    });
