import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigAppModule } from "src/config/config.module";
import { ConfigAppService } from "src/config/config.service";
 
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigAppModule],
      useFactory: async (configService: ConfigAppService) => ({
        ...configService.getTypeOrmConfig()
      }),
      inject: [ConfigAppService],
    }),
  ],
  providers: [],
  exports: []
})
export class PostgresModule { }