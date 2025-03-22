import { Injectable, Logger } from '@nestjs/common';
import { QueryParams } from '../common/query-params.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TotalsService {
  private logger = new Logger(TotalsService.name);

  constructor(private prismaService: PrismaService) {}

  async totalUsers(query?: QueryParams): Promise<number> {
    this.logger.log(
      `Getting count of users using params: ${JSON.stringify(query)}`,
    );

    if (query?.search && query.search !== '') {
      return this.prismaService.user.count({
        where: {
          OR: [
            {
              username: { contains: query.search, mode: 'insensitive' },
            },
            {
              name: { contains: query.search, mode: 'insensitive' },
            },
            {
              lastName: { contains: query.search, mode: 'insensitive' },
            },
            {
              email: { contains: query.search, mode: 'insensitive' },
            },
            {
              phone: { contains: query.search, mode: 'insensitive' },
            },
          ],
        },
      });
    }

    return this.prismaService.user.count();
  }
}
