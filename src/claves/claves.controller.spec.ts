import { Test, TestingModule } from '@nestjs/testing';
import { ClavesController } from './claves.controller';
import { ClavesService } from './claves.service';

describe('ClavesController', () => {
  let controller: ClavesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClavesController],
      providers: [ClavesService],
    }).compile();

    controller = module.get<ClavesController>(ClavesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
