import { z } from 'zod';
export const SchoolSchema = z.object({
  name: z.string(),
  address: z.string().optional(),
  plan: z.string(),
  isActive: z.boolean().optional(),
});

export type Tschool = z.infer<typeof SchoolSchema>;
