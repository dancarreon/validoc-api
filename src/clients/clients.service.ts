import { Injectable, Logger } from '@nestjs/common';
import { ClientDto, UpdateClientDTO } from './dto/client.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParams } from '../common/query-params.dto';

@Injectable()
export class ClientsService {
  private logger = new Logger(ClientsService.name);

  constructor(private prismaService: PrismaService) {}

  create(createClientDto: ClientDto) {
    this.logger.log('Creating a new client', createClientDto);

    return this.prismaService.cliente.create({
      data: createClientDto,
    });
  }

  findAll(query: QueryParams) {
    this.logger.log(
      `Getting all clients using params: ${JSON.stringify(query)}`,
    );

    if (query.search) {
      return this.prismaService.cliente.findMany({
        take: query.size,
        skip: query.page * query.size,
        where: {
          OR: [
            {
              noCliente: { contains: query.search, mode: 'insensitive' },
            },
            {
              name: { contains: query.search, mode: 'insensitive' },
            },
            {
              razonSocial: { contains: query.search, mode: 'insensitive' },
            },
            {
              rfc: { contains: query.search, mode: 'insensitive' },
            },
            {
              unbMx: { contains: query.search, mode: 'insensitive' },
            },
            {
              direccion: { contains: query.search, mode: 'insensitive' },
            },
            {
              direccionCorta: { contains: query.search, mode: 'insensitive' },
            },
            {
              id2: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
        orderBy: query.orderAndSort || { name: 'asc' },
      });
    } else {
      return this.prismaService.cliente.findMany({
        take: query.size,
        skip: query.page * query.size,
        orderBy: query.orderAndSort || { name: 'asc' },
      });
    }
  }

  findOne(id: string) {
    this.logger.log(`Getting client with id: ${id}`);

    return this.prismaService.cliente.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: string, updateClientDto: UpdateClientDTO) {
    this.logger.log(`Updating client with id: ${id}`, updateClientDto);

    return this.prismaService.cliente.update({
      where: { id },
      data: updateClientDto,
    });
  }

  remove(id: string) {
    this.logger.log(`Removing client with id: ${id}`);

    return this.prismaService.cliente.delete({
      where: { id },
    });
  }
}
