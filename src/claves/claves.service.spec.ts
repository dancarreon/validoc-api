import { Test, TestingModule } from '@nestjs/testing';
import { ClavesService } from './claves.service';

describe('ClavesService', () => {
  let service: ClavesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClavesService],
    }).compile();

    service = module.get<ClavesService>(ClavesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
