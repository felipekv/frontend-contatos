import { z } from "zod";

export const LoginSchema = z.object({
    email: z
    .string()
    .min(1)
    .email("Deve ser um email"),
    password: z
    .string()
    .min(8),
});
