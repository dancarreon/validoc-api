import { Status, Template } from '@prisma/client';
import { IsEnum, IsString, IsUUID } from 'class-validator';
import { Exclude } from 'class-transformer';
import { TemplateFieldDto } from './template-field.dto';

export class TemplateDto implements Template {
  constructor(partial: Partial<TemplateDto>) {
    Object.assign(this, partial);
  }

  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @Exclude()
  createdAt: Date;

  @Exclude()
  updatedAt: Date;

  @IsEnum(Status)
  status: Status = Status.ACTIVE;

  fields: TemplateFieldDto[];

  pdfFile: string | null;
}

export type CreateTemplateDto = Omit<
  TemplateDto,
  'id' | 'createdAt' | 'updatedAt'
>;

export type UpdateTemplateDto = Omit<
  TemplateDto,
  'id' | 'createdAt' | 'updatedAt'
>;
