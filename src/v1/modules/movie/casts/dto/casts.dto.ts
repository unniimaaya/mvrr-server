import { status_types } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CastsDto{
@IsNotEmpty()
@IsString()
mc_name:string
// @IsNumber()
mc_age:number
// @IsString()
mc_about:string
// @IsString()
mc_website:string
// @IsString()
mc_image:string
mc_created_at:Date
mc_updated_at:Date
mc_created_by:number
mc_updated_by:number
mc_status:status_types
}