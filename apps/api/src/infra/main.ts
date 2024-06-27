import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/infra/app.module';
import { EnvService } from './env/env.service';
import { AllExceptionsFilter } from './common/filters/exception.filter';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const envService = app.get(EnvService);

  app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors();

  await app.listen(envService.get('PORT'));
  Logger.log(`Autospace API is running on: ${await app.getUrl()}`, 'MAIN');
}
bootstrap();
