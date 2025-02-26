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
  UnprocessableEntityException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UserDto } from './dto/user.dto';

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
  findAll(): Promise<UserDto[]> | null {
    try {
      return this.usersService.findAll();
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
  update(@Param('id') id: string, @Body() updateUserDto: UserDto) {
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
