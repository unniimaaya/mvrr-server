import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthDto, LoginDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // create api signup
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() dto: AuthDto) {
    dto.user_created_at = new Date();
    dto.user_updated_at = new Date();

    const { data, err } = await this.authService.signUp(dto);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }

  // api to signin
  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() dto: LoginDto) {
    const data = await this.authService.signIn(dto);
    return {
      data,
    };
  }
}
