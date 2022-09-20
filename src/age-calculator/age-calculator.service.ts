import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAgeCalculatorDto } from './dto/create-age-calculator.dto';

@Injectable()
export class AgeCalculatorService {
  async calculateAge(createAgeCalculatorDto: CreateAgeCalculatorDto) {
    const timestamp = Date.parse(`${createAgeCalculatorDto.dateOfBirth}`);

    if (isNaN(timestamp) !== false) {
      throw new BadRequestException('Date of birth is invalid');
    }

    const today = new Date();
    const dob = new Date(createAgeCalculatorDto.dateOfBirth);
    let age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  }
}
