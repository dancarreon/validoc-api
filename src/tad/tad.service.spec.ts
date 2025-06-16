import { Test, TestingModule } from '@nestjs/testing';
import { TadService } from './tad.service';

describe('TadService', () => {
  let service: TadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TadService],
    }).compile();

    service = module.get<TadService>(TadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
