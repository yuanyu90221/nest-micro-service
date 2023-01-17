import { Body, Controller, Logger, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { IGrpcService as AppControllerController } from './grpc.interface';
import { microserviceOption } from './grpc.options';

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger(AppController.name);

  @Client(microserviceOption)
  private client: ClientGrpc;
  private grpcService: AppControllerController;
  onModuleInit() {
    this.grpcService =
      this.client.getService<AppControllerController>('AppController');
  }

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    this.logger.log('Adding ' + data.toString());
    return this.grpcService.accumulate({ data });
  }
}
