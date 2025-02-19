import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { UserStatus } from '@prisma/client';

export class UserDto {
  @IsUUID()
  id: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  @IsOptional()
  name?: string | null;

  @IsString()
  @IsOptional()
  lastName?: string | null;

  @IsString()
  @IsOptional()
  email?: string | null;

  @IsString()
  @IsOptional()
  phone?: string | null;

  createdAt: Date;

  updatedAt: Date;

  @IsEnum(UserStatus)
  status: UserStatus = UserStatus.INACTIVE;
}

export type CreateUserDto = Omit<
  UserDto,
  'id' | 'createdAt' | 'updatedAt' | 'status'
>;
