import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { QueryFailedExceptionFilter } from './filter/typeOrm.filter';
import { TransformInterceptor } from './interceptor/transform-response.interceptor';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: QueryFailedExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class HandlerModule {}
