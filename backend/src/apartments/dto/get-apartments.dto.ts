import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsEnum, Min } from 'class-validator';

export class GetApartmentsDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  rooms: number;

  @IsOptional()
  @IsEnum(['asc', 'desc'], {
    message: 'sorting option for price must be asc or desc',
  })
  price: 'asc' | 'desc';
}
