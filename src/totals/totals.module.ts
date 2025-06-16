import { Module } from '@nestjs/common';
import { TotalsService } from './totals.service';
import { TotalsController } from './totals.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [TotalsController],
  providers: [TotalsService],
  imports: [PrismaModule],
})
export class TotalsModule {}
