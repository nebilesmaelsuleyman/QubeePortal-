import { z } from 'zod';
export const StudentSchema = z.object({
  userId: z.string(),
  schoolId: z.string(),
  gradeLevel: z.string(),
  section: z.string(),
});
