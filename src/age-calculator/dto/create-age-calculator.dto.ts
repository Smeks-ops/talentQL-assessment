import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CreateAgeCalculatorDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  dateOfBirth: Date;
}
