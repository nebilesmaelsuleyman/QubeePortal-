import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
export type RoleDocument = Role & Document;
@Schema({ timestamps: true })
export class Role {
  @Prop({ required: true }) name: string;
  @Prop({ type: Types.ObjectId, ref: 'School', default: null })
  schoolId: Types.ObjectId | null;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
