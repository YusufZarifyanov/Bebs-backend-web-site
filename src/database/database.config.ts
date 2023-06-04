import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

dotenv.config();

const configService = new ConfigService();

export function getConfig() {
  return {
    type: 'postgres',
    host: configService.get('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    username: configService.get('DATABASE_USERNAME'),
    password: configService.get('DATABASE_PASSWORD') as string,
    database: configService.get('DATABASE_NAME'),
    synchronize: configService.get('DATABASE_SYNCHRONIZE'),
    logging: configService.get('DATABASE_LOGGING'),
    entities: [`${__dirname}/../entities/*.entity{.ts,.js}`],
    migrationsTableName: 'migration',
    migrations: ['dist/database/migrations/*.js'],
  } as DataSourceOptions;
}
