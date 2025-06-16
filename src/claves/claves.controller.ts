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
import { ClaveDto, CreateClaveDto, UpdateClaveDto } from './dto/clave.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('claves')
export class ClavesController {
  constructor(private readonly clavesService: ClavesService) {}

  @Post()
  async create(@Body() createClaveDto: CreateClaveDto) {
    return new ClaveDto(await this.clavesService.create(createClaveDto));
  }

  @Get()
  async findAll(@Query() query: QueryParams) {
    const claves = await this.clavesService.findAll(query);
    return claves.map((clave) => new ClaveDto(clave));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ClaveDto(await this.clavesService.findOne(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClaveDto: UpdateClaveDto,
  ) {
    return new ClaveDto(await this.clavesService.update(id, updateClaveDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ClaveDto(await this.clavesService.remove(id));
  }
}
