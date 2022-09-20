import { Controller, Post, Body } from '@nestjs/common';
import { AgeCalculatorService } from './age-calculator.service';
import { CreateAgeCalculatorDto } from './dto/create-age-calculator.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('age-calculator')
@Controller('age-calculator')
export class AgeCalculatorController {
  constructor(private readonly ageCalculatorService: AgeCalculatorService) {}

  @ApiOkResponse({
    description: 'Calculates age from date of birth',
  })
  @Post('calculateAge')
  calculateAge(@Body() createAgeCalculatorDto: CreateAgeCalculatorDto) {
    return this.ageCalculatorService.calculateAge(createAgeCalculatorDto);
  }
}
