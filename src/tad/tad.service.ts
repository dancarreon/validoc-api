import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateTadDto, TadDto, UpdateTadDto } from './dto/tad.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParams } from '../common/query-params.dto';

@Injectable()
export class TadService {
  private logger = new Logger(TadService.name);

  constructor(private prismaService: PrismaService) {}

  async create(createTadDto: CreateTadDto): Promise<TadDto> {
    this.logger.log(`Creating a new Tad with name ${createTadDto.ciudad}`);
    return this.prismaService.tadDireccion.create({
      data: {
        ...createTadDto,
      },
    });
  }

  async findAll(query: QueryParams): Promise<TadDto[]> {
    this.logger.log(`Getting all tads using params: ${JSON.stringify(query)}`);
    if (query.search) {
      return this.prismaService.tadDireccion.findMany({
        take: query.size,
        skip: query.page * query.size,
        include: {
          estado: true,
        },
        where: {
          OR: [
            {
              ciudad: { contains: query.search, mode: 'insensitive' },
            },
            {
              estado: {
                name: { contains: query.search, mode: 'insensitive' },
              },
            },
          ],
        },
        orderBy: query.orderAndSort || [
          { estado: { name: 'asc' } },
          { ciudad: 'asc' },
        ],
      });
    } else {
      return this.prismaService.tadDireccion.findMany({
        take: query.size,
        skip: query.page * query.size,
        include: {
          estado: true,
        },
        orderBy: query.orderAndSort || [
          { estado: { name: 'asc' } },
          { ciudad: 'asc' },
        ],
      });
    }
  }

  async findOne(id: string): Promise<TadDto> {
    this.logger.log(`Getting tad with id ${id}`);
    try {
      return await this.prismaService.tadDireccion.findUniqueOrThrow({
        where: { id },
      });
    } catch (error: any) {
      this.logger.error(`Tad with id ${id} not found`, error);
      throw new NotFoundException(`Tad with id ${id} not found`);
    }
  }

  async update(id: string, updateTadDto: UpdateTadDto): Promise<TadDto> {
    this.logger.log(`Updating tad with id ${id}`);
    try {
      return await this.prismaService.tadDireccion.update({
        where: { id },
        data: updateTadDto,
      });
    } catch (error: any) {
      this.logger.error(`Failed to update tad with id ${id}`, error);
      throw new NotFoundException(`Failed to update tad with id ${id}`);
    }
  }

  async remove(id: string): Promise<TadDto> {
    this.logger.log(`Removing tad with id ${id}`);
    try {
      return await this.prismaService.tadDireccion.delete({
        where: { id },
      });
    } catch (error: any) {
      this.logger.error(`Failed to remove tad with id ${id}`, error);
      throw new NotFoundException(`Failed to remove tad with id ${id}`);
    }
  }
}
