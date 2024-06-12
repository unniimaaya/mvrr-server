import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class MovieDto{
@IsNotEmpty()
@IsString()
movie_name:string
@IsNotEmpty()
movie_year:Date
@IsNotEmpty()
movie_release_date:Date
@IsNotEmpty()
@IsString()
movie_overview:string
@IsNotEmpty()
@IsNumber()
movie_budget:number
@IsNotEmpty()
movie_poster:any
@IsNotEmpty()
@IsNumber()
movie_language_id:number
@IsNotEmpty()
@IsNumber()
movie_genre_id:number
movie_created_at:Date
movie_updated_at:Date
movie_created_by:number
movie_updated_by:number



}