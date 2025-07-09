import { TemplateField } from '@prisma/client';
import { IsNumber, IsString, IsUUID } from 'class-validator';
import { Exclude } from 'class-transformer';
import { TemplateDto } from './template.dto';

export class TemplateFieldDto implements TemplateField {
  constructor(partial: Partial<TemplateFieldDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @Exclude()
  template?: TemplateDto;

  @Exclude()
  templateId: string;

  @IsString()
  name: string;

  @IsNumber()
  x: number;

  @IsNumber()
  y: number;

  @IsNumber()
  width: number;

  @IsNumber()
  height: number;

  @IsString()
  fontFamily: string;

  @IsNumber()
  fontSize: number;

  @IsString()
  align: string;

  @IsString()
  color: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;
}
