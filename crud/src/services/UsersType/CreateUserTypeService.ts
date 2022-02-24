import { UserType } from './../../entities/UserType';
import {getRepository} from "typeorm"
import { UserTypeRequest } from "../../controllers/dto/usertype.dto" 
import { validate } from "class-validator"


export class CreateUserTypeService {
    
    async execute({name, description}:UserTypeRequest): Promise<{}>{
        const repo = getRepository(UserType)
        const isName = await repo.findOne({name})
        

        // SELECT * FROM CATEGORIES WHERE EMAIL = "EMAIL" LIMIT 1
        if (isName){
            return {
                status: 400,
                message: "Type alredy exists"
            }
        }


        const usertype = repo.create({
            name,
            description     
        })

        const userReq = new UserTypeRequest()
        userReq.name = name
        userReq.description =description


        const errors = await validate(userReq)
        if(errors.length > 0){
            return {
                status:400,
                message: errors,              
            }
        }

        await repo.save(usertype)
        
        return {
            status: 200,
            message: "Sucessifuly",
            data:usertype
        }
    }
}