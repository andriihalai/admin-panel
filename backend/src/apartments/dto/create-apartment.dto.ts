import {
  IsInt,
  IsNumber,
  IsString,
  MaxLength,
  IsPositive,
  IsOptional,
  IsUUID,
} from 'class-validator';

export class CreateApartmentDto {
  @IsInt()
  @IsPositive()
  rooms: number;

  @IsNumber()
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
