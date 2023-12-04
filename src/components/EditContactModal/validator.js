import { z } from "zod";

export const EditContactSchema = z
    .object({
        name: z.string().min(3),
        email: z.string().min(6).email("Deve ser um email"),
        phone: z.string()
    });
