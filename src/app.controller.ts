import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { ApiTags } from '@nestjs/swagger';
import { Public } from './decorator/public-auth.decorator';
@Public()
@ApiTags('app')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}
  @Get()
  getHello(): string {
    return 'Welcome to App';
  }
}
