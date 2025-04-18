import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { Status, User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserDto implements User {
  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Exclude()
  password: string;

  @IsString()
  @IsOptional()
  name: string | null;

  @IsString()
  @IsOptional()
  lastName: string | null;

  @IsString()
  @IsOptional()
  email: string | null;

  @IsString()
  @IsOptional()
  phone: string | null;

  @IsEnum(Status)
  status: Status = Status.INACTIVE;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}

export type CreateUserDto = Omit<UserDto, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateUserDto = Omit<UserDto, 'id' | 'createdAt' | 'updatedAt'>;
