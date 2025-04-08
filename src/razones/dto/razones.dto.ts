import { IsEnum, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { Status } from '@prisma/client';

export class RazonesDto {
  @IsUUID()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  nombre: string;

  createdAt: Date;

  updatedAt: Date;

  @IsEnum(Status)
  status: Status = Status.ACTIVE;
}

export type CreateRazonesDto = Omit<
  RazonesDto,
  'id' | 'createdAt' | 'updatedAt'
>;

export type UpdateRazonesDto = Omit<
  RazonesDto,
  'id' | 'createdAt' | 'updatedAt'
>;
