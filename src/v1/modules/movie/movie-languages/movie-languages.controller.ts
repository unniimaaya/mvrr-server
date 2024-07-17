import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { MovieLanguagesService } from './movie-languages.service';
import { MovieLanguagesDto } from './dto/movie-languages.dto';

@Controller('v1/movie/movie-languages')
export class MovieLanguagesController {
   constructor(private movielanguageservice:MovieLanguagesService ) {}

@Post('')
@HttpCode(HttpStatus.CREATED)
async Createmovielanguage(@Body()dto:MovieLanguagesDto  ){
  dto.movie_lang_created_at =new Date()
  dto.movie_lang_updated_at= new Date()
  dto.movie_lang_created_by=1
  dto.movie_lang_updated_by=1
  const {data,err}= await this.movielanguageservice.createlanguageService(dto)
  if(err){
    throw new HttpException("failed",HttpStatus.BAD_REQUEST)
  }
  return data
}



}
