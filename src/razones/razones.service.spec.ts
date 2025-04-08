import { Test, TestingModule } from '@nestjs/testing';
import { RazonesService } from './razones.service';

describe('RazonesService', () => {
  let service: RazonesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RazonesService],
    }).compile();

    service = module.get<RazonesService>(RazonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
