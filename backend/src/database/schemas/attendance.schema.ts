import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema()
export class Attendance extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Student', required: true })
  studentId: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: 'ClassSchedule', required: true })
  classScheduleId: Types.ObjectId;
  @Prop({ required: true }) date: Date;
  @Prop({ enum: ['present', 'absent', 'late'], required: true }) status: string;
}
export const AttendanceSchema = SchemaFactory.createForClass(Attendance);
