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
import { TadService } from './tad.service';
import { CreateTadDto, TadDto, UpdateTadDto } from './dto/tad.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('tads')
export class TadController {
  constructor(private readonly tadService: TadService) {}

  @Post()
  async create(@Body() createTadDto: CreateTadDto) {
    return new TadDto(await this.tadService.create(createTadDto));
  }

  @Get()
  async findAll(@Query() query: QueryParams) {
    const tads = await this.tadService.findAll(query);
    return tads.map((tad) => new TadDto(tad));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new TadDto(await this.tadService.findOne(id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTadDto: UpdateTadDto) {
    return new TadDto(await this.tadService.update(id, updateTadDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new TadDto(await this.tadService.remove(id));
  }
}
