import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import {
  CreateProductoDto,
  ProductoDto,
  UpdateProductoDto,
} from './dto/producto.dto';
import { QueryParams } from '../common/query-params.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('productos')
@UseInterceptors(CacheInterceptor)
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  async create(@Body() createProductoDto: CreateProductoDto) {
    return new ProductoDto(
      await this.productosService.create(createProductoDto),
    );
  }

  @Get()
  async findAll(@Query() query: QueryParams) {
    const products = await this.productosService.findAll(query);
    return products.map((product) => new ProductoDto(product));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ProductoDto(await this.productosService.findOne(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductoDto: UpdateProductoDto,
  ) {
    return new ProductoDto(
      await this.productosService.update(id, updateProductoDto),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ProductoDto(await this.productosService.remove(id));
  }
}
