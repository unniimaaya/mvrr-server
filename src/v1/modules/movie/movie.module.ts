import { Module } from '@nestjs/common';
import { MoviesService } from './movies/movies.service';
import { MoviesController } from './movies/movies.controller';
import { LanguagesController } from './languages/languages.controller';
import { LanguagesService } from './languages/languages.service';
import { PrismaService } from '../prisma/prisma.service';
import { GenreService } from './genre/genre.service';
import { GenreController } from './genre/genre.controller';
import { CastsService } from './casts/casts.service';
import { CastsController } from './casts/casts.controller';



@Module({
  providers: [MoviesService, LanguagesService,PrismaService, GenreService, CastsService],
  controllers: [MoviesController, LanguagesController, GenreController, CastsController]
})
export class MovieModule {}
