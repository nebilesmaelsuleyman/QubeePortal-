import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema()
export class Subject extends Document {
  @Prop({ required: true }) name: string;
  @Prop({ type: Types.ObjectId, ref: 'Classroom', required: true })
  classroomId: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: 'Teacher', required: true })
  teacherId: Types.ObjectId;
}
export const SubjectSchema = SchemaFactory.createForClass(Subject);
