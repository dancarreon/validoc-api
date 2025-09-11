import { QRField } from '@prisma/client';
import { IsString, IsUUID } from 'class-validator';
import { Exclude } from 'class-transformer';
import { TemplateDto } from './template.dto';

export class QrFieldDto implements QRField {
  constructor(partial: Partial<QrFieldDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @IsString()
  qrData: string | null;

  @IsString()
  qrSize: string | null;

  @IsString()
  qrColor: string | null;

  @IsString()
  qrBackgroundColor: string | null;

  @IsString()
  qrErrorCorrectionLevel: string | null;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  template?: TemplateDto;

  @Exclude()
  templateId: string;
}
