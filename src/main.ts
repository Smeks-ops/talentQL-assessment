import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: true });
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
    }),
  );

  app.setGlobalPrefix('api/v1');
  const config = new DocumentBuilder()
    .setTitle('TalentQL-assessment API server')
    .setDescription('TalentQL-assessment API server documentation')
    .setVersion('1.0')
    .addTag('GET howOld')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);
  const port: number = parseInt(`${process.env.PORT}`) || 3000;
  await app.listen(port);
}
bootstrap();
