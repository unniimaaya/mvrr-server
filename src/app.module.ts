import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './v1/modules/auth/auth.module';
import { PrismaModule } from './v1/modules/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { MovieModule } from './v1/modules/movie/movie.module';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule, PrismaModule,MovieModule],
  controllers: [AppController, ],
  providers: [AppService,  ],
})
export class AppModule {}
