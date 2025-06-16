import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Producto, Status } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class ProductoDto implements Producto {
  constructor(partial: Partial<ProductoDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  clave: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
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
