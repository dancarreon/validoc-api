import { Test, TestingModule } from '@nestjs/testing';
import { RazonesController } from './razones.controller';
import { RazonesService } from './razones.service';

describe('RazonesController', () => {
  let controller: RazonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RazonesController],
      providers: [RazonesService],
    }).compile();

    controller = module.get<RazonesController>(RazonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
