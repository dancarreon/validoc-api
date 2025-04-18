import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ClaveConcentradora, Status } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class ClaveDto implements ClaveConcentradora {
  constructor(partial: Partial<ClaveDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  clave: string;

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

export type CreateClaveDto = Omit<ClaveDto, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateClaveDto = Omit<ClaveDto, 'id' | 'createdAt' | 'updatedAt'>;
