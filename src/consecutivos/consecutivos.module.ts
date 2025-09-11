import { Module } from '@nestjs/common';
import { ConsecutivosService } from './consecutivos.service';
import { ConsecutivosController } from './consecutivos.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ConsecutivosController],
  providers: [ConsecutivosService],
  imports: [PrismaModule],
})
export class ConsecutivosModule {}
