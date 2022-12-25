import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { MathService } from './math.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [MathService],
})
export class AppModule {}
