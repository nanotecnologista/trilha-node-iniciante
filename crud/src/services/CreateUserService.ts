import {getRepository} from "typeorm"
import { User } from "../entities/User"
import { UserRequest } from "../controllers/dto/user.dto"
import { validate } from "class-validator"
import { response } from "express"

export class CreateUserService {
    
    async execute({name, email, password}:UserRequest): Promise<{}>{
        const repo = getRepository(User)
        const isEmail = await repo.findOne({email})

        // SELECT * FROM CATEGORIES WHERE EMAIL = "EMAIL" LIMIT 1
        if (isEmail){
            return new Error("Email alredy exists")
        }

        const user = repo.create({
            name,
            email,
            password
        })

        const userReq = new UserRequest()
        userReq.name = name
        user.email = email
        user.password = password

        const errors = await validate(userReq)
        if(errors.length > 0){
            return {
                status:400,
                message: errors,
            }
        }

        await repo.save(user)
        
        return user
    }
}