import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MovieLanguagesDto } from './dto/movie-languages.dto';

@Injectable()
export class MovieLanguagesService {
  constructor(private prisma: PrismaService) {}

  async createlanguageService(dto: MovieLanguagesDto) {
    try {
      const data = await this.prisma.movie_languages_v1.create({
        data: dto,
      });
      return { data: data, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async getOnelanguageService(movieLangId:number){
    try{
    const data= await this.prisma.movie_languages_v1.findFirst({
        where:{
          movie_lang_id:movieLangId  
        }
    })
    return { data: data, err: null };
    }
    catch(err){
      return { data: null, err: err };
    }
  }

  async getAllLanguageService(){
    try{
const data= await this.prisma.movie_languages_v1.findMany()
    }
    catch(err) {

    }
  }
}
