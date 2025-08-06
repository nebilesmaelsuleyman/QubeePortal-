import { z } from 'zod';
export const ClassroomSchema = z.object({
  name: z.string(),
  schoolId: z.string(),
  gradeLevel: z.string(),
  teacherId: z.string(),
});
