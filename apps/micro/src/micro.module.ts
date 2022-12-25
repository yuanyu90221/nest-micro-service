import { Module } from '@nestjs/common';
import { MicroController } from './micro.controller';
import { MathService } from './math.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [MicroController],
  providers: [MathService],
})
export class MicroModule {}
