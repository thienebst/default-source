import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  code: number;
  message: string;
  result: T;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const defaultResponse = {
      message: 'Yêu cầu được thực hiện thành công',
    };
    return next.handle().pipe(
      map(({ message, ...data }) => ({
        code: context.switchToHttp().getResponse().statusCode,
        message: message || defaultResponse.message,
        result: data,
      })),
    );
  }
}
