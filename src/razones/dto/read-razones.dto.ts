import { IsEnum, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { RazonSocialComercial, Status } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class ReadRazonesDto implements RazonSocialComercial {
  constructor(partial: Partial<ReadRazonesDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  name: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @IsEnum(Status)
  status: Status = Status.ACTIVE;
}
