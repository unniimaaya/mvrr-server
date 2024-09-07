import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { MovieGenreService } from './movie-genre.service';
import { MovieGenreDto } from './dto/movie-genre.dto';

@Controller('movie-genre')
export class MovieGenreController {
    constructor(private moviegenreservice:MovieGenreService){}

    @Post('')
    @HttpCode(HttpStatus.CREATED)
    async createMovieCasts(@Body() dto: MovieGenreDto) {
      dto.movie_genre_created_at = new Date();
      dto.movie_genre_updated_at = new Date();
      dto.movie_genre_created_by = 1;
      dto.movie_genre_updated_by = 1;
      const { data, err } = await this.moviegenreservice.createMoviegenre(dto);
      if (err) {
        throw new HttpException('failed', HttpStatus.BAD_REQUEST);
      }
      return data;
    }
}
