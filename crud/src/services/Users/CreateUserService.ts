import {getRepository} from "typeorm"
import { User } from "../../entities/User"
import { UserRequest } from "../../controllers/dto/user.dto"
import { validate } from "class-validator"


export class CreateUserService {
    
    async execute({name, email, password, user_type_id}:UserRequest): Promise<{}>{
        const repo = getRepository(User)
        const isEmail = await repo.findOne({email})
        const IsUserTypeId = await repo.findOne({user_type_id})

        // SELECT * FROM CATEGORIES WHERE EMAIL = "EMAIL" LIMIT 1
        if (isEmail){
            return new Error("Email alredy exists")
        }

        if (!IsUserTypeId){
            return new Error("Is User Type ID do not exists")
        }

        const user = repo.create({
            name,
            email,
            password,
            user_type_id            
        })

        const userReq = new UserRequest()
        userReq.name = name
        user.email = email
        user.password = password
        user.user_type_id = user_type_id

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