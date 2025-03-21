import { Injectable, Logger } from '@nestjs/common';
import {
  CreateUserDto,
  ReadUserDto,
  UpdateUserDto,
  UserDto,
} from './dto/user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParams } from '../common/query-params.dto';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);

  constructor(private prismaService: PrismaService) {}

  async create(user: CreateUserDto): Promise<UserDto> {
    this.logger.log(`Creating a new user with username ${user.username}`);
    this.logger.debug(user);

    user.password = await bcrypt.hash(user.password, roundsOfHashing);

    return this.prismaService.user.create({
      data: user,
    });
  }

  findAll(query: QueryParams): Promise<UserDto[]> {
    this.logger.log(`Getting all users using params: ${JSON.stringify(query)}`);

    if (query.search) {
      return this.prismaService.user.findMany({
        take: query.size,
        skip: query.page * query.size,
        where: {
          OR: [
            {
              username: { contains: query.search, mode: 'insensitive' },
            },
            {
              name: { contains: query.search, mode: 'insensitive' },
            },
            {
              lastName: { contains: query.search, mode: 'insensitive' },
            },
            {
              email: { contains: query.search, mode: 'insensitive' },
            },
            {
              phone: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
        orderBy: query.orderAndSort || { username: 'asc' },
      });
    } else {
      return this.prismaService.user.findMany({
        take: query.size,
        skip: query.page * query.size,
        orderBy: query.orderAndSort || { username: 'asc' },
      });
    }
  }

  totalUsers(query?: QueryParams): Promise<number> | null {
    this.logger.log(
      `Getting count of users using params: ${JSON.stringify(query)}`,
    );

    if (query && query.search !== '') {
      return this.prismaService.user.count({
        where: {
          OR: [
            {
              username: { contains: query.search, mode: 'insensitive' },
            },
            {
              name: { contains: query.search, mode: 'insensitive' },
            },
            {
              lastName: { contains: query.search, mode: 'insensitive' },
            },
            {
              email: { contains: query.search, mode: 'insensitive' },
            },
            {
              phone: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
      });
    } else {
      return this.prismaService.user.count();
    }
  }

  findOne(id: string): Promise<ReadUserDto> {
    this.logger.log(`Getting user with id ${id}`);

    return this.prismaService.user.findUniqueOrThrow({
      where: { id },
    });
  }

  async update(id: string, user: UpdateUserDto): Promise<UserDto> {
    this.logger.log(`Updating user with id ${id}`);
    this.logger.debug(user);

    if (user.password) {
      user.password = await bcrypt.hash(user.password, roundsOfHashing);
    }

    return this.prismaService.user.update({
      where: { id },
      data: user,
    });
  }

  remove(id: string): Promise<UserDto> {
    this.logger.log(`Removing user with id ${id}`);

    return this.prismaService.user.delete({ where: { id } });
  }
}
