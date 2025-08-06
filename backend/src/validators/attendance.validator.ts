import { z } from 'zod';

export const AttendanceSchema = z.object({
  studentId: z.string(),
  classScheduleId: z.string(),
  date: z.coerce.date(),
  status: z.enum(['present', 'absent', 'late']),
});
