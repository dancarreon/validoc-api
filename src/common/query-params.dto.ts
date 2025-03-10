import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

const PAGE = 0;
const SIZE = 10;

enum SORT_ORDER {
  ASC = 'asc',
  DESC = 'desc',
}

export class QueryParams {
  @IsNumber()
  @Min(PAGE)
  page: number = PAGE;

  @IsNumber()
  @Min(SIZE)
  size: number = SIZE;

  @IsOptional()
  @IsString()
  orderBy?: string;

  @IsOptional()
  @IsString()
  sort?: SORT_ORDER = SORT_ORDER.ASC;
}
