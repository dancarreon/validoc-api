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
import { TadDto, UpdateTadDto } from './dto/tad.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('tads')
export class TadController {
  constructor(private readonly tadService: TadService) {}

  @Post()
  create(@Body() createTadDto: TadDto) {
    return this.tadService.create(createTadDto);
  }

  @Get()
  findAll(@Query() query: QueryParams) {
    return this.tadService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tadService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTadDto: UpdateTadDto) {
    return this.tadService.update(id, updateTadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tadService.remove(id);
  }
}
