import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema()
export class ClassSchedule extends Document {
  @Prop({ type: Types.ObjectId, ref: 'School', required: true }) schoolId: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: 'Subject', required: true }) subjectId: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: 'Teacher', required: true }) teacherId: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: 'Classroom', required: true }) classroomId: Types.ObjectId;
  @Prop({ required: true }) dayOfWeek: string;
  @Prop({ required: true }) startTime: string;
  @Prop({ required: true }) endTime: string;
}
export const ClassScheduleSchema = SchemaFactory.createForClass(ClassSchedule);
