import {IsEmail, Min, Max, Length} from "class-validator"

export class UserRequest {
    
    @Length(10,40)
    name: string
    
    @Length(10,60)
    @IsEmail()
    email:string
    
    @Min(6)
    @Max(16)
    password: string
        
}
