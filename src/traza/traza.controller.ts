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
  Query,
  UnprocessableEntityException,
} from '@nestjs/common';
import { TrazaService } from './traza.service';
import { CreateTrazaDto, TrazaDto, UpdateTrazaDto } from './dto/traza.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('trazas')
export class TrazaController {
  private logger = new Logger(TrazaController.name);

  constructor(private readonly trazaService: TrazaService) {}

  @Post()
  async create(@Body() createTrazaDto: CreateTrazaDto): Promise<TrazaDto> {
    this.logger.debug(createTrazaDto);
    try {
      return new TrazaDto(await this.trazaService.create(createTrazaDto));
    } catch (error) {
      this.logger.error(error);
      throw new NotFoundException(`Error creating traza`);
    }
  }

  @Get()
  async findAll(@Query() query: QueryParams): Promise<TrazaDto[]> {
    try {
      const trazas = await this.trazaService.findAll(query);
      return trazas.map((traza) => new TrazaDto(traza));
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TrazaDto> {
    try {
      const traza = await this.trazaService.findOne(id);
      return new TrazaDto(traza);
    } catch (error) {
      this.logger.error(error);
      throw new NotFoundException(`Traza with id ${id} not found`);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTrazaDto: UpdateTrazaDto,
  ) {
    try {
      return new TrazaDto(await this.trazaService.update(id, updateTrazaDto));
    } catch (error) {
      this.logger.error(error);
      throw new UnprocessableEntityException(
        `Error updating traza with id ${id}`,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return new TrazaDto(await this.trazaService.remove(id));
    } catch (error) {
      this.logger.error(error);
      throw new UnprocessableEntityException(
        `Error deleting traza with id ${id}`,
      );
    }
  }
}
