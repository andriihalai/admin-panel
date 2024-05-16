import { IsInt, IsNumber, IsString, MaxLength, Min, IsPositive } from "class-validator";

export class CreateApartmentDto {
  @IsInt()
  @Min(1, {message: 'rooms must be greater than 0'})
  rooms: number

  @IsNumber()
  @IsPositive()
  price: number

  @IsString()
  @MaxLength(99, {message: 'name must be less than 100 characters long'})
  name: string

  @IsString()
  @MaxLength(999, {message: 'Description cannot be longer than 999 characters'})
  description: string
}
