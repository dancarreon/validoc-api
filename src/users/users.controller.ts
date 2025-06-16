import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto, UserDto } from './dto/user.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('users')
export class UsersController {
  private logger = new Logger(UsersController.name);

  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    this.logger.debug(createUserDto);
    try {
      return new UserDto(await this.usersService.create(createUserDto));
    } catch (error) {
      this.logger.error(error);
      throw new NotFoundException(
        `Error creating user with username ${createUserDto.username}`,
      );
    }
  }

  @Get()
  //@UseGuards(JwtAuthGuard) TODO enable this for JWT authentication
  async findAll(@Query() query: QueryParams): Promise<UserDto[]> {
    try {
      const users = await this.usersService.findAll(query);
      return users.map((user) => new UserDto(user));
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDto> {
    try {
      const user = await this.usersService.findOne(id);
      return new UserDto({ ...user, name: user.name ?? undefined });
    } catch (error) {
      this.logger.error(error);
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return new UserDto(await this.usersService.update(id, updateUserDto));
    } catch (error) {
      this.logger.error(error);
      throw new UnprocessableEntityException(
        `Error updating user with id ${id}`,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return new UserDto(await this.usersService.remove(id));
    } catch (error) {
      this.logger.error(error);
      throw new UnprocessableEntityException(
        `Error deleting user with id ${id}`,
      );
    }
  }
}
