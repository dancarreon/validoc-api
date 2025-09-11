import { Controller, Get, Logger, Query } from '@nestjs/common';
import { TotalsService } from './totals.service';
import { QueryParams } from '../common/query-params.dto';

@Controller('totals')
//@UseInterceptors(CacheInterceptor)
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

  @Get('estados')
  totalEstados(@Query() query: QueryParams): Promise<number> | null {
    try {
      return this.totalsService.totalStates(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }

  @Get('tads')
  totalTads(@Query() query: QueryParams): Promise<number> | null {
    try {
      return this.totalsService.totalTads(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }

  @Get('claves')
  totalClaves(@Query() query: QueryParams): Promise<number> | null {
    try {
      return this.totalsService.totalClaves(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }

  @Get('razones')
  totalRazones(@Query() query: QueryParams): Promise<number> | null {
    try {
      return this.totalsService.totalRazones(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }

  @Get('productos')
  totalProductos(@Query() query: QueryParams): Promise<number> | null {
    try {
      return this.totalsService.totalProductos(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }

  @Get('transportistas')
  totalTransportistas(@Query() query: QueryParams): Promise<number> | null {
    try {
      return this.totalsService.totalTransportistas(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }

  @Get('trazas')
  totalTrazas(@Query() query: QueryParams): Promise<number> | null {
    try {
      return this.totalsService.totalTrazas(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }

  @Get('templates')
  totalTemplates(@Query() query: QueryParams): Promise<number> | null {
    try {
      return this.totalsService.totalTemplates(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }

  @Get('clients')
  totalClients(@Query() query: QueryParams): Promise<number> | null {
    try {
      return this.totalsService.totalClients(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }

  @Get('solicitantes')
  totalSolictantes(@Query() query: QueryParams): Promise<number> | null {
    try {
      return this.totalsService.totalSolictantes(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }

  @Get('consecutivos')
  totalConsecutivos(@Query() query: QueryParams): Promise<number> | null {
    try {
      return this.totalsService.totalConsecutivos(query);
    } catch (error) {
      this.logger.error(error);
      return null;
    }
  }
}
