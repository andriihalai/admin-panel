import {
  IsInt,
  IsString,
  MaxLength,
  IsPositive,
  IsNumber,
} from 'class-validator';

import { Type } from 'class-transformer';

export class CreateApartmentDto {
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  rooms: number;

  @IsNumber()
  @Type(() => Number)
  @IsPositive()
  price: number;

  @IsString()
  @MaxLength(98, { message: 'name must be less than 99 characters long' })
  name: string;

  @IsString()
  @MaxLength(998, {
    message: 'Description must be less than 999 characters',
  })
  description: string;
}
