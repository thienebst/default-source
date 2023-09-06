import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigAppModule } from './config/config.module';
import { PostgresModule } from './database/postgres.module';
import { UserModule } from './core/user/user.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigAppModule, PostgresModule, AuthModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
