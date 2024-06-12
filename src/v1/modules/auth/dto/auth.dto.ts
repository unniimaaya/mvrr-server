import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString  } from "class-validator";

export class AuthDto{
    @IsOptional()
    user_name: string;
    @IsNotEmpty()
    user_email: string;
    @IsString()
    @IsNotEmpty()
    user_password: string;
    @IsOptional()
    user_role_id: number;
    @IsOptional()
    user_token: string;
    user_created_at: Date;
    user_updated_at: Date;
}
export class RegisterDto extends  AuthDto{
    @IsOptional()
    user_name: string;
    @IsNotEmpty()
    user_email: string;
    @IsString()
    @IsNotEmpty()
    user_password: string;  
}

export class LoginDto{
    
 @IsNotEmpty()
 @IsEmail()
 user_email: string;

 @IsNotEmpty()
 user_password:string
}