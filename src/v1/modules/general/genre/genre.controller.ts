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
import { GenreService } from './genre.service';
import { GenreDto } from './dto/genre.dto';

@Controller('v1/general/genre')
export class GenreController {
  constructor(private genreservice: GenreService) {}

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async createGenre(@Body() dto: GenreDto) {
    dto.genre_created_at = new Date();
    dto.genre_updated_at = new Date();
    dto.genre_created_by = 1;
    dto.genre_updated_by = 1;
    // dto.genre_status = 1;

    const { data, err } = await this.genreservice.createGenre(dto);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
@Patch(':genreId')
@HttpCode(HttpStatus.OK)
async updateGenre(@Body() dto:GenreDto,
@Param('genreId',ParseIntPipe) genreId:number,){
dto.genre_updated_at=new Date()
dto.genre_updated_by= 1
const {data,err}= await this.genreservice.updateGenre(dto,genreId)
if(err){
    throw new HttpException("failed",HttpStatus.BAD_REQUEST)
}
return{data}
}
@Get(':genreId')
@HttpCode(HttpStatus.OK)
async getOneGenre(@Param('genreId',ParseIntPipe) genreId:number ){
const {data,err}= await this.genreservice.getGenre(genreId)
if (err) {
  throw new HttpException('failed', HttpStatus.BAD_REQUEST);
}
return { data };
}

@Get('')
@HttpCode(HttpStatus.OK)
async getAllGenres() {
  const { data, err } = await this.genreservice.getAllGenre();
  if (err) {
    throw new HttpException('failed to fetch data', HttpStatus.BAD_REQUEST);
  }
  return { data };
}
}
