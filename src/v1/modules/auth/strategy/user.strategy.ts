import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { jwtConstants } from './constants';

@Injectable()
export class UserStrategy extends PassportStrategy(Strategy,"user") {
  constructor( config:ConfigService ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
    //   secretOrKey: "token",
      secretOrKey: config.get("JWT_SECRET"),
    });
  }

  async validate(payload: any) {
    console.log(payload);
    // return false
    return { userId: payload.sub, username: payload.username };
  }
}
