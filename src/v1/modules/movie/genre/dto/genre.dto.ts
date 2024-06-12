import { IsOptional, IsString } from 'class-validator';

export class GenreDto {
  @IsOptional()
  @IsString()
  genre_name: string;
  @IsOptional()
  @IsString()
  genre_created_at:Date

  genre_updated_at:Date

  genre_created_by:number

  genre_updated_by:number
  
  // genre_status:string

}
