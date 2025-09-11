import { Solicitante } from '../entities/solicitante.entity';
import { IsEnum, IsString, IsUUID } from 'class-validator';
import { Status } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class SolicitanteDto implements Solicitante {
  constructor(partial: Partial<SolicitanteDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsEnum(Status)
  status: Status = Status.ACTIVE;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}

export type CreateSolicitanteDto = Omit<
  SolicitanteDto,
  'id' | 'createdAt' | 'updatedAt'
>;

export type UpdateSolicitanteDto = Omit<
  SolicitanteDto,
  'id' | 'createdAt' | 'updatedAt'
>;
