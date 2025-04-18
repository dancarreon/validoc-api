import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Status, TadDireccion } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class TadDto implements TadDireccion {
  constructor(partial: Partial<TadDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  ciudad: string;

  @IsString()
  estadoId: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @IsEnum(Status)
  status: Status = Status.ACTIVE;
}

export type CreateTadDto = Omit<TadDto, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateTadDto = Omit<TadDto, 'id' | 'createdAt' | 'updatedAt'>;
