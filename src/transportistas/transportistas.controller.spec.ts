import { Test, TestingModule } from '@nestjs/testing';
import { TransportistasController } from './transportistas.controller';
import { TransportistasService } from './transportistas.service';

describe('TransportistasController', () => {
  let controller: TransportistasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransportistasController],
      providers: [TransportistasService],
    }).compile();

    controller = module.get<TransportistasController>(TransportistasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
