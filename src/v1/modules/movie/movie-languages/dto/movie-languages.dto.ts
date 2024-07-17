import { IsInt, IsNotEmpty } from "class-validator";

export class MovieLanguagesDto{

@IsNotEmpty()
@IsInt()
movie_lang_lang_id:number
@IsNotEmpty()
@IsInt()
movie_lang_movie_id:number

movie_lang_created_at:Date
movie_lang_updated_at:Date
movie_lang_created_by:number
movie_lang_updated_by:number
}