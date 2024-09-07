import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { DirectorsService } from './directors.service';
import { DirectorsDto } from './dto/directors.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilenameCreate } from 'src/v1/utils/filenamecreate';
import { diskStorage } from 'multer';

@Controller('v1/general/directors')
export class DirectorsController {
    constructor(private directorService:DirectorsService ){}

@Post('')
@UseInterceptors(
  FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: FilenameCreate,
    }),
  }),
)
@HttpCode(HttpStatus.CREATED)
async createDirectors(@Body() dto:DirectorsDto, @UploadedFile() file ){
dto.director_created_at=new Date()
dto.director_updated_at=new Date()
dto.director_created_by=1
dto.director_updated_by=1
dto.director_image=file
const {data,err}= await this.directorService.createDirector(dto)
console.log(file);
if(err){
    throw new HttpException("failed",HttpStatus.BAD_REQUEST)
}
return {data}
}

@Patch(':directorId')
@HttpCode(HttpStatus.OK)
async updateDirector(
  @Body() dto: DirectorsDto,
  @Param('directorId', ParseIntPipe) directorId: number,
) {
dto.director_updated_at=new Date()
dto.director_updated_by=1
  const { data, err } = await this.directorService.updateDirector(dto, directorId);
  if (err) {
    throw new HttpException('failed', HttpStatus.BAD_REQUEST);
  }
  return { data };
}

@Get(':directorId')
  @HttpCode(HttpStatus.OK)
  async getOneCast(@Param('directorId', ParseIntPipe) directorId: number) {
    const { data, err } = await this.directorService.getOneDirector(directorId);
    if (err) {
      throw new HttpException('failed', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }
  // api to get all directors
  @Get('')
  @HttpCode(HttpStatus.OK)
  async getAllCasts() {
    const { data, err } = await this.directorService.getAlldirectors();
    if (err) {
      throw new HttpException('failed to fetch data', HttpStatus.BAD_REQUEST);
    }
    return { data };
  }

}
