import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class LanguageDto {
  @IsNotEmpty()
  @IsString()
  language_name: string;
  @IsOptional()
  @IsString()
  language_created_at: Date;

  language_created_by: number;

  language_updated_at: Date;

  language_updated_by: number;
}
