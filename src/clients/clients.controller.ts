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
import { ClientsService } from './clients.service';
import { ClientDto, UpdateClientDTO } from './dto/client.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() createClientDto: ClientDto) {
    return new ClientDto(await this.clientsService.create(createClientDto));
  }

  @Get()
  async findAll(@Query() query: QueryParams) {
    const clients = await this.clientsService.findAll(query);
    return clients.map((client) => new ClientDto(client));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ClientDto(await this.clientsService.findOne(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDTO,
  ) {
    return new ClientDto(await this.clientsService.update(id, updateClientDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ClientDto(await this.clientsService.remove(id));
  }
}
