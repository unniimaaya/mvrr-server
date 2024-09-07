import { status_types } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class HonourDto {
  @IsNotEmpty()
  @IsString()
  honour_name: string;

  honour_created_at:Date
  honour_updated_at:Date
  honour_created_by:number
  honour_updated_by:number
  honour_status:status_types
}
