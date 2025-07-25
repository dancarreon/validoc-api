import { Injectable, Logger } from '@nestjs/common';
import { CreateTrazaDto, UpdateTrazaDto } from './dto/traza.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParams } from '../common/query-params.dto';

@Injectable()
export class TrazaService {
  private logger = new Logger(TrazaService.name);

  constructor(private prismaService: PrismaService) {}

  async create(traza: CreateTrazaDto) {
    this.logger.log(`Creating a new traza`);
    this.logger.debug(traza);

    return this.prismaService.traza.create({
      data: traza,
    });
  }

  async findAll(query: QueryParams) {
    this.logger.log(
      `Getting all trazas using params: ${JSON.stringify(query)}`,
    );

    if (query.search) {
      return this.prismaService.traza.findMany({
        take: query.size,
        skip: query.page * query.size,
        where: {
          OR: [
            {
              destino: { contains: query.search, mode: 'insensitive' },
            },
            {
              nombreTransportista: {
                contains: query.search,
                mode: 'insensitive',
              },
            },
            {
              nombreOperador: { contains: query.search, mode: 'insensitive' },
            },
            {
              folioPemex1: { contains: query.search, mode: 'insensitive' },
            },
            {
              folioRemisionNacional: {
                contains: query.search,
                mode: 'insensitive',
              },
            },
            {
              folioTrasvase: { contains: query.search, mode: 'insensitive' },
            },
            {
              folio: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
        orderBy: query.orderAndSort || { createdAt: 'desc' },
      });
    } else {
      return this.prismaService.traza.findMany({
        take: query.size,
        skip: query.page * query.size,
        orderBy: query.orderAndSort || { createdAt: 'desc' },
      });
    }
  }

  async findOne(id: string) {
    this.logger.log(`Getting traza with id ${id}`);

    return this.prismaService.traza.findUniqueOrThrow({
      where: { id },
      include: {
        tadDireccion: true,
        claveConcentradora: true,
        razonSocialComercial: true,
        producto: true,
      },
    });
  }

  async update(id: string, traza: UpdateTrazaDto) {
    this.logger.log(`Updating traza with id ${id}`);
    this.logger.debug(traza);

    return this.prismaService.traza.update({
      where: { id },
      data: traza,
    });
  }

  async remove(id: string) {
    this.logger.log(`Removing traza with id ${id}`);

    return this.prismaService.traza.delete({ where: { id } });
  }
}
