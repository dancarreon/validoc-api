import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClavesService } from './claves.service';
import { CreateClaveDto, UpdateClaveDto } from './dto/clave.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('claves')
export class ClavesController {
  constructor(private readonly clavesService: ClavesService) {}

  @Post()
  create(@Body() createClaveDto: CreateClaveDto) {
    return this.clavesService.create(createClaveDto);
  }

  @Get()
  findAll(@Query() query: QueryParams) {
    return this.clavesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clavesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClaveDto: UpdateClaveDto) {
    return this.clavesService.update(id, updateClaveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clavesService.remove(id);
  }
}
