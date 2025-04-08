import { Estado } from '../../estados/entities/estado.entity';

export class TadDireccion {
  id: string;
  ciudad: string;
  estado: Estado;
  estadoId: string;
  createdAt: Date;
  updatedAt: Date;
}
