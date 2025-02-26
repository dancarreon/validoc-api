import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enables DTO validation
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  // enables CORS
  app.enableCors();
  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Capitoil API')
    .setDescription('Documentación de Capitoil API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
