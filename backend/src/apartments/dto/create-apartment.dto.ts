import { IsInt, IsNumber, IsString, MaxLength, Min, IsPositive } from "class-validator";
// import { Validate } from "class-validator";
// import { IsPositiveNum } from "../pipes/IsPositiveNum";

export class CreateApartmentDto {
  @IsInt()
  @Min(1, {message: 'rooms must be greater than 0'})
  rooms: number

  @IsNumber()
  // @Validate(IsPositiveNum, {message: 'Apartment price must be more than 0'})
  @IsPositive()
  price: number

  @IsString()
  @MaxLength(99, {message: 'name must be less than 100 characters long'})
  name: string

  @IsString()
  @MaxLength(999, {message: 'Description cannot be longer than 999 characters'})
  description: string
}
