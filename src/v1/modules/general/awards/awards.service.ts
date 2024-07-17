import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AwardsDto } from './dto/awards.dto';

@Injectable()
export class AwardsService {
  constructor(private prisma: PrismaService) {}

  async createAward(dto: AwardsDto) {
    try {
      const createData = await this.prisma.awards_v1.create({
        data: dto,
      });
      return { data: createData, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async updateAward(dto: AwardsDto, awardId: number) {
    try {
      const updatedata = await this.prisma.awards_v1.update({
        where: {
          award_id:awardId
        },
        data: dto,
      });
      return { data: updatedata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async getOneAward(awardId: number) {
    try {
      const getdata = await this.prisma.awards_v1.findFirst({
        where: {
        award_id:awardId
        },
      });
      return { data: getdata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async getAllAwards() {
    try {
      const getAllData = await this.prisma.awards_v1.findMany();
      return { data: getAllData, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }
}
