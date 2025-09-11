import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import {
  ConsecutivoDto,
  CreateConsecutivoDto,
  UpdateConsecutivoDto,
} from './dto/consecutivo.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParams } from '../common/query-params.dto';

@Injectable()
export class ConsecutivosService {
  private logger = new Logger(ConsecutivosService.name);

  constructor(private prismaService: PrismaService) {}

  async create(
    createConsecutivoDto: CreateConsecutivoDto,
  ): Promise<ConsecutivoDto> {
    this.logger.log(
      `Creating a new Consecutivo with value ${createConsecutivoDto.valor}`,
    );
    // find if there's already a consecutivo record
    const existing = await this.prismaService.consecutivo.findFirst();

    if (!existing) {
      return this.prismaService.consecutivo.create({
        data: {
          ...createConsecutivoDto,
        },
      });
    } else {
      this.logger.log(`Consecutivo ya existe`);
      return existing;
    }
  }

  async findAll(query: QueryParams): Promise<ConsecutivoDto[]> {
    this.logger.log(
      `Getting all consecutivos using params: ${JSON.stringify(query)}`,
    );
    if (query.search) {
      return this.prismaService.consecutivo.findMany({
        take: query.size,
        skip: query.page * query.size,
        where: {
          valor: { equals: query.search },
        },
        orderBy: query.orderAndSort || { valor: 'asc' },
      });
    } else {
      return this.prismaService.consecutivo.findMany({
        take: query.size,
        skip: query.page * query.size,
        orderBy: query.orderAndSort || { valor: 'asc' },
      });
    }
  }

  async findOne(id: string): Promise<ConsecutivoDto> {
    this.logger.log(`Getting consecutivo with id ${id}`);
    try {
      return await this.prismaService.consecutivo.findUniqueOrThrow({
        where: { id },
      });
    } catch (error: any) {
      this.logger.error(`Consecutivo with id ${id} not found`, error);
      throw new NotFoundException(`Consecutivo with id ${id} not found`);
    }
  }

  async update(
    id: string,
    updateConsecutivoDto: UpdateConsecutivoDto,
  ): Promise<ConsecutivoDto> {
    this.logger.log(`Updating consecutivo with id ${id}`);
    try {
      return await this.prismaService.consecutivo.update({
        where: { id },
        data: updateConsecutivoDto,
      });
    } catch (error: any) {
      this.logger.error(`Failed to update consecutivo with id ${id}`, error);
      throw new NotFoundException(`Failed to update consecutivo with id ${id}`);
    }
  }

  async remove(id: string): Promise<ConsecutivoDto> {
    this.logger.log(`Removing consecutivo with id ${id}`);
    try {
      return await this.prismaService.consecutivo.delete({
        where: { id },
      });
    } catch (error: any) {
      this.logger.error(`Failed to remove consecutivo with id ${id}`, error);
      throw new NotFoundException(`Failed to remove consecutivo with id ${id}`);
    }
  }
}
