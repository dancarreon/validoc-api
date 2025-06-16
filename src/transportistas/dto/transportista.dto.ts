import { Status, Transportista } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Exclude } from 'class-transformer';

export class TransportistaDto implements Transportista {
  constructor(partial: Partial<TransportistaDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @IsString()
  @IsOptional()
  name: string | null;

  @IsString()
  @IsOptional()
  lastName: string | null;

  @IsEnum(Status)
  status: Status = Status.INACTIVE;

  @IsBoolean()
  @IsOptional()
  generated: boolean = true;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}

export type CreateTransportistaDto = Omit<
  TransportistaDto,
  'id' | 'createdAt' | 'updatedAt'
>;

export type UpdateTransportistaDto = Omit<
  TransportistaDto,
  'id' | 'createdAt' | 'updatedAt'
>;
