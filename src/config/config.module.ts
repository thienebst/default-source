import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { ConfigAppService } from "./config.service";
import configuration from "./configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
        load: [configuration],
        ignoreEnvFile: true,
      })
  ],
  providers: [ConfigAppService],
  exports: [ConfigAppService]
})
export class ConfigAppModule {}