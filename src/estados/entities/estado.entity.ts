import { TadDireccion } from '../../tad/entities/tad.entity';

export class Estado {
  id: string;
  nombre: string;
  createdAt: Date;
  updatedAt: Date;
  tadDireccion: TadDireccion;
}
