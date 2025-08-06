import { z } from 'zod';
export const ParentSchema = z.object({
  userId: z.string(),
  studentIds: z.array(z.string()),
});
