import { Student } from 'src/database/schemas/student.schema';
import { TypeOf, z } from 'zod';
export const StudentSchema = z.object({
  userId: z.string(),
  schoolId: z.string(),
  gradeLevel: z.string(),
  section: z.string(),
});

export type Tstudent = z.infer<typeof StudentSchema>;
