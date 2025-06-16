import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateEstadoDto, EstadoDto, UpdateEstadoDto } from './dto/estado.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParams } from '../common/query-params.dto';

@Injectable()
export class EstadosService {
  private logger = new Logger(EstadosService.name);

  constructor(private prismaService: PrismaService) {}

  create(createEstadoDto: CreateEstadoDto): Promise<EstadoDto> {
    this.logger.log(
      `Creating a new Estado with nombre ${createEstadoDto.name}`,
    );
    return this.prismaService.estado.create({
      data: createEstadoDto,
    });
  }

  findAll(query: QueryParams): Promise<EstadoDto[]> {
    this.logger.log(
      `Getting all estados using params: ${JSON.stringify(query)}`,
    );

    if (query.search) {
      return this.prismaService.estado.findMany({
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
    } else {
      return this.prismaService.estado.findMany({
        take: query.size,
        skip: query.page * query.size,
        orderBy: query.orderAndSort || { name: 'asc' },
      });
    }
  }

  async findOne(id: string): Promise<EstadoDto> {
    this.logger.log(`Getting estado with id ${id}`);
    try {
      return await this.prismaService.estado.findUniqueOrThrow({
        where: { id },
      });
    } catch (error: any) {
      this.logger.error(`Estado with id ${id} not found`, error);
      throw new NotFoundException(`Estado with id ${id} not found`);
    }
  }

  async update(
    id: string,
    updateEstadoDto: UpdateEstadoDto,
  ): Promise<EstadoDto> {
    this.logger.log(`Updating estado with id ${id}`);
    try {
      return await this.prismaService.estado.update({
        where: { id },
        data: updateEstadoDto,
      });
    } catch (error: any) {
      this.logger.error(`Failed to update estado with id ${id}`, error);
      throw new NotFoundException(`Failed to update estado with id ${id}`);
    }
  }

  async remove(id: string): Promise<EstadoDto> {
    this.logger.log(`Removing estado with id ${id}`);
    try {
      return await this.prismaService.estado.delete({
        where: { id },
      });
    } catch (error: any) {
      this.logger.error(`Failed to remove estado with id ${id}`, error);
      throw new NotFoundException(`Failed to remove estado with id ${id}`);
    }
  }
}
