import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class ConfigAppService {
    constructor(private configService: ConfigService) { }
    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: 'postgres',

            host: this.configService.get('db.POSTGRES_HOST'),
            port: parseInt(this.configService.get('db.POSTGRES_PORT')),
            username: this.configService.get('db.POSTGRES_USER'),
            password: this.configService.get('db.POSTGRES_PASSWORD'),
            database: this.configService.get('db.POSTGRES_DATABASE'),

            entities: ['**/*.entity{.ts,.js}'],

            migrationsTableName: 'migration',

            migrations: ['src/migration/*.ts'],
            synchronize: true,
            logging: true,
        };


    }
}
