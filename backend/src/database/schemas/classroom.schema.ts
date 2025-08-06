import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema()
export class Classroom extends Document {
  @Prop({ required: true }) name: string;
  @Prop({ type: Types.ObjectId, ref: 'School', required: true })
  schoolId: Types.ObjectId;
  @Prop() gradeLevel: string;
  @Prop({ type: Types.ObjectId, ref: 'Teacher', required: true })
  teacherId: Types.ObjectId;
}
export const ClassroomSchema = SchemaFactory.createForClass(Classroom);
