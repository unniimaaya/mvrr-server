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
import { MoviesService } from './movies.service';
import { MovieDto } from './dto/movies.dto';

@Controller('v1/movie/movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  // api to create movie
  @Post('')
  @HttpCode(HttpStatus.CREATED) //statuscode of creation
  async createMovies(@Body() dto: MovieDto) {
    dto.movie_created_at = new Date();
    dto.movie_updated_at = new Date();
    dto.movie_created_by = 1;
    dto.movie_updated_by = 1;
    const { data, err } = await this.moviesService.createMovie(dto);
    // if err
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }

    return { data }; // success
  }
  // api to update the movies
  @Patch(':movieId')
  @HttpCode(HttpStatus.CREATED)
  async updateMovies(
    @Body() dto: MovieDto,
    @Param('movieId', ParseIntPipe) movieId: number,
  ) {
    dto.movie_updated_at=new Date()
    dto.movie_updated_by=1
    const { data, err } = await this.moviesService.updateMovie(dto, movieId);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
// api to get one movie 
@Get(':movieId')
@HttpCode(HttpStatus.CREATED)
async getOneMovie(@Param('movieId',ParseIntPipe ) movieId:number){
    const {data,err}= await this.moviesService.getMovie(movieId)
    if(err){
        throw new HttpException('failed',HttpStatus.BAD_REQUEST)
    }
    return {data}
}

   // api to getall the movies
   @Get('')
   @HttpCode(HttpStatus.CREATED)
   async getAllMovies(){
const {data,err}= await this.moviesService.getAllmovie()
if (err) {
    throw new HttpException('failed', HttpStatus.BAD_REQUEST);
  }
  return { data };
   }
}
