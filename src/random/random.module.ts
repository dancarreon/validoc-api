import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { TransportistasService } from '../transportistas/transportistas.service';
import { RandomController } from './random.controller';

@Module({
  controllers: [RandomController],
  providers: [TransportistasService],
  imports: [PrismaModule],
})
export class RandomModule {}
