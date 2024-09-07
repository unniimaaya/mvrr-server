import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MovieAwardsDto } from './dto/movie-awards.dto';

@Injectable()
export class MovieAwardsService {
  constructor(private prisma: PrismaService) {}

  async createMovieAwards(dto: MovieAwardsDto) {
    try {
      const createdata = await this.prisma.movie_awards_v1.create({
        data: dto,
      });
      return { data: createdata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async updateMovieAwards(dto: MovieAwardsDto, movieAwardId: number) {
    try {
      const updatedata = await this.prisma.movie_awards_v1.update({
        where: {
          movie_award_id: movieAwardId,
        },
        data: dto,
      });
      return { data: updatedata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async getOnemovieAward(movieAwardId: number) {
    try {
      const data = await this.prisma.movie_awards_v1.findFirst({
        where: {
         movie_award_id:movieAwardId
        },
      });
      return { data: data, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }

  async getAllMovieAwards() {
    try {
      const data = await this.prisma.movie_awards_v1.findMany();
      return { data: data, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }


}
