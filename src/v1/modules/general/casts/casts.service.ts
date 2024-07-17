import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CastsDto } from './dto/casts.dto';

@Injectable()
export class CastsService {
  constructor(private prisma: PrismaService) {}

  async createCasts(dto: CastsDto) {
    try {
      const castdata = await this.prisma.casts_v1.create({
        data: dto,
      });
      return { data: castdata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async updateCasts(dto: CastsDto, castsId: number) {
    try {
      const updatedata = await this.prisma.casts_v1.update({
        where: {
          cast_id:castsId
        },
        data: dto,
      });
      return { data: updatedata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async getOneCasts(castId: number) {
    try {
      const getdata = await this.prisma.casts_v1.findFirst({
        where: {
         cast_id:castId
        },
      });
      return { data: getdata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async getAllCasts() {
    try {
      const getAllData = await this.prisma.casts_v1.findMany();
      return { data: getAllData, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }
}
