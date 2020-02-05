import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiException } from '../common/types/api-exception.type';

@Catch(ApiException)
export class ApiExceptionFilter<T> implements ExceptionFilter {
  catch(exception: ApiException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.statusCode;

    response.status(status)
      .json({
        statusCode: status,
        code: exception.code,
        message: exception.message,
        timestamp: new Date().toISOString(),
        path: request.url,
        errors: exception.errors,
      });
  }
}
