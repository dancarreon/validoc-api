import { Controller, Get } from '@nestjs/common';
import { TransportistasService } from '../transportistas/transportistas.service';

@Controller('random')
export class RandomController {
  constructor(private readonly transportistasService: TransportistasService) {}

  @Get('/transportista')
  async getRandomTransportista() {
    return await this.transportistasService.getRandomTransportista();
  }
}
