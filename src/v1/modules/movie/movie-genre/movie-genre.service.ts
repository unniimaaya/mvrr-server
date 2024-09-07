import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MovieGenreDto } from './dto/movie-genre.dto';

@Injectable()
export class MovieGenreService {
  constructor(private prisma: PrismaService) {}

  async createMoviegenre(dto: MovieGenreDto) {
    try {
      const createdata = await this.prisma.movie_genre_v1.create({
        data: dto,
      });
      return { data: createdata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async updateMoviegenre(dto: MovieGenreDto, movieGenreId: number) {
    try {
      const updateData = await this.prisma.movie_genre_v1.update({
        where: {
         movie_genre_id:movieGenreId
        },
        data: dto,
      });
      return { data: updateData, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }

  async getOneMovieGenre(movieGenreId: number) {
    try {
      const getoneData = await this.prisma.movie_genre_v1.findFirst({
        where: {
         movie_genre_id:movieGenreId
        },
      });
      return { data: getoneData, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }

  async getAllMovieGenre() {
    try {
      const getAllData = await this.prisma.movie_genre_v1.findMany();
      return { data: getAllData, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
}
