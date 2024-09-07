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
import { MovieAwardsService } from './movie-awards.service';
import { MovieAwardsDto } from './dto/movie-awards.dto';

@Controller('v1/movie/movie-awards')
export class MovieAwardsController {
  constructor(private movieAwardsservice: MovieAwardsService) {}

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async Createmovielanguage(@Body() dto: MovieAwardsDto) {
    dto.movie_award_created_at = new Date();
    dto.movie_award_updated_at = new Date();
    dto.movie_award_created_by = 1;
    dto.movie_award_updated_by = 1;

    const { data, err } = await this.movieAwardsservice.createMovieAwards(dto);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return data;
  }


  @Patch('')
  @HttpCode(HttpStatus.OK)
  async updateMovieAwards(
    @Param('movieAwardId', ParseIntPipe) movieAwardId: number,
    @Body() dto: MovieAwardsDto,
  ) {
dto.movie_award_updated_at= new Date()
dto.movie_award_updated_by=1
    const {data,err}= await this.movieAwardsservice.updateMovieAwards(dto,movieAwardId)
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return data;
  }

  @Get(':movieAwardId')
  @HttpCode(HttpStatus.OK)
  async getmovieAward(@Param('movieAwardId', ParseIntPipe) movieAwardId: number) {
    const { data, err } = await this.movieAwardsservice.getOnemovieAward(movieAwardId);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
  // api to get all language
 
  @Get('')
  @HttpCode(HttpStatus.OK)
  async getmovieAllLanguage() {
    const { data, err } = await this.movieAwardsservice.getAllMovieAwards();
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
}
