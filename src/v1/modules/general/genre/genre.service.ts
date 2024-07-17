import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { GenreDto } from './dto/genre.dto';

@Injectable()
export class GenreService {
  constructor(private prisma: PrismaService) {}
  async createGenre(dto: GenreDto) {
    try {
      const creategenre = await this.prisma.movie_genre_v1.create({
        data: dto,
      });
      return { data: creategenre, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
  async updateGenre(dto: GenreDto, genreId: number) {
    try {
      const updategenre = await this.prisma.movie_genre_v1.update({
        where: {
          genre_id: genreId,
        },
        data: dto,
      });
      return { data: updategenre, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
  async getGenre(genreId: number) {
    try {
      const getgenre = await this.prisma.movie_genre_v1.findFirst({
        where: {
          genre_id: genreId,
        },
      });
      return { data: getgenre, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
  async getAllGenre() {
    try {
      const getAllgenre = await this.prisma.movie_genre_v1.findMany();
      return { data: getAllgenre, err: null };
    } catch (err) {
      return { data: null, err: err };
    }
  }
}
