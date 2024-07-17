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
import { AwardsService } from './awards.service';
import { AwardsDto } from './dto/awards.dto';

@Controller('v1/general/awards')
export class AwardsController {
  constructor(private awardService: AwardsService) {}

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  async createAward(@Body() dto: AwardsDto) {
    dto.award_created_at = new Date();
    dto.award_updated_at = new Date();
    dto.award_created_by = 1;
    dto.award_updated_by = 1;
    const { data, err } = await this.awardService.createAward(dto);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
//  api to update award 
  @Patch(':awardId')
  @HttpCode(HttpStatus.OK)
  async updateAward(
    @Body() dto: AwardsDto,
    @Param('awardId', ParseIntPipe) awardId: number,
  ) {
    dto.award_updated_at = new Date();
    dto.award_updated_by = 1;
    const { data, err } = await this.awardService.updateAward(dto, awardId);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }

  @Get(':awardId')
  @HttpCode(HttpStatus.OK)
  async getOneAward(@Param('awardId', ParseIntPipe) awardId: number) {
    const { data, err } = await this.awardService.getOneAward(awardId);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
  // api to get all awards
  @Get('')
  @HttpCode(HttpStatus.OK)
  async getAllAwards() {
    const { data, err } = await this.awardService.getAllAwards();
    if (err) {
      throw new HttpException('failed to fetch data', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
}
