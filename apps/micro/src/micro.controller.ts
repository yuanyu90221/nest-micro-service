import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MathService } from './math.service';

@Controller()
export class MicroController {
  private logger = new Logger(MicroController.name);
  constructor(private readonly mathService: MathService) {}
  @MessagePattern('add')
  async accumulate(data: number[]) {
    this.logger.log('Adding ' + data.toString());
    return this.mathService.accumulate(data);
  }
}
