import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { DirectorsDto } from './dto/directors.dto';

@Injectable()
export class DirectorsService {
  constructor(private prisma: PrismaService) {}

  async createDirector(dto: DirectorsDto) {
    try {
      const data = this.prisma.movie_directors_v1.create({
        data: dto,
      });
      return { data: data, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async updateDirector(dto: DirectorsDto, directorId: number) {
    try {
      const updatedata = await this.prisma.directors_v1.update({
        where: {
          director_id:directorId
        },
        data: dto,
      });
      return { data: updatedata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async getOneDirector(directorId: number) {
    try {
      const getdata = await this.prisma.directors_v1.findFirst({
        where: {
         director_id:directorId
        },
      });
      return { data: getdata, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }

  async getAlldirectors() {
    try {
      const getAllData = await this.prisma.directors_v1.findMany();
      return { data: getAllData, err: null };
    } catch (err) {
      console.log(err);
      return { data: null, err: err };
    }
  }
}
