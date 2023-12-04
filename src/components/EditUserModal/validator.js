import { z } from "zod";

export const EditUserSchema = z
    .object({
        name: z.string().min(3),
        email: z.string().min(6).email("Deve ser um email"),
        password: z.string().min(8),
        phone: z.string()
    });
