import { z } from 'zod';
export const NotificationSchema = z.object({
  recipientId: z.string(),
  message: z.string(),
  sentAt: z.date().optional(),
  type: z.enum(['system', 'reminder', 'alert']),
});
