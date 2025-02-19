import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto, UserDto } from './dto/user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);

  constructor(private prismaService: PrismaService) {}

  create(user: CreateUserDto): Promise<UserDto> {
    this.logger.log(`Creating a new user with username ${user.username}`);
    this.logger.debug(user);

    return this.prismaService.user.create({
      data: {
        ...user,
      },
    });
  }

  findAll(): Promise<UserDto[]> {
    this.logger.log(`Getting all users`);

    return this.prismaService.user.findMany();
  }

  findOne(id: string): Promise<UserDto> {
    this.logger.log(`Getting user with id ${id}`);

    return this.prismaService.user.findUniqueOrThrow({ where: { id } });
  }

  update(id: string, user: UserDto): Promise<UserDto> {
    this.logger.log(`Updating user with id ${id}`);
    this.logger.debug(user);

    return this.prismaService.user.update({
      where: { id },
      data: { ...user },
    });
  }

  remove(id: string): Promise<UserDto> {
    this.logger.log(`Removing user with id ${id}`);

    return this.prismaService.user.delete({ where: { id } });
  }
}
