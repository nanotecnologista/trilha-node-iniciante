import {IsNotEmpty,Length} from "class-validator"

export class UserTypeRequest {
    @IsNotEmpty()
    @Length(5,50)
    name: string
    
    @IsNotEmpty()
    description: string
}

export class UserTypeUpdateRequest {
    @IsNotEmpty()
    id:string
    
    @IsNotEmpty()
    @Length(5,50)
    name: string
    
    @IsNotEmpty()
    description: string
}
