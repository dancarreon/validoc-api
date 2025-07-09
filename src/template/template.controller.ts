import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { TemplateService } from './template.service';
import {
  CreateTemplateDto,
  TemplateDto,
  UpdateTemplateDto,
} from './dto/template.dto';
import { QueryParams } from '../common/query-params.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express, Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Controller('templates')
export class TemplateController {
  private logger = new Logger(TemplateController.name);

  constructor(private readonly templateService: TemplateService) {}

  @Post()
  async create(@Body() createTemplateDto: CreateTemplateDto) {
    try {
      return this.templateService.create(createTemplateDto);
    } catch (error) {
      this.logger.error(`Error creating template: ${error}`);
      throw new Error('Error creating template');
    }
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<string> {
    try {
      return this.templateService.uploadPdfFile(file);
    } catch (error) {
      this.logger.error(`Error uploading file: ${error}`);
      throw new Error('Error uploading file');
    }
  }

  @Get('file/:fileName')
  getFile(@Res() res: Response, @Param('fileName') fileName: string) {
    try {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        'inline; filename="' + fileName + '"',
      );

      const filePath = path.join(
        process.cwd(),
        'uploads',
        'documents',
        fileName,
      );

      if (fs.existsSync(filePath)) {
        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
      } else {
        this.logger.error(`File ${filePath} not found`);
        res.status(404).send('File not found');
      }
    } catch (error) {
      this.logger.error(`Error retrieving file ${fileName}: ${error}`);
      throw new Error('Error retrieving file');
    }
  }

  @Get()
  async findAll(@Query() query: QueryParams) {
    try {
      const templates = await this.templateService.findAll(query);
      return templates.map((template) => new TemplateDto(template));
    } catch (error) {
      this.logger.error(error);
      return [];
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return new TemplateDto(await this.templateService.findOne(id));
    } catch (error) {
      this.logger.error(`Error finding template with id ${id}:`, error);
      return { error: 'Template not found' };
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTemplateDto: UpdateTemplateDto,
  ) {
    return new TemplateDto(
      await this.templateService.update(id, updateTemplateDto),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new TemplateDto(await this.templateService.remove(id));
  }
}
