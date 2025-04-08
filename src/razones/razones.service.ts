import { Injectable, Logger } from '@nestjs/common';
import { RazonesDto } from './dto/razones.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParams } from '../common/query-params.dto';

class UpdateRazoneDto {}

@Injectable()
export class RazonesService {
  private logger = new Logger(RazonesService.name);

  constructor(private prismaService: PrismaService) {}

  create(razon: RazonesDto) {
    this.logger.log(`Creating a new Razon with nombre: ${razon.nombre}`);
    this.logger.debug(razon);

    return this.prismaService.razonSocialComercial.create({
      data: razon,
    });
  }

  findAll(query: QueryParams) {
    this.logger.log(
      `Getting all Razones using params: ${JSON.stringify(query)}`,
    );

    if (query.search) {
      return this.prismaService.razonSocialComercial.findMany({
        take: query.size,
        skip: query.page * query.size,
        where: {
          OR: [
            {
              nombre: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
        orderBy: query.orderAndSort || { nombre: 'asc' },
      });
    } else {
      return this.prismaService.razonSocialComercial.findMany({
        take: query.size,
        skip: query.page * query.size,
        orderBy: query.orderAndSort || { nombre: 'asc' },
      });
    }
  }

  findOne(id: string) {
    this.logger.log(`Getting a Razon with id ${id}`);

    if (id && id !== '') {
      return this.prismaService.razonSocialComercial.findUniqueOrThrow({
        where: { id },
      });
    }

    this.logger.log(`Cannot get Razon with empty id`);
    return null;
  }

  update(id: string, razon: UpdateRazoneDto) {
    this.logger.log(`Updating Razon with id ${id}`);
    this.logger.debug(razon);

    return this.prismaService.razonSocialComercial.update({
      where: { id },
      data: razon,
    });
  }

  remove(id: string) {
    this.logger.log(`Removing Razon with id ${id}`);

    return this.prismaService.razonSocialComercial.delete({ where: { id } });
  }
}
