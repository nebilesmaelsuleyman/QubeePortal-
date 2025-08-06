import { z } from 'zod';
export const RoleSchema = z.object({
  name: z.string(),
  schoolId: z.string().nullable().optional(),
});
