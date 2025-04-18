import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Estado, Status } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class EstadoDto implements Estado {
  constructor(partial: Partial<EstadoDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @IsEnum(Status)
  status: Status = Status.ACTIVE;
}

export type CreateEstadoDto = Omit<EstadoDto, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateEstadoDto = Omit<EstadoDto, 'id' | 'createdAt' | 'updatedAt'>;
