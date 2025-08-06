import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema()
export class Parent extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;
  @Prop({ type: [Types.ObjectId], ref: 'Student', default: [] })
  studentIds: Types.ObjectId[];
}
export const ParentSchema = SchemaFactory.createForClass(Parent);
