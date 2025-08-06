import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true }) name: string;
  @Prop({ required: true, unique: true }) email: string;
  @Prop({ required: true, select: false }) password: string;
  @Prop({ type: Types.ObjectId, ref: 'Role', required: true })
  roleId: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: 'School', default: null })
  schoolId: Types.ObjectId | null;
  @Prop({ default: false }) isApproved: boolean;
}
export const UserSchema = SchemaFactory.createForClass(User);
