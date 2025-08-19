import { z } from 'zod';

export const SubscriptionPlanSchema = z.object({
  name: z.string(),
  price: z.number(),
  maxStudents: z.number().int(),
  features: z.array(z.string()),
});

export type Tsubscription = z.infer<typeof SubscriptionPlanSchema>;
