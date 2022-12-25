import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { MicroModule } from './micro.module';
import { join } from 'path';
const logger = new Logger('Main');
async function bootstrap() {
  console.log(__dirname);
  const micro = await NestFactory.createMicroservice(MicroModule, {
    transport: Transport.GRPC,
    options: {
      package: 'app',
      protoPath: join(__dirname, '../../grpc-proto/app.proto'),
    },
  });
  micro.listen().then(() => {
    logger.log('Microservice is listening...');
  });
}
bootstrap();
