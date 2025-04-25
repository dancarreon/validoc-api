import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import {
  CreateTransportistaDto,
  TransportistaDto,
  UpdateTransportistaDto,
} from './dto/transportista.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParams } from '../common/query-params.dto';

@Injectable()
export class TransportistasService {
  private logger = new Logger(TransportistasService.name);

  constructor(private prismaService: PrismaService) {}

  async create(createTransportistaDto: CreateTransportistaDto) {
    this.logger.log(
      `Creating a new Transportista with name ${createTransportistaDto.name}`,
    );
    return this.prismaService.transportista.create({
      data: {
        ...createTransportistaDto,
        name: createTransportistaDto.name ?? '',
        lastName: createTransportistaDto.lastName ?? '',
      },
    });
  }

  async findAll(query: QueryParams) {
    this.logger.log(`Getting all transportistas`);
    if (query.search) {
      return this.prismaService.transportista.findMany({
        take: query.size,
        skip: query.page * query.size,
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
        orderBy: query.orderAndSort || { name: 'asc' },
      });
    } else {
      return this.prismaService.transportista.findMany({
        take: query.size,
        skip: query.page * query.size,
        orderBy: query.orderAndSort || { name: 'asc' },
      });
    }
  }

  async findOne(id: string) {
    this.logger.log(`Getting transportista with id ${id}`);
    try {
      return await this.prismaService.transportista.findUniqueOrThrow({
        where: { id },
      });
    } catch (error: any) {
      this.logger.error(`Transportista with id ${id} not found`, error);
      throw new NotFoundException(`Transportista with id ${id} not found`);
    }
  }

  async getRandomTransportista() {
    this.logger.log(`Getting a random transportista`);
    const transportistas = await this.prismaService.transportista.findMany();
    if (transportistas.length === 0) {
      throw new NotFoundException('No transportistas found');
    }
    let randomIndex = Math.floor(Math.random() * transportistas.length);
    const randomName = transportistas[randomIndex].name;

    randomIndex = Math.floor(Math.random() * transportistas.length);
    const randomLastName = transportistas[randomIndex].lastName;

    return new TransportistaDto({
      name: randomName,
      lastName: randomLastName,
    });
  }

  async update(id: string, updateTransportistaDto: UpdateTransportistaDto) {
    this.logger.log(`Updating transportista with id ${id}`);
    try {
      return await this.prismaService.transportista.update({
        where: { id },
        data: {
          ...updateTransportistaDto,
          name: updateTransportistaDto.name ?? '',
          lastName: updateTransportistaDto.lastName ?? '',
        },
      });
    } catch (error: any) {
      this.logger.error(`Failed to update transportista with id ${id}`, error);
      throw new NotFoundException(
        `Failed to update transportista with id ${id}`,
      );
    }
  }

  async remove(id: string) {
    this.logger.log(`Removing transportista with id ${id}`);
    try {
      return await this.prismaService.transportista.delete({
        where: { id },
      });
    } catch (error: any) {
      this.logger.error(`Failed to remove transportista with id ${id}`, error);
      throw new NotFoundException(
        `Failed to remove transportista with id ${id}`,
      );
    }
  }
}
