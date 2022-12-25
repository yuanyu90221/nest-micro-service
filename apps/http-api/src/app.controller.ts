import { Body, Controller, Logger, Post } from '@nestjs/common';
import { MathService } from './math.service';

@Controller()
export class AppController {
  private logger = new Logger(AppController.name);
  constructor(private readonly mathService: MathService) {}

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    this.logger.log('Adding ' + data.toString());
    return this.mathService.accumulate(data);
  }
}
