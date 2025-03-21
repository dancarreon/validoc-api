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
  create(@Body() createUserDto: CreateUserDto): Promise<UserDto> | null {
    this.logger.debug(createUserDto);
    try {
      return this.usersService.create(createUserDto);
    } catch (error) {
      this.logger.error(error);
      throw new NotFoundException(
        `Error creating user with username ${createUserDto.username}`,
      );
    }
  }

  @Get()
  //@UseGuards(JwtAuthGuard) TODO enable this for JWT authentication
  findAll(@Query() query: QueryParams): Promise<UserDto[]> | null {
    try {
      return this.usersService.findAll(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }

  @Get('total')
  totalUsers(@Query() query: QueryParams): Promise<number> | null {
    try {
      return this.usersService.totalUsers(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.usersService.findOne(id);
    } catch (error) {
      this.logger.error(error);
      throw new NotFoundException(`User with id ${id} not found`);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return this.usersService.update(id, updateUserDto);
    } catch (error) {
      this.logger.error(error);
      throw new UnprocessableEntityException(
        `Error updating user with id ${id}`,
      );
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.usersService.remove(id);
    } catch (error) {
      this.logger.error(error);
      throw new UnprocessableEntityException(
        `Error deleting user with id ${id}`,
      );
    }
  }
}
