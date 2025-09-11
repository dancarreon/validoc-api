import { Test, TestingModule } from '@nestjs/testing';
import { ConsecutivosController } from './consecutivos.controller';
import { ConsecutivosService } from './consecutivos.service';

describe('ConsecutivosController', () => {
  let controller: ConsecutivosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsecutivosController],
      providers: [ConsecutivosService],
    }).compile();

    controller = module.get<ConsecutivosController>(ConsecutivosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
