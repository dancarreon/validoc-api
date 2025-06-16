import { Test, TestingModule } from '@nestjs/testing';
import { TrazaService } from './traza.service';

describe('TrazaService', () => {
  let service: TrazaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrazaService],
    }).compile();

    service = module.get<TrazaService>(TrazaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
