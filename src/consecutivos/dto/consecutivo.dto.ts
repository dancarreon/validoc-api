import { Consecutivo } from '@prisma/client';
import { IsNumber, IsUUID } from 'class-validator';
import { Exclude } from 'class-transformer';

export class ConsecutivoDto implements Consecutivo {
  constructor(partial: Partial<ConsecutivoDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @IsNumber()
  valor: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}

export type CreateConsecutivoDto = Omit<
  ConsecutivoDto,
  'id' | 'createdAt' | 'updatedAt'
>;

export type UpdateConsecutivoDto = Omit<
  ConsecutivoDto,
  'id' | 'createdAt' | 'updatedAt'
>;
