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
import { SolicitantesService } from './solicitantes.service';
import {
  CreateSolicitanteDto,
  SolicitanteDto,
  UpdateSolicitanteDto,
} from './dto/solicitante.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('solicitantes')
//@UseInterceptors(CacheInterceptor)
export class SolicitantesController {
  constructor(private readonly solicitantesService: SolicitantesService) {}

  @Post()
  async create(@Body() createSolicitanteDto: CreateSolicitanteDto) {
    return new SolicitanteDto(
      await this.solicitantesService.create(createSolicitanteDto),
    );
  }

  @Get()
  async findAll(@Query() query: QueryParams) {
    const solicitantes = await this.solicitantesService.findAll(query);
    return solicitantes.map((solicitante) => new SolicitanteDto(solicitante));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new SolicitanteDto(await this.solicitantesService.findOne(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSolicitanteDto: UpdateSolicitanteDto,
  ) {
    return new SolicitanteDto(
      await this.solicitantesService.update(id, updateSolicitanteDto),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new SolicitanteDto(await this.solicitantesService.remove(id));
  }
}
