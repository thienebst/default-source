import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresModule } from "./database/postgres.module";
import { ConfigAppModule } from "./config/config.module";

@Module({
  imports: [
    ConfigAppModule,
    // PostgresModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
