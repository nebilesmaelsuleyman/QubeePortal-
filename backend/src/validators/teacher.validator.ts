import { z } from 'zod';
export const TeacherSchema = z.object({
  userId: z.string(),
  schoolId: z.string(),
  subjectSpecialization: z.string(),
});
