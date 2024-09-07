import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MovieCastsDto } from './dto/movie-casts.dto';

@Injectable()
export class MovieCastsService {
  constructor(private prisma: PrismaService) {}

  async createMovieCasts(dto: MovieCastsDto) {
    try {
      const createdata = await this.prisma.movie_casts_v1.create({
        data: dto,
      });
      return { data: createdata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async updateMovieCasts(dto: MovieCastsDto, movieCastId: number) {
    try {
      const updateData = await this.prisma.movie_casts_v1.update({
        where: {
          movie_cast_id: movieCastId,
        },
        data: dto,
      });
      return { data: updateData, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }

  async getOneMovieCasts(movieCastId: number) {
    try {
      const getoneData = await this.prisma.movie_casts_v1.findFirst({
        where: {
          movie_cast_id: movieCastId,
        },
      });
      return { data: getoneData, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }

  async getAllMovieCasts() {
    try {
      const getAllData = await this.prisma.movie_casts_v1.findMany();
      return { data: getAllData, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
}
