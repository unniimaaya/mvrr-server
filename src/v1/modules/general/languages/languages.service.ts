import { Injectable } from '@nestjs/common';
import { LanguageDto } from './dto/languages.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LanguagesService {
  // add prisma in to languageservice
  constructor(private prisma: PrismaService) {}

  //   create language
  async createLanguage(dto: LanguageDto) {
    try {
      const language = await this.prisma.languages_v1.create({
        data: dto,
      });
      return { data: language, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }
  //  update language
  async updateLanguage(dto: LanguageDto, languageId: number) {
    try {
      const updatelanguage = await this.prisma.languages_v1.update({
        where: {
          language_id: languageId,
        },
        data: dto,
      });
      return { data: updatelanguage, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
  // get all the languages
  async getAllLanguage() {
    try {
      const allLanguage = await this.prisma.languages_v1.findMany();
// console.log(allLanguage);

      return { data: allLanguage, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
  //  getone languages

  async getLanguage(languageId: number) {
    try {
      const getLanguage = await this.prisma.languages_v1.findFirst({
        where: {
          language_id: languageId,
        },
      });
      return { data: getLanguage, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
}
