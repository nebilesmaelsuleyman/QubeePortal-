import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class SubscriptionPlan extends Document {
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) price: number;
  @Prop({ required: true }) maxStudents: number;
  @Prop({ type: [String], default: [] }) features: string[];
}
export const SubscriptionPlanSchema =
  SchemaFactory.createForClass(SubscriptionPlan);
