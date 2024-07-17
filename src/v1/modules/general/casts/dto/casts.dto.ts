import { status_types } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CastsDto{
@IsNotEmpty()
@IsString()
cast_name:string
// @IsNumber()
cast_age:number
// @IsString()
cast_about:string
// @IsString()
cast_website:string
// @IsString()
cast_image:string
cast_created_at:Date
cast_updated_at:Date
cast_created_by:number
cast_updated_by:number
cast_status:status_types
}