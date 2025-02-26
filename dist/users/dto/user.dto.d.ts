import { UserStatus } from '@prisma/client';
export declare class UserDto {
    id: string;
    username: string;
    password: string;
    name?: string | null;
    lastName?: string | null;
    email?: string | null;
    phone?: string | null;
    createdAt: Date;
    updatedAt: Date;
    status: UserStatus;
}
export type CreateUserDto = Omit<UserDto, 'id' | 'createdAt' | 'updatedAt' | 'status'>;
