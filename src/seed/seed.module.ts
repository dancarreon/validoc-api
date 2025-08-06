import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [SeedService],
  controllers: [SeedController],
  imports: [PrismaModule],
})
export class SeedModule {}
