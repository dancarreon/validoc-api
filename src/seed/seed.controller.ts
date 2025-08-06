import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get('/run')
  async seedDatabase(): Promise<string> {
    await this.seedService.runSeed();
    return 'Database seeded successfully!';
  }
}
