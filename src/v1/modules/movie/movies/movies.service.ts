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
      });
      return { data: getmovie, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
  async getAllmovie() {
    try {
      const getallmovie = await this.prisma.movies_v1.findMany();
      return { data: getallmovie, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
}
