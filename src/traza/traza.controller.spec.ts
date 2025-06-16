import { Test, TestingModule } from '@nestjs/testing';
import { TrazaController } from './traza.controller';
import { TrazaService } from './traza.service';

describe('TrazaController', () => {
  let controller: TrazaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrazaController],
      providers: [TrazaService],
    }).compile();

    controller = module.get<TrazaController>(TrazaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
