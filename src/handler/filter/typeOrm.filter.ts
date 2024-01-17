import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { EntityNotFoundError, QueryFailedError } from 'typeorm';

@Catch(QueryFailedError, EntityNotFoundError)
export class QueryFailedExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const { name, driverError } = exception;
    let massage = name;

    if (driverError.code === '23505') {
      massage = driverError.detail;
    }
    const errorResponse = {
      code: driverError.code,
      timestamp: new Date().toISOString(),
      massage,
    };

    response.status(HttpStatus.BAD_REQUEST).json(errorResponse);
  }
}
