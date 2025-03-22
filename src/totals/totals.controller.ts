import { Controller, Get, Logger, Query } from '@nestjs/common';
import { TotalsService } from './totals.service';
import { QueryParams } from '../common/query-params.dto';

@Controller('totals')
export class TotalsController {
  private logger = new Logger(TotalsController.name);

  constructor(private readonly totalsService: TotalsService) {}

  @Get('users')
  totalUsers(@Query() query: QueryParams): Promise<number> | null {
    try {
      return this.totalsService.totalUsers(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }
}
