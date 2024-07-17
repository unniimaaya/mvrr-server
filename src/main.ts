import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transform } from 'class-transformer';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true}));
  app.use('/uploads',express.static('uploads'))

  await app.listen(3000);
}
bootstrap();
