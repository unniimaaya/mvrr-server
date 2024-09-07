import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto, LoginDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signUp(dto: AuthDto) {
    try {
      dto.user_password = await argon.hash(dto.user_password);
      const userdata = await this.prisma.users_v1.create({
        data: dto,
      });
      return { success: true, data: userdata, err: null };
    } catch (err) {
      console.log(err);
    }
  }

  // signin
  async signIn(dto: LoginDto) {
    const user = await this.prisma.users_v1.findFirst({
      where: {
        user_email: dto.user_email,
      },
    });
    if (!user) throw new UnauthorizedException('credentials incorrect');
    const pwdMatches = await argon.verify(
      user.user_password,
      dto.user_password,
    );
    if (!pwdMatches) throw new UnauthorizedException('credentials incorrect');
    console.log('userr', user);
    //KEY OF SECRET IN ENV
    const jwrSecret = 'JWT_SECRET';

    const token = await this.signToken(user.user_id, jwrSecret);
    return {
      token: token?.accesstoken,
    };
  }

  async signToken(
    userId: number,
    secretkey: string,
  ): Promise<{ accesstoken: string }> {
    const payload = {
      sub: userId,
      test: 'payloadTesting',
    };
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1hr',
      secret: this.config.get(secretkey),
    });
    return {
      accesstoken: token,
    };
  }
}
