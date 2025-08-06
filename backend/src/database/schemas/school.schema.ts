import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema({ timestamps: true })
export class School extends Document {
  @Prop({ required: true }) name: string;
  @Prop() address: string;
  @Prop({ type: Types.ObjectId, ref: 'SubscriptionPlan', required: true })
  plan: Types.ObjectId;
  @Prop({ default: true }) isActive: boolean;
}
export const SchoolSchema = SchemaFactory.createForClass(School);
