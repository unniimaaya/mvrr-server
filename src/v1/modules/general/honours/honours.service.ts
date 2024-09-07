import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { HonourDto } from './dto/honours.dto';

@Injectable()
export class HonoursService {
  constructor(private prisma: PrismaService) {}

  async createHonour(dto: HonourDto) {
    try {
      const data = await this.prisma.honours_v1.create({
        data: dto,
      });
      return { data: data, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async updateHonour(dto: HonourDto, honourId: number) {
    try {
      const updatedata = await this.prisma.honours_v1.update({
        where:{
            honour_id:honourId
        },
        data:dto
      })
      return { data: updatedata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }
  async getOneHonour(honourId: number) {
    try {
      const getdata = await this.prisma.honours_v1.findFirst({
        where: {
       honour_id:honourId
        },
      });
      return { data: getdata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async getAllHonours() {
    try {
      const getAllData = await this.prisma.honours_v1.findMany();
      return { data: getAllData, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }
  
}
