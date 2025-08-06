import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
@Schema()
export class Student extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: 'School', required: true })
  schoolId: Types.ObjectId;
  @Prop() gradeLevel: string;
  @Prop() section: string;
}
export const StudentSchema = SchemaFactory.createForClass(Student);
