import { Injectable, Logger } from '@nestjs/common';
import { QueryParams } from '../common/query-params.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TotalsService {
  private logger = new Logger(TotalsService.name);

  constructor(private prismaService: PrismaService) {}

  async totalUsers(query?: QueryParams): Promise<number> {
    this.logger.log(
      `Getting count of users using params: ${JSON.stringify(query)}`,
    );

    if (query?.search && query.search !== '') {
      return this.prismaService.user.count({
        where: {
          OR: [
            {
              username: { contains: query.search, mode: 'insensitive' },
            },
            {
              name: { contains: query.search, mode: 'insensitive' },
            },
            {
              lastName: { contains: query.search, mode: 'insensitive' },
            },
            {
              email: { contains: query.search, mode: 'insensitive' },
            },
            {
              phone: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
      });
    }

    return this.prismaService.user.count();
  }

  totalStates(query: QueryParams) {
    this.logger.log(
      `Getting count of Estado using params: ${JSON.stringify(query)}`,
    );

    if (query?.search && query.search !== '') {
      return this.prismaService.estado.count({
        where: {
          OR: [
            {
              name: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
      });
    }

    return this.prismaService.estado.count();
  }

  totalTads(query: QueryParams) {
    this.logger.log(
      `Getting count of Tads using params: ${JSON.stringify(query)}`,
    );

    if (query?.search && query.search !== '') {
      return this.prismaService.tadDireccion.count({
        where: {
          OR: [
            {
              ciudad: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
      });
    }

    return this.prismaService.tadDireccion.count();
  }

  totalRazones(query: QueryParams) {
    this.logger.log(
      `Getting count of Razones using params: ${JSON.stringify(query)}`,
    );

    if (query?.search && query.search !== '') {
      return this.prismaService.razonSocialComercial.count({
        where: {
          OR: [
            {
              name: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
      });
    }

    return this.prismaService.razonSocialComercial.count();
  }

  totalClaves(query: QueryParams) {
    this.logger.log(
      `Getting count of Claves using params: ${JSON.stringify(query)}`,
    );

    if (query?.search && query.search !== '') {
      return this.prismaService.claveConcentradora.count({
        where: {
          OR: [
            {
              name: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
      });
    }

    return this.prismaService.claveConcentradora.count();
  }

  totalProductos(query: QueryParams) {
    this.logger.log(
      `Getting count of Productos using params: ${JSON.stringify(query)}`,
    );

    if (query?.search && query.search !== '') {
      return this.prismaService.producto.count({
        where: {
          OR: [
            {
              descripcion: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
      });
    }

    return this.prismaService.producto.count();
  }

  totalTransportistas(query: QueryParams) {
    this.logger.log(
      `Getting count of Transportistas using params: ${JSON.stringify(query)}`,
    );

    if (query?.search && query.search !== '') {
      return this.prismaService.transportista.count({
        where: {
          OR: [
            {
              name: { contains: query.search, mode: 'insensitive' },
            },
            {
              lastName: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
      });
    }

    return this.prismaService.transportista.count();
  }

  totalTrazas(query: QueryParams) {
    this.logger.log(
      `Getting all trazas using params: ${JSON.stringify(query)}`,
    );

    if (query.search) {
      return this.prismaService.traza.count({
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
      return this.prismaService.traza.count({
        take: query.size,
        skip: query.page * query.size,
        orderBy: query.orderAndSort || { createdAt: 'desc' },
      });
    }
  }
}
