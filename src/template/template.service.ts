import { Injectable, Logger } from '@nestjs/common';
import { CreateTemplateDto, UpdateTemplateDto } from './dto/template.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryParams } from '../common/query-params.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TemplateService {
  private logger = new Logger(TemplateService.name);

  constructor(private prismaService: PrismaService) {}

  async create(createTemplateDto: CreateTemplateDto) {
    this.logger.log(
      `Creating a new Template with name ${createTemplateDto.name}`,
    );
    return this.prismaService.template.create({
      data: {
        ...createTemplateDto,
        fields: createTemplateDto.fields
          ? { create: createTemplateDto.fields }
          : undefined,
        qrField: createTemplateDto.qrField
          ? { create: createTemplateDto.qrField }
          : undefined,
      },
    });
  }

  async uploadPdfFile(file: Express.Multer.File): Promise<string> {
    this.logger.log(`Uploading PDF file: ${file.originalname}`);
    const uploadDir = path.join(process.cwd(), 'uploads', 'documents');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const filePath = path.join(uploadDir, file.originalname);
    await fs.promises.writeFile(filePath, file.buffer);
    return file.originalname;
  }

  async findAll(query: QueryParams) {
    this.logger.log('Fetching all templates');
    if (query.search) {
      return this.prismaService.template.findMany({
        take: query.size,
        skip: query.page * query.size,
        include: {
          fields: true,
          qrField: true,
        },
        where: {
          OR: [{ name: { contains: query.search, mode: 'insensitive' } }],
        },
        orderBy: query.orderAndSort || [{ name: 'asc' }],
      });
    } else {
      return this.prismaService.template.findMany({
        take: query.size,
        skip: query.page * query.size,
        include: {
          fields: true,
          qrField: true,
        },
        where: {},
        orderBy: query.orderAndSort || [{ name: 'asc' }],
      });
    }
  }

  async findOne(id: string) {
    this.logger.log(`Fetching template with id ${id}`);
    try {
      return await this.prismaService.template.findUniqueOrThrow({
        where: { id },
        include: {
          fields: true,
          qrField: true,
        },
      });
    } catch (error) {
      this.logger.error(`Error fetching template with id ${id}`, error);
      throw new Error(`Template with id ${id} not found`);
    }
  }

  async update(id: string, updateTemplateDto: UpdateTemplateDto) {
    this.logger.log(
      `Updating template with id ${id} with data: ${JSON.stringify(updateTemplateDto)}`,
    );
    try {
      return this.prismaService.template.update({
        where: { id },
        data: {
          name: updateTemplateDto.name,
          status: updateTemplateDto.status,
          pdfFile: updateTemplateDto.pdfFile,
          containerWidth: updateTemplateDto.containerWidth,
          updatedAt: new Date(),
          fields: {
            upsert:
              updateTemplateDto.fields?.map((field) => ({
                where: { id: field.id || '' },
                create: field,
                update: field,
              })) || [],
            deleteMany: {
              id: {
                notIn: updateTemplateDto.fields?.map((field) => field.id) || [],
              },
            },
          },
          qrField: {
            upsert:
              updateTemplateDto.qrField?.map((field) => ({
                where: { id: field.id || '' },
                create: field,
                update: field,
              })) || [],
            deleteMany: {
              id: {
                notIn:
                  updateTemplateDto.qrField?.map((field) => field.id) || [],
              },
            },
          },
        },
      });
    } catch (error) {
      this.logger.error(`Error updating template with id ${id}`, error);
      throw new Error(`Template with id ${id} not found or update failed`);
    }
  }

  async remove(id: string) {
    this.logger.log(`Removing template with id ${id}`);
    try {
      return this.prismaService.template.delete({
        where: { id },
      });
    } catch (error) {
      this.logger.error(`Error removing template with id ${id}`, error);
      throw new Error(`Template with id ${id} not found or delete failed`);
    }
  }

  getPdfFile(fileName: string) {
    this.logger.log(`Retrieving PDF file: ${fileName}`);
    const filePath = path.join(process.cwd(), 'uploads', 'documents', fileName);
    if (!fs.existsSync(filePath)) {
      throw new Error('File not found');
    }
    return fs.promises.readFile(filePath);
  }
}
