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
import { ConsecutivosService } from './consecutivos.service';
import {
  ConsecutivoDto,
  CreateConsecutivoDto,
  UpdateConsecutivoDto,
} from './dto/consecutivo.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('consecutivos')
export class ConsecutivosController {
  constructor(private readonly consecutivosService: ConsecutivosService) {}

  @Post()
  async create(@Body() createConsecutivoDto: CreateConsecutivoDto) {
    return new ConsecutivoDto(
      await this.consecutivosService.create(createConsecutivoDto),
    );
  }

  @Get()
  async findAll(@Query() query: QueryParams) {
    const consecutivos = await this.consecutivosService.findAll(query);
    return consecutivos.map((consecutivo) => new ConsecutivoDto(consecutivo));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ConsecutivoDto(await this.consecutivosService.findOne(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateConsecutivoDto: UpdateConsecutivoDto,
  ) {
    return new ConsecutivoDto(
      await this.consecutivosService.update(id, updateConsecutivoDto),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ConsecutivoDto(await this.consecutivosService.remove(id));
  }
}
