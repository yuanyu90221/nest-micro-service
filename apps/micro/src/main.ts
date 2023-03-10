import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { MicroModule } from './micro.module';
import { join } from 'path';
const logger = new Logger('Main');
async function bootstrap() {
  // const app = await NestFactory.create(MicroModule);
  // app.connectMicroservice({
  //   transport: Transport.GRPC,
  //   options: {
  //     package: 'app',
  //     protoPath: join(__dirname, 'proto/app.proto'),
  //   },
  // });
  // app.startAllMicroservices().then(() => {
  //   logger.log('Microservice is listening...');
  // });
  const app = await NestFactory.createMicroservice(MicroModule, {
    transport: Transport.GRPC,
    options: {
      package: 'app',
      protoPath: join(__dirname, 'proto/app.proto'),
      url: `0.0.0.0:50051`
    },
  })
  await app.listen();
}
bootstrap();
