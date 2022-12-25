import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod, MessagePattern } from '@nestjs/microservices';
import { MathService } from './math.service';
interface INumberArray {
  data: number[];
}
interface ISumOfNumberArray {
  sum: number;
}
@Controller()
export class MicroController {
  private logger = new Logger(MicroController.name);
  constructor(private readonly mathService: MathService) {}
  @GrpcMethod('AppController', 'Accumulate')
  accumulate(numberArray: INumberArray, metadata: any): ISumOfNumberArray {
    this.logger.log('Adding ' + numberArray.data.toString());
    return { sum: this.mathService.accumulate(numberArray.data) };
  }
}
