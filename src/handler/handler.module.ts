import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { QueryFailedExceptionFilter } from './filter/typeOrm.filter';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: QueryFailedExceptionFilter,
    },
    // {
    // 	provide: APP_FILTER,
    // 	useClass: HttpExceptionFilter
    // },
  ],
})
export class HandlerModule {}
