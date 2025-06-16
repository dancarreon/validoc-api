import { IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Transform } from 'class-transformer';

const PAGE = 0;
const SIZE = 10;

export class QueryParams {
  @IsNumber()
  @Min(PAGE)
  page: number = PAGE;

  @IsNumber()
  @Min(SIZE)
  size: number = SIZE;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @Transform(({ value }): any[] | null => {
    if (!value) {
      return null;
    }
    return JSON.parse(value as string) as any[];
  })
  orderAndSort?: any[];
}
