import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductoDto, UpdateProductoDto } from './dto/producto.dto';
import { QueryParams } from '../common/query-params.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  create(@Body() createProductoDto: ProductoDto) {
    return this.productosService.create(createProductoDto);
  }

  @Get()
  findAll(@Query() query: QueryParams) {
    return this.productosService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductoDto: UpdateProductoDto,
  ) {
    return this.productosService.update(id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(id);
  }
}
