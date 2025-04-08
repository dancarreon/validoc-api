import { Injectable, Logger } from '@nestjs/common';
import { CreateClaveDto, UpdateClaveDto } from './dto/clave.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParams } from '../common/query-params.dto';

@Injectable()
export class ClavesService {
  private logger = new Logger(ClavesService.name);

  constructor(private prismaService: PrismaService) {}

  create(clave: CreateClaveDto) {
    this.logger.log(`Creating a new clave with clave ${clave.clave}`);
    this.logger.debug(clave);

    return this.prismaService.claveConcentradora.create({
      data: clave,
    });
  }

  findAll(query: QueryParams) {
    this.logger.log(
      `Getting all claves using params: ${JSON.stringify(query)}`,
    );

    if (query.search) {
      return this.prismaService.claveConcentradora.findMany({
        take: query.size,
        skip: query.page * query.size,
        where: {
          OR: [
            {
              nombre: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
        orderBy: query.orderAndSort || { clave: 'asc' },
      });
    } else {
      return this.prismaService.claveConcentradora.findMany({
        take: query.size,
        skip: query.page * query.size,
        orderBy: query.orderAndSort || { nombre: 'asc' },
      });
    }
  }

  findOne(id: string) {
    this.logger.log(`Getting a clave with id ${id}`);

    if (id && id !== '') {
      return this.prismaService.claveConcentradora.findUniqueOrThrow({
        where: { id },
      });
    }

    this.logger.log(`Cannot get user with empty id`);
    return null;
  }

  update(id: string, clave: UpdateClaveDto) {
    this.logger.log(`Updating clave with id ${id}`);
    this.logger.debug(clave);

    return this.prismaService.claveConcentradora.update({
      where: { id },
      data: clave,
    });
  }

  remove(id: string) {
    this.logger.log(`Removing clave with id ${id}`);

    return this.prismaService.claveConcentradora.delete({ where: { id } });
  }
}
