import { TadDireccion } from '../../tad/entities/tad.entity';
import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Status } from '@prisma/client';
import { Type } from 'class-transformer';

export class EstadoDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  createdAt: Date;

  updatedAt: Date;

  @Type(() => TadDireccion)
  tadDireccion?: TadDireccion;

  @IsEnum(Status)
  status: Status = Status.ACTIVE;
}

export type CreateEstadoDto = Omit<EstadoDto, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateEstadoDto = Omit<EstadoDto, 'id' | 'createdAt' | 'updatedAt'>;
