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
import { TransportistasService } from './transportistas.service';
import {
  CreateTransportistaDto,
  TransportistaDto,
  UpdateTransportistaDto,
} from './dto/transportista.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('transportistas')
export class TransportistasController {
  constructor(private readonly transportistasService: TransportistasService) {}

  @Post()
  async create(
    @Body() createTransportistaDto: CreateTransportistaDto,
  ): Promise<TransportistaDto> {
    return new TransportistaDto(
      await this.transportistasService.create(createTransportistaDto),
    );
  }

  @Get()
  async findAll(@Query() query: QueryParams): Promise<TransportistaDto[]> {
    const transportistas = await this.transportistasService.findAll(query);
    return transportistas.map(
      (transportista) => new TransportistaDto(transportista),
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TransportistaDto> {
    return new TransportistaDto(await this.transportistasService.findOne(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTransportistaDto: UpdateTransportistaDto,
  ): Promise<TransportistaDto> {
    return new TransportistaDto(
      await this.transportistasService.update(id, updateTransportistaDto),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<TransportistaDto> {
    return new TransportistaDto(await this.transportistasService.remove(id));
  }
}
