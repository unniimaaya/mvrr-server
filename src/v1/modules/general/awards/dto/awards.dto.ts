import { status_types } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class AwardsDto {
  @IsNotEmpty()
  @IsString()
  award_name: string;

  @IsString()
  award_remark: string;

  award_created_at: Date;
  award_updated_at: Date;
  award_created_by: number;
  award_updated_by: number;
  award_status: status_types;
}
