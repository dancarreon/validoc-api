import { Test, TestingModule } from '@nestjs/testing';
import { TransportistasService } from './transportistas.service';

describe('TransportistasService', () => {
  let service: TransportistasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportistasService],
    }).compile();

    service = module.get<TransportistasService>(TransportistasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
