import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Env } from './config/env.util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  });

  await app.listen(Env.getNumber('PORT'), '0.0.0.0');
}
bootstrap();
