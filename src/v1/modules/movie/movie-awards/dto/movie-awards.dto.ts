import { status_types } from "@prisma/client";
import { IsInt, IsNotEmpty } from "class-validator";

export class MovieAwardsDto {

  @IsNotEmpty()
  @IsInt()
  movie_award_award_id: number;
  @IsNotEmpty()
  @IsInt()
  movie_award_movie_id: number;

  movie_award_created_at: Date;
  movie_award_updated_at: Date;
  movie_award_created_by: number;
  movie_award_updated_by: number;
  movie_award_status:status_types
}
