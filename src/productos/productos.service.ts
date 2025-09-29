import { Injectable, Logger } from '@nestjs/common';
import { CreateProductoDto, UpdateProductoDto } from './dto/producto.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParams } from '../common/query-params.dto';

@Injectable()
export class ProductosService {
  private logger = new Logger(ProductosService.name);

  constructor(private prismaService: PrismaService) {}

  create(producto: CreateProductoDto) {
    this.logger.log(`Creating a new Producto with clave: ${producto.clave}`);
    this.logger.debug(producto);

    return this.prismaService.producto.create({
      data: producto,
    });
  }

  findAll(query: QueryParams) {
    this.logger.log(
      `Getting all Products using params: ${JSON.stringify(query)}`,
    );

    if (query.search) {
      return this.prismaService.producto.findMany({
        take: query.size,
        skip: query.page * query.size,
        where: {
          OR: [
            {
              idProducto: { contains: query.search, mode: 'insensitive' },
            },
            {
              clave: { contains: query.search, mode: 'insensitive' },
            },
            {
              name: { contains: query.search, mode: 'insensitive' },
            },
            {
              descripcion: { contains: query.search, mode: 'insensitive' },
            },
            {
              iva: { contains: query.search, mode: 'insensitive' },
            },
            {
              densidad: { contains: query.search, mode: 'insensitive' },
            },
            {
              temperatura: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
        orderBy: query.orderAndSort || { clave: 'asc' },
      });
    } else {
      return this.prismaService.producto.findMany({
        take: query.size,
        skip: query.page * query.size,
        orderBy: query.orderAndSort || { clave: 'asc' },
      });
    }
  }

  findOne(id: string) {
    this.logger.log(`Getting a Product with id ${id}`);

    return this.prismaService.producto.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: string, producto: UpdateProductoDto) {
    this.logger.log(`Updating Product with id ${id}`);
    this.logger.debug(producto);

    return this.prismaService.producto.update({
      where: { id },
      data: producto,
    });
  }

  remove(id: string) {
    this.logger.log(`Removing Product with id ${id}`);

    return this.prismaService.producto.delete({ where: { id } });
  }
}
