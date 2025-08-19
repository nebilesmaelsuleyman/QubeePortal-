import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPIpe implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.safeParse(value);

      return parsedValue;
    } catch (error) {
      throw new BadRequestException('validation failed');
    }
  }
}
