import * as dotenv from 'dotenv';
import { env } from 'process';
import { DataSource } from 'typeorm';

dotenv.config();

export const dataSource = new DataSource({
  type: 'postgres',
  host: env.POSTGRES_HOST,
  port: parseInt(env.POSTGRES_PORT),
  username: env.POSTGRES_USER,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB,
  entities: ['src/**/entity/*.entity.{ts,js}'],
  migrations: ['src/migrations/*.{ts,js}'],
  migrationsTableName: 'typeorm_migrations',
  synchronize: env.NODE_ENV === 'dev',
});
