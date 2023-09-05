import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

@Injectable()
export class ConfigAppService {
  constructor(private configService: ConfigService) {}
  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: this.configService.get('db.HOST'),
      port: parseInt(this.configService.get('db.PORT')),
      username: this.configService.get('db.USER'),
      password: this.configService.get('db.PASSWORD'),
      database: this.configService.get('db.DATABASE'),
      autoLoadEntities: true,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      migrationsTableName: 'migration',

      migrations: ['src/migration/*.ts'],
      synchronize: true,
      logging: true,
    };
  }
}
