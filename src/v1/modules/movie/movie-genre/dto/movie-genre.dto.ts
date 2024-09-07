import { status_types } from "@prisma/client";
import { IsInt, IsNotEmpty } from "class-validator";

export class MovieGenreDto{
@IsNotEmpty()
@IsInt()
movie_genre_genre_id:number

@IsNotEmpty()
@IsInt()
movie_genre_movie_id:number

movie_genre_created_at:Date
movie_genre_updated_at: Date
movie_genre_created_by:number
movie_genre_updated_by:number
movie_genre_status:status_types

}