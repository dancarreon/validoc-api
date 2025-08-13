import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Status, TipoTraza, Traza } from '@prisma/client';
import { Exclude, Transform } from 'class-transformer';

export class TrazaDto implements Traza {
  constructor(partial: Partial<TrazaDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @IsEnum(Status)
  tipoTraza: TipoTraza = TipoTraza.NACIONAL;

  @IsUUID()
  @IsNotEmpty()
  tadDireccionId: string | null;

  @IsUUID()
  @IsNotEmpty()
  claveConcentradoraId: string | null;

  @IsUUID()
  @IsNotEmpty()
  razonSocialComercialId: string | null;

  @IsUUID()
  @IsNotEmpty()
  productoId: string | null;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => (value ? Number(value) : null))
  capAutotanque1: number | null;

  @IsOptional()
  @IsNumber()
  capAutotanque2: number | null;

  @IsOptional()
  @IsNumber()
  capAutotanque3: number | null;

  @IsOptional()
  @IsNumber()
  capAutotanque4: number | null;

  @IsOptional()
  @IsNumber()
  litrosTotales: number | null;

  @IsOptional()
  @IsNumber()
  precioLitro: number | null;

  @IsOptional()
  @IsString()
  destino: string | null;

  @IsOptional()
  @IsString()
  sello1Autotanque1: string | null;

  @IsOptional()
  @IsString()
  sello2Autotanque1: string | null;

  @IsOptional()
  @IsString()
  sello1Autotanque2: string | null;

  @IsOptional()
  @IsString()
  sello2Autotanque2: string | null;

  @IsOptional()
  @IsString()
  nombreTransportista: string | null;

  @IsOptional()
  @IsString()
  nombreOperador: string | null;

  @IsOptional()
  @IsString()
  fechaHoraPemex: string | null;

  @IsOptional()
  @IsString()
  fechaHoraTrasvase: string | null;

  @IsOptional()
  @IsString()
  folioPemex1: string | null;

  @IsOptional()
  @IsString()
  folioPemex2: string | null;

  @IsOptional()
  @IsString()
  folioPemex3: string | null;

  @IsOptional()
  @IsString()
  folioFiscalPemex1: string | null;

  @IsOptional()
  @IsString()
  folioFiscalPemex2: string | null;

  @IsOptional()
  @IsString()
  folioFiscalPemex3: string | null;

  @IsOptional()
  @IsString()
  folioRemisionNacional: string | null;

  @IsOptional()
  @IsString()
  folioFiscalRemisionNacional: string | null;

  @IsOptional()
  @IsString()
  folioTrasvase: string | null;

  @IsOptional()
  @IsString()
  numeroTractor: string | null;

  @IsOptional()
  @IsString()
  placasTractor: string | null;

  @IsOptional()
  @IsString()
  autotanque1: string | null;

  @IsOptional()
  @IsString()
  placasAutotanque1: string | null;

  @IsOptional()
  @IsString()
  autotanque2: string | null;

  @IsOptional()
  @IsString()
  placasAutotanque2: string | null;

  @IsOptional()
  @IsString()
  autotanque3: string | null;

  @IsOptional()
  @IsString()
  placasAutotanque3: string | null;

  @IsOptional()
  @IsString()
  folio: string | null;

  @IsOptional()
  @IsString()
  cfi: string | null;

  @IsOptional()
  @IsString()
  destinoCorto: string | null;

  @IsOptional()
  @IsString()
  numeroLicencia: string | null;

  @IsOptional()
  @IsString()
  marcaUnidad1: string | null;

  @IsOptional()
  @IsString()
  folioCartaPorte: string | null;

  @IsOptional()
  @IsString()
  folioFiscalCartaPorte: string | null;

  @IsOptional()
  @IsString()
  fechaHoraCartaPorte: string | null;

  @IsEnum(Status)
  status: Status = Status.ACTIVE;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}

export type CreateTrazaDto = Omit<TrazaDto, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateTrazaDto = Omit<TrazaDto, 'id' | 'createdAt' | 'updatedAt'>;
