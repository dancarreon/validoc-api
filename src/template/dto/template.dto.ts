import { Status, Template } from '@prisma/client';
import { IsEnum, IsNumber, IsString, IsUUID } from 'class-validator';
import { Exclude } from 'class-transformer';
import { TemplateFieldDto } from './template-field.dto';
import { QrFieldDto } from './qr-field.dto';

export class TemplateDto implements Template {
  constructor(partial: Partial<TemplateDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsEnum(Status)
  status: Status = Status.ACTIVE;

  fields: TemplateFieldDto[];

  qrField: QrFieldDto[];

  @IsString()
  pdfFile: string | null;

  @IsNumber()
  containerWidth: number;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}

export type CreateTemplateDto = Omit<
  TemplateDto,
  'id' | 'createdAt' | 'updatedAt'
>;

export type UpdateTemplateDto = Omit<TemplateDto, 'createdAt'>;
