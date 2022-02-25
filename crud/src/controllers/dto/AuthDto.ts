import {IsNotEmpty,Length, IsEmail} from "class-validator"

export class AuthRequest {
    @IsNotEmpty()
    @Length(5,60)
    @IsEmail()
    email:string
    
    @IsNotEmpty()
    password: string
}