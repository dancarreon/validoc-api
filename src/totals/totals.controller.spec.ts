import { Test, TestingModule } from '@nestjs/testing';
import { TotalsController } from './totals.controller';
import { TotalsService } from './totals.service';

describe('TotalsController', () => {
  let controller: TotalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TotalsController],
      providers: [TotalsService],
    }).compile();

    controller = module.get<TotalsController>(TotalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
