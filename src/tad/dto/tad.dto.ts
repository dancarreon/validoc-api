import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { Status } from '@prisma/client';

export class TadDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  ciudad: string;

  @IsString()
  estadoId: string;

  createdAt: Date;
  updatedAt: Date;

  @IsEnum(Status)
  status: Status = Status.ACTIVE;
}

export type CreateTadDto = Omit<TadDto, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateTadDto = Omit<TadDto, 'id' | 'createdAt' | 'updatedAt'>;
