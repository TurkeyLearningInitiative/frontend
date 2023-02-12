import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2),
});

export type LoginSchema = z.infer<typeof loginSchema>;
