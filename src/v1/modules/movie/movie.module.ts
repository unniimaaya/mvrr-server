import { Module } from '@nestjs/common';
import { MoviesService } from './movies/movies.service';
import { MoviesController } from './movies/movies.controller';
// import { LanguagesController } from '../general/casts/languages/languages.controller';
// import { LanguagesService } from '../general/casts/languages/languages.service';
import { PrismaService } from '../prisma/prisma.service';
import { GenreService } from '../general/genre/genre.service';
import { GenreController } from '../general/genre/genre.controller';
// import { CastsService } from '../general/casts/casts.service';
// import { CastsController } from '../general/casts/casts.controller';
import { MovieLanguagesService } from './movie-languages/movie-languages.service';
import { MovieLanguagesController } from './movie-languages/movie-languages.controller';
import { MovieCastsService } from './movie-casts/movie-casts.service';
import { MovieCastsController } from './movie-casts/movie-casts.controller';
import { MovieGenreController } from './movie-genre/movie-genre.controller';
import { MovieGenreService } from './movie-genre/movie-genre.service';



@Module({
  providers: [MoviesService,PrismaService, MovieLanguagesService, MovieCastsService, MovieGenreService,],
  controllers: [MoviesController, MovieLanguagesController, MovieCastsController, MovieGenreController]
})
export class MovieModule {}
