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
    @Min(6)
    @Max(16)
    password: string
}
