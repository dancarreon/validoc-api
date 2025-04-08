import { Test, TestingModule } from '@nestjs/testing';
import { TadController } from './tad.controller';
import { TadService } from './tad.service';

describe('TadController', () => {
  let controller: TadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TadController],
      providers: [TadService],
    }).compile();

    controller = module.get<TadController>(TadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
