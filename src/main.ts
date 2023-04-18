import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { Logger } from '@nestjs/common';
import { BASE_PATH } from 'openai/dist/base';

dotenv.config({
  path: path.resolve(
    process.env.NODE_ENV === 'production'
      ? '.env.production'
      : process.env.NODE_ENV === 'stage'
      ? '.env.stage'
      : '.env.development',
  ),
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4040);
}
bootstrap();
