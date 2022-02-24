import { User } from './../../entities/User';
import {IsEmail,IsNotEmpty, Min, Max, Length} from "class-validator"

export class UserRequest {
    @IsNotEmpty()
    @Length(5,50)
    name: string
    
    @IsNotEmpty()
    @Length(5,60)
    @IsEmail()
    email:string
    
    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    user_type_id: string
}

export class UserUpdateRequest {
    @IsNotEmpty()
    id:string
    
    @IsNotEmpty()
    @Length(5,50)
    name: string
    
    @IsNotEmpty()
    @Length(5,60)
    @IsEmail()
    email:string

    @IsNotEmpty()
    user_type_id:string

    @IsNotEmpty()
    @Min(6)
    @Max(16)
    password: string
}
