import { status_types } from "@prisma/client";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class DirectorsDto{
@IsNotEmpty()
@IsString()
director_name:string

@IsInt()
director_age:number

@IsString()
director_about:string

director_image:any

director_created_at:Date
director_updated_at:Date
director_created_by:number
director_updated_by:number
director_status:status_types

}