import { Module } from '@nestjs/common';
import { RazonesService } from './razones.service';
import { RazonesController } from './razones.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [RazonesController],
  providers: [RazonesService],
  imports: [PrismaModule],
})
export class RazonesModule {}
