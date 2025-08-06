import { Cliente, Status } from '@prisma/client';
import { IsEnum, IsString, IsUUID } from 'class-validator';
import { Exclude } from 'class-transformer';

export class ClientDto implements Cliente {
  constructor(partial: Partial<ClientDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  name: string;

  @IsString()
  id: string;

  @IsString()
  noCliente: string;

  @IsString()
  razonSocial: string;

  @IsString()
  rfc: string;

  @IsString()
  unbMx: string;

  @IsString()
  direccion: string;

  @IsString()
  direccionCorta: string;

  @IsString()
  id2: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @IsEnum(Status)
  status: Status = Status.ACTIVE;
}

export type CreateClientDTO = Omit<ClientDto, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateClientDTO = Omit<ClientDto, 'id' | 'createdAt' | 'updatedAt'>;
