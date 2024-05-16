import { Type } from 'class-transformer';
import { IsOptional, IsEnum, Min, IsInt } from 'class-validator';

export class GetApartmentsDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  rooms: number;

  @IsOptional()
  @IsEnum(['asc', 'desc'], {
    message: 'sorting option for price must be asc or desc',
  })
  price: 'asc' | 'desc';
}
