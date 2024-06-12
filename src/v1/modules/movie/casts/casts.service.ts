import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CastsDto } from './dto/casts.dto';

@Injectable()
export class CastsService {
  constructor(private prisma: PrismaService) {}

  async createCasts(dto: CastsDto) {
    try {
      const movieCasts = await this.prisma.movie_casts_v1.create({
        data: dto,
      });
      return { data: movieCasts, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async updateCasts(dto: CastsDto, moviecastsId: number) {
    try {
      const updatedata = await this.prisma.movie_casts_v1.update({
        where: {
          mc_id: moviecastsId,
        },
        data: dto,
      });
      return { data: updatedata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }
}
