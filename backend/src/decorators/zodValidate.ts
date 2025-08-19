import { applyDecorators, UsePipes } from '@nestjs/common';
import { ZodValidationPIpe } from '../pipes/zod-validation';
import { ZodSchema } from 'zod';
export function zodValidate(schema: ZodSchema) {
  return applyDecorators(UsePipes(new ZodValidationPIpe(schema)));
}
