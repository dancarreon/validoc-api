import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import {
  CreateSolicitanteDto,
  SolicitanteDto,
  UpdateSolicitanteDto,
} from './dto/solicitante.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParams } from '../common/query-params.dto';

@Injectable()
export class SolicitantesService {
  private logger = new Logger(SolicitantesService.name);

  constructor(private prismaService: PrismaService) {}

  async create(
    createSolicitanteDto: CreateSolicitanteDto,
  ): Promise<SolicitanteDto> {
    this.logger.log(
      `Creating a new Solicitante with name ${createSolicitanteDto.name}`,
    );
    return this.prismaService.solicitante.create({
      data: {
        ...createSolicitanteDto,
      },
    });
  }

  async findAll(query: QueryParams): Promise<SolicitanteDto[]> {
    this.logger.log(
      `Getting all solicitantes using params: ${JSON.stringify(query)}`,
    );
    if (query.search) {
      return this.prismaService.solicitante.findMany({
        take: query.size,
        skip: query.page * query.size,
        where: {
          name: { contains: query.search, mode: 'insensitive' },
        },
        orderBy: query.orderAndSort || { name: 'asc' },
      });
    } else {
      return this.prismaService.solicitante.findMany({
        take: query.size,
        skip: query.page * query.size,
        orderBy: query.orderAndSort || { name: 'asc' },
      });
    }
  }

  async findOne(id: string): Promise<SolicitanteDto> {
    this.logger.log(`Getting solicitante with id ${id}`);
    try {
      return await this.prismaService.solicitante.findUniqueOrThrow({
        where: { id },
      });
    } catch (error: any) {
      this.logger.error(`Solicitante with id ${id} not found`, error);
      throw new NotFoundException(`Solicitante with id ${id} not found`);
    }
  }

  async update(
    id: string,
    updateSolicitanteDto: UpdateSolicitanteDto,
  ): Promise<SolicitanteDto> {
    this.logger.log(`Updating solicitante with id ${id}`);
    try {
      return await this.prismaService.solicitante.update({
        where: { id },
        data: updateSolicitanteDto,
      });
    } catch (error: any) {
      this.logger.error(`Failed to update solicitante with id ${id}`, error);
      throw new NotFoundException(`Failed to update solicitante with id ${id}`);
    }
  }

  async remove(id: string): Promise<SolicitanteDto> {
    this.logger.log(`Removing solicitante with id ${id}`);
    try {
      return await this.prismaService.solicitante.delete({
        where: { id },
      });
    } catch (error: any) {
      this.logger.error(`Failed to remove solicitante with id ${id}`, error);
      throw new NotFoundException(`Failed to remove solicitante with id ${id}`);
    }
  }
}
