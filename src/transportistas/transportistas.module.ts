import { Module } from '@nestjs/common';
import { TransportistasService } from './transportistas.service';
import { TransportistasController } from './transportistas.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TransportistasController],
  providers: [TransportistasService],
  imports: [PrismaModule],
})
export class TransportistasModule {}
