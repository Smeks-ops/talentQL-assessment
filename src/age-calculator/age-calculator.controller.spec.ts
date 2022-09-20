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

  describe('calculateAge', () => {
    it('should calculate age from dob timestamp', async () => {
      const result = 22;

      const payload = {
        dateOfBirth: new Date('2000-09-20T18:44:26.368Z'),
      };

      jest
        .spyOn(service, 'calculateAge')
        .mockImplementation(async () => result);

      jest.enableAutomock();

      expect(await controller.calculateAge(payload)).toEqual(result);
    });
  });
});
