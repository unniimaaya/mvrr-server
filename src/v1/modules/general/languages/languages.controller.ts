import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguageDto } from './dto/languages.dto';

@Controller('v1/general/language')
export class LanguagesController {
  constructor(private languageservice: LanguagesService) {}
  // api to create language
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async createLanguage(@Body() dto: LanguageDto) {
    dto.language_created_at = new Date();
    dto.language_updated_at = new Date();
    dto.language_created_by = 1;
    dto.language_updated_by = 1;
    const { data, err } = await this.languageservice.createLanguage(dto);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
  // api to update language
  @Patch(':languageId')
  @HttpCode(HttpStatus.OK)
  async updateLanguage(
    @Body() dto: LanguageDto,
    @Param('languageId', ParseIntPipe) languageId: number,
  ) {
    dto.language_updated_at = new Date();
    dto.language_updated_by = 1;
    const { data, err } = await this.languageservice.updateLanguage(
      dto,
      languageId,
    );
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
  // api to get one language
  @Get(':languageId')
  @HttpCode(HttpStatus.OK)
  async getLanguage(@Param('languageId', ParseIntPipe) languageId: number) {
    const { data, err } = await this.languageservice.getLanguage(languageId);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
  // api to get all language
  @Get('')
  @HttpCode(HttpStatus.OK)
  async getAllLanguage() {
    const { data, err } = await this.languageservice.getAllLanguage();
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
}
