import { Test, TestingModule } from '@nestjs/testing';
import { ConsecutivosService } from './consecutivos.service';

describe('ConsecutivosService', () => {
  let service: ConsecutivosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsecutivosService],
    }).compile();

    service = module.get<ConsecutivosService>(ConsecutivosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
