import { z } from 'zod';
export const GradeSchema = z.object({
  studentId: z.string(),
  subjectId: z.string(),
  term: z.string(),
  score: z.number(),
});
