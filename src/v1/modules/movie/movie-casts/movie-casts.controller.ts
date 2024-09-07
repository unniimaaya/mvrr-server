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
import { MovieCastsService } from './movie-casts.service';
import { MovieCastsDto } from './dto/movie-casts.dto';

@Controller('movie-casts')
export class MovieCastsController {
  constructor(private movieCastService: MovieCastsService) {}

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async createMovieCasts(@Body() dto: MovieCastsDto) {
    dto.movie_cast_created_at = new Date();
    dto.movie_cast_updated_at = new Date();
    dto.movie_cast_created_by = 1;
    dto.movie_cast_updated_by = 1;
    const { data, err } = await this.movieCastService.createMovieCasts(dto);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return data;
  }

  @Patch(':moviecastId')
  @HttpCode(HttpStatus.OK)
  async updateMoviecasts(
    @Param('moviecastId', ParseIntPipe) moviecastId: number,
    @Body() dto: MovieCastsDto,
  ) {
    dto.movie_cast_updated_at=new Date()
    dto.movie_cast_updated_by=1
    const {data,err}= await this.movieCastService.updateMovieCasts(dto,moviecastId)
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return data;
  }

  @Get(':moviecastId')
  @HttpCode(HttpStatus.OK)
  async getmovieCast(@Param('moviecastId', ParseIntPipe) moviecastId: number) {
    const { data, err } = await this.movieCastService.getOneMovieCasts(moviecastId);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
  // api to get all language
 
  @Get('')
  @HttpCode(HttpStatus.OK)
  async getAllMovieCasts() {
    const { data, err } = await this.movieCastService.getAllMovieCasts();
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }  
}
