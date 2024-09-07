import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { UserStrategy } from './strategy/user.strategy';


@Module({
  controllers: [AuthController],
  providers:[AuthService,PrismaService,JwtService,UserStrategy ]
})
export class AuthModule {}
