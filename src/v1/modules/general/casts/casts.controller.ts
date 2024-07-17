import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CastsService } from './casts.service';
import { CastsDto } from './dto/casts.dto';

@Controller('v1/general/casts')
export class CastsController {
  constructor(private castservice: CastsService) {}
  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async postCast(@Body() dto: CastsDto) {
    dto.cast_created_at = new Date();
    dto.cast_updated_at = new Date();
    dto.cast_created_by = 1;
    dto.cast_updated_by = 1;
    const { data, err } = await this.castservice.createCasts(dto);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }

  @Patch(':castId')
  @HttpCode(HttpStatus.OK)
  async patchCast(
    @Body() dto: CastsDto,
    @Param('castId', ParseIntPipe) castId: number,
  ) {
    dto.cast_updated_at = new Date();
    dto.cast_updated_by = 1;
    const { data, err } = await this.castservice.updateCasts(dto, castId);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }

  @Get(':castId')
  @HttpCode(HttpStatus.OK)
  async getOneCast(@Param('castId', ParseIntPipe) castId: number) {
    const { data, err } = await this.castservice.getOneCasts(castId);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
  // api to get all casts
  @Get('')
  @HttpCode(HttpStatus.OK)
  async getAllCasts() {
    const { data, err } = await this.castservice.getAllCasts();
    if (err) {
      throw new HttpException('failed to fetch data', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
}
