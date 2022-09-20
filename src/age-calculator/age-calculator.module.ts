import { Module } from '@nestjs/common';
import { AgeCalculatorService } from './age-calculator.service';
import { AgeCalculatorController } from './age-calculator.controller';

@Module({
  controllers: [AgeCalculatorController],
  providers: [AgeCalculatorService],
})
export class AgeCalculatorModule {}
