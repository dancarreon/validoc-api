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
import { EstadosService } from './estados.service';
import { CreateEstadoDto, EstadoDto, UpdateEstadoDto } from './dto/estado.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('estados')
export class EstadosController {
  constructor(private readonly estadosService: EstadosService) {}

  @Post()
  async create(@Body() createEstadoDto: CreateEstadoDto) {
    return new EstadoDto(await this.estadosService.create(createEstadoDto));
  }

  @Get()
  async findAll(@Query() query: QueryParams) {
    const estados = await this.estadosService.findAll(query);
    return estados.map((estado) => new EstadoDto(estado));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new EstadoDto(await this.estadosService.findOne(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEstadoDto: UpdateEstadoDto,
  ) {
    return new EstadoDto(await this.estadosService.update(id, updateEstadoDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new EstadoDto(await this.estadosService.remove(id));
  }
}
