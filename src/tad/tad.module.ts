import { Module } from '@nestjs/common';
import { TadService } from './tad.service';
import { TadController } from './tad.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TadController],
  providers: [TadService],
  imports: [PrismaModule],
})
export class TadModule {}
