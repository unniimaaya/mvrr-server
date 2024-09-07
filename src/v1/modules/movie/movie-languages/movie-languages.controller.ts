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
import { MovieLanguagesService } from './movie-languages.service';
import { MovieLanguagesDto } from './dto/movie-languages.dto';

@Controller('v1/movie/movie-languages')
export class MovieLanguagesController {
  constructor(private movielanguageservice: MovieLanguagesService) {}

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async Createmovielanguage(@Body() dto: MovieLanguagesDto) {
    dto.movie_lang_created_at = new Date();
    dto.movie_lang_updated_at = new Date();
    dto.movie_lang_created_by = 1;
    dto.movie_lang_updated_by = 1;
    const { data, err } =
      await this.movielanguageservice.createlanguageService(dto);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return data;
  }

  @Patch('')
  @HttpCode(HttpStatus.OK)
  async updateMovieLanguage(
    @Param('movielanguageId', ParseIntPipe) movielanguageId: number,
    @Body() dto: MovieLanguagesDto,
  ) {
    dto.movie_lang_updated_at=new Date()
    dto.movie_lang_updated_by=1
    const {data,err}= await this.movielanguageservice.updatelanguageService(dto,movielanguageId)
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return data;
  }

  @Get(':movielanguageId')
  @HttpCode(HttpStatus.OK)
  async getmovieLanguage(@Param('movielanguageId', ParseIntPipe) movielanguageId: number) {
    const { data, err } = await this.movielanguageservice.getOnelanguageService(movielanguageId);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
  // api to get all language
 
  @Get('')
  @HttpCode(HttpStatus.OK)
  async getmovieAllLanguage() {
    const { data, err } = await this.movielanguageservice.getAllLanguageService();
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }

}
