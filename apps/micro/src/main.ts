import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { MicroModule } from './micro.module';
import { ConfigService } from '@nestjs/config';
const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.create(MicroModule);
  const configService = await app.get(ConfigService);
  const micro = await NestFactory.createMicroservice(MicroModule, {
    transport: Transport.REDIS,
    options: {
      host: configService.get<string>('REDIS_HOST'),
      port: configService.get<number>('REDIS_PORT'),
      password: configService.get<string>('REDIS_PASSWORD'),
    },
  });
  micro.listen().then(() => {
    logger.log('Microservice is listening...');
  });
}
bootstrap();
