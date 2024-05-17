import {
  IsInt,
  IsString,
  MaxLength,
  IsPositive,
} from 'class-validator';

export class CreateApartmentDto {
  @IsInt()
  @IsPositive()
  rooms: number;

  @IsInt()
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
