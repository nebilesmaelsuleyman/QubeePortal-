import { z } from 'zod';

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  roleId: z.string(),
  schoolId: z.string().nullable().optional(),
  isApproved: z.boolean().optional(),
});

export type Tuser = z.infer<typeof UserSchema>;
