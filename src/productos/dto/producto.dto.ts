import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';
import { Status } from '@prisma/client';

export class ProductoDto {
  @IsUUID()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  clave: number;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  createdAt: Date;

  updatedAt: Date;

  @IsEnum(Status)
  status: Status = Status.ACTIVE;
}

export type CreateProductoDto = Omit<
  ProductoDto,
  'id' | 'createdAt' | 'updatedAt'
>;

export type UpdateProductoDto = Omit<
  ProductoDto,
  'id' | 'createdAt' | 'updatedAt'
>;
