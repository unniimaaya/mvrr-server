import { Module } from '@nestjs/common';
import { CastsService } from './casts/casts.service';
import { PrismaService } from '../prisma/prisma.service';
import { LanguagesService } from './languages/languages.service';
import { CastsController } from './casts/casts.controller';
import { LanguagesController } from './languages/languages.controller';
import { AwardsService } from './awards/awards.service';
import { AwardsController } from './awards/awards.controller';
import { GenreService } from './genre/genre.service';
import { GenreController } from './genre/genre.controller';
import { DirectorsService } from './directors/directors.service';
import { DirectorsController } from './directors/directors.controller';
import { HonoursService } from './honours/honours.service';
import { HonoursController } from './honours/honours.controller';

@Module({
    providers:[CastsService,PrismaService,LanguagesService, AwardsService,GenreService, DirectorsService, HonoursService],
    controllers:[CastsController,LanguagesController, AwardsController,GenreController, DirectorsController, HonoursController]
})
export class GeneralModule {}
