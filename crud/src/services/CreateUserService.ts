import {getRepository} from "typeorm"
import { User } from "../entities/User"
import { UserRequest } from "../controllers/dto/user.dto"

export class CreateUserService {
    
    async execute({name, email, password}:UserRequest): Promise<User | Error>{
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

        await repo.save(user)
        
        return user
    }
}