import { ApiProperty } from '@nestjs/swagger';
import { ApiError } from './api-error';

export class ApiException<E = any, T = any> {
  @ApiProperty({
    description: 'Http status code'
  })
  statusCode: number;

  @ApiProperty({
    description: 'Error code. Each code describe an specific case to developer'
  })
  code: number;

  @ApiProperty({
    description: 'Error message'
  })
  message: string;

  @ApiProperty({
    description: 'Error timestamp'
  })
  timestamp: string;

  @ApiProperty({
    description: 'Request URL path'
  })
  path: string;

  @ApiProperty({
    description: 'Errors description'
  })
  errors?: E;

  /** This is used only for development porpouses */
  original?: any;

  @ApiProperty({
    description: 'Some data to use in specific cases'
  })
  data?: T;

  constructor(payload: ApiError, message?: string, errors?: E, data?: T) {
    this.statusCode = payload.httpStatus;
    this.code = payload.code;
    this.message = message;
    this.errors = errors;
    this.data = data;
  }
}