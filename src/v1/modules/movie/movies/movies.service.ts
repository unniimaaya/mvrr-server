import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MovieDto } from './dto/movies.dto';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async createMovie(dto: MovieDto) {
    try {
      const movie = await this.prisma.movies_v1.create({
        data: dto,
      });
      console.log(movie);

      return { data: movie, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
  async updateMovie(dto: MovieDto, movieId: number) {
    try {
      const updateMovie = await this.prisma.movies_v1.update({
        where: {
          movie_id: movieId,
        },
        data: dto,
      });
      return { data: updateMovie, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }

  async getMovie(movieId: number) {
    try {
      const getmovie = await this.prisma.movies_v1.findFirst({
        where: {
          movie_id: movieId,
        },
        include: {
          movie_casts_v1:{
            select:{
              casts_v1:{
                select:{
                  cast_id:true,
                  cast_name:true
                }
              }
            }
          },
          movie_languages_v1: {
            select: {
              languages_v1: {
                select: {
                  language_id: true,
                  language_name: true,
                },
              },
            },
          },
        },
      });
      return { data: getmovie, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
  async getAllmovie() {
    try {
      const getallmovie = await this.prisma.movies_v1.findMany({
        include: {
          movie_languages_v1: {
            select: {
              languages_v1: {
                select: {
                  language_id: true,
                  language_name: true,
                },
              },
            },
          },
          
          
        },
      });
      return { data: getallmovie, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
}
