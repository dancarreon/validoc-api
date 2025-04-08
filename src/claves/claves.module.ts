import { Module } from '@nestjs/common';
import { ClavesService } from './claves.service';
import { ClavesController } from './claves.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [ClavesController],
  providers: [ClavesService],
  imports: [PrismaModule],
})
export class ClavesModule {}
