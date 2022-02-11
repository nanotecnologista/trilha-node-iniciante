import {getRepository} from "typeorm"
import { User } from "../entities/User"

type UserRequest ={
    name: string,
    email: string,
    password: string
}

export class CreateUserService {
    
    async execute({name, email, password}:UserRequest): Promise<User | Error>{
        const repo = getRepository(User)

        // SELECT * FROM CATEGORIES WHERE EMAIL = "EMAIL" LIMIT 1
        if (await repo.findOne({email})){
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