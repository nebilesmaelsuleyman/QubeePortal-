import { z } from 'zod';
export const SubjectSchema = z.object({
  name: z.string(),
  classroomId: z.string(),
  teacherId: z.string(),
});

export type Tsubject = z.infer<typeof SubjectSchema>;
