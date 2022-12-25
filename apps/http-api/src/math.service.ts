import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class MathService {
  private client: ClientProxy;
  constructor(private readonly configService: ConfigService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: this.configService.get<string>('MICRO_SERVICE_HOST'),
        port: this.configService.get<number>('MICRO_SERVICE_PORT'),
      },
    });
  }
  public accumulate(data: number[]) {
    return this.client.send<number, number[]>('add', data);
  }
}
