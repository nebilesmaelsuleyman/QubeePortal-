import { z } from 'zod';

export const ClassScheduleSchema = z.object({
  schoolId: z.string(),
  subjectId: z.string(),
  teacherId: z.string(),
  classroomId: z.string(),
  dayOfWeek: z.enum([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',   
    'Saturday',
    'Sunday',
  ]),
  startTime: z.string(),
  endTime: z.string(),
});
