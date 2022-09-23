import { Test, TestingModule } from '@nestjs/testing';
import { AgeCalculatorController } from './age-calculator.controller';
import { AgeCalculatorService } from './age-calculator.service';

describe('AgeCalculatorController', () => {
  let controller: AgeCalculatorController;
  let service: AgeCalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgeCalculatorController],
      providers: [AgeCalculatorService],
    }).compile();

    controller = module.get<AgeCalculatorController>(AgeCalculatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
