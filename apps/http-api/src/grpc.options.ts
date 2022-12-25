import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
export const microserviceOption: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, '../../grpc-proto/app.proto'),
  },
};
