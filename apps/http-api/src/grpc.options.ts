import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
export const microserviceOption: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, 'proto/app.proto'),
    url: `127.0.0.1:50051`
  },
};
