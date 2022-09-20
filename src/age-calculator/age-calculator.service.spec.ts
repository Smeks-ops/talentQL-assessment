import { Test, TestingModule } from '@nestjs/testing';
import { AgeCalculatorService } from './age-calculator.service';

describe('AgeCalculatorService', () => {
  let service: AgeCalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgeCalculatorService],
    }).compile();

    service = module.get<AgeCalculatorService>(AgeCalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
