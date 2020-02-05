import { HttpStatusCodes } from './http-status-codes.constant';

export const API_ERRORS = {
  INTERNAL_SERVER_ERROR: {
    httpStatus: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    code: 1000,
    message: 'There was an internal server error',
    description: 'Unexpected error ocurred with the server'
  },
  DATABASE_ERROR: {
    httpStatus: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    code: 1001,
    message: 'There was an internal server error',
    description: 'Unexpected error ocurred with the server with sequelize (connection, query, etc.)'
  },
  DATABASE_VALIDATION_ERROR: {
    message: 'There was an error validating data',
    description: 'Database data validation error occurred',
    status: HttpStatusCodes.BAD_REQUEST,
    code: 1003
  },

  // No authentication
  TOKEN_INVALID: {
    httpStatus: HttpStatusCodes.UNAUTHORIZED,
    code: 1100,
    message: 'Invalid authorization token',
    description: 'Client sent invalid token'
  },
  TOKEN_NOT_PROVIDED: {
    httpStatus: HttpStatusCodes.UNAUTHORIZED,
    code: 1101,
    message: 'Authorization token not provided',
    description: 'Client did not provide token'
  },
  TOKEN_EXPIRED: {
    httpStatus: HttpStatusCodes.UNAUTHORIZED,
    code: 1102,
    message: 'Authorization token expired',
    description: 'Client sent expired token'
  },

  // Validation
  BAD_REQUEST: {
    httpStatus: HttpStatusCodes.BAD_REQUEST,
    code: 1200,
    message: 'The request contains invalid syntax',
    description: 'Client sent a bad request (Invalid fields values, missing fields, etc.)'
  },

  // Company Errors
  SPACESHIP_NOT_FOUND: {
    httpStatus: HttpStatusCodes.NOT_FOUND,
    code: 2000,
    message: 'Spaceship not found',
    description: 'The Spaceship was not fund'
  },
  SPACESHIP_EXISTS: {
    httpStatus: HttpStatusCodes.CONFLICT,
    code: 2001,
    message: 'There is already an spaceship with the same name',
    description: 'The name is already in use by other spaceship'
  }
};