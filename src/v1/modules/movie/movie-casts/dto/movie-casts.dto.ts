import { status_types } from "@prisma/client";
import { IsInt, IsNotEmpty } from "class-validator";

export class MovieCastsDto{

@IsNotEmpty()
@IsInt()
movie_cast_cast_id:number

@IsNotEmpty()
@IsInt()
movie_cast_movie_id:number

movie_cast_created_at: Date;
movie_cast_updated_at: Date;
movie_cast_created_by: number;
movie_cast_updated_by: number;
movie_cast_status:status_types

}