import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema({ timestamps: true })
export class Notification extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  recipientId: Types.ObjectId;
  @Prop({ required: true }) message: string;
  @Prop({ default: Date.now }) sentAt: Date;
  @Prop({ enum: ['system', 'reminder', 'alert'], required: true }) type: string;
}
export const NotificationSchema = SchemaFactory.createForClass(Notification);
