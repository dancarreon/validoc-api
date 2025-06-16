import { Module } from '@nestjs/common';
import { TrazaService } from './traza.service';
import { TrazaController } from './traza.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TrazaController],
  providers: [TrazaService],
  imports: [PrismaModule],
})
export class TrazaModule {}
