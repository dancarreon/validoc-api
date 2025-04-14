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
import { RazonesService } from './razones.service';
import { RazonesDto, UpdateRazonesDto } from './dto/razones.dto';
import { QueryParams } from '../common/query-params.dto';
import { ReadRazonesDto } from './dto/read-razones.dto';

@Controller('razones')
export class RazonesController {
  constructor(private readonly razonesService: RazonesService) {}

  @Post()
  create(@Body() createRazoneDto: RazonesDto) {
    return this.razonesService.create(createRazoneDto);
  }

  @Get()
  findAll(@Query() query: QueryParams) {
    return this.razonesService.findAll(query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.razonesService.findOne(id);
    if (result) {
      return new ReadRazonesDto(result);
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRazoneDto: UpdateRazonesDto) {
    return this.razonesService.update(id, updateRazoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.razonesService.remove(id);
  }
}
