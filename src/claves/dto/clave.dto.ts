import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';
import { Status } from '@prisma/client';

export class ClaveDto {
  @IsUUID()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  clave: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  createdAt: Date;

  updatedAt: Date;

  @IsEnum(Status)
  status: Status = Status.ACTIVE;
}

export type CreateClaveDto = Omit<ClaveDto, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateClaveDto = Omit<ClaveDto, 'id' | 'createdAt' | 'updatedAt'>;
