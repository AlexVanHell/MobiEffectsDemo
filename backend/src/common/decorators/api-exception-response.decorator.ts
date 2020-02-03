import { applyDecorators } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ApiError } from '../types/api-error';
import { ApiException } from '../types/api-exception.type';

export function ApiExceptionResponse(...payloads: ApiError[]) {
  return applyDecorators(
    ...payloads.map(payload =>
      ApiResponse({
        status: payload.httpStatus,
        description: `[code: ${payload.code} | ${payload.description}]`,
        type: ApiException
      })
    )
  );
}