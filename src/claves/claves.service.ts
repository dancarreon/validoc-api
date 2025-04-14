import { Injectable, Logger } from '@nestjs/common';
import { CreateClaveDto, UpdateClaveDto } from './dto/clave.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParams } from '../common/query-params.dto';

@Injectable()
export class ClavesService {
  private logger = new Logger(ClavesService.name);

  constructor(private prismaService: PrismaService) {}

  customSerializer(param: any): string {
    return JSON.stringify(param, (key, value) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      typeof value === 'bigint' ? value.toString() : value,
    );
  }

  create(clave: CreateClaveDto) {
    this.logger.log(`Creating a new clave with clave ${clave.clave}`);
    this.logger.debug(clave);

    return this.prismaService.claveConcentradora.create({
      data: clave,
    });
  }

  async findAll(query: QueryParams) {
    this.logger.log(
      `Getting all claves using params: ${JSON.stringify(query)}`,
    );

    if (query.search) {
      const result = await this.prismaService.claveConcentradora.findMany({
        take: query.size,
        skip: query.page * query.size,
        where: {
          OR: [
            {
              name: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
        orderBy: query.orderAndSort || { name: 'asc' },
      });

      if (result) {
        return this.customSerializer(result);
      }
    } else {
      const result = await this.prismaService.claveConcentradora.findMany({
        take: query.size,
        skip: query.page * query.size,
        orderBy: query.orderAndSort || { name: 'asc' },
      });

      if (result) {
        return this.customSerializer(result);
      }
    }
  }

  async findOne(id: string) {
    this.logger.log(`Getting a clave with id ${id}`);

    if (id && id !== '') {
      const result =
        await this.prismaService.claveConcentradora.findUniqueOrThrow({
          where: { id },
        });

      if (result) {
        return this.customSerializer(result);
      }
    }

    this.logger.log(`Cannot get user with empty id`);
    return null;
  }

  async update(id: string, clave: UpdateClaveDto) {
    this.logger.log(`Updating clave with id ${id}`);
    this.logger.debug(clave);

    const result = await this.prismaService.claveConcentradora.update({
      where: { id },
      data: clave,
    });

    if (result) {
      return this.customSerializer(result);
    }
  }

  remove(id: string) {
    this.logger.log(`Removing clave with id ${id}`);

    return this.prismaService.claveConcentradora.delete({ where: { id } });
  }
}
