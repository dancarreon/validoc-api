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
import {
  CreateRazonesDto,
  RazonesDto,
  UpdateRazonesDto,
} from './dto/razones.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('razones')
export class RazonesController {
  constructor(private readonly razonesService: RazonesService) {}

  @Post()
  async create(@Body() createRazoneDto: CreateRazonesDto) {
    return new RazonesDto(await this.razonesService.create(createRazoneDto));
  }

  @Get()
  async findAll(@Query() query: QueryParams) {
    const razones = await this.razonesService.findAll(query);
    return razones.map((razon) => new RazonesDto(razon));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new RazonesDto(await this.razonesService.findOne(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRazoneDto: UpdateRazonesDto,
  ) {
    return new RazonesDto(
      await this.razonesService.update(id, updateRazoneDto),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new RazonesDto(await this.razonesService.remove(id));
  }
}
