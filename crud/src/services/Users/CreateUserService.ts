import {getRepository} from "typeorm"
import { User } from "../../entities/User"
import { UserRequest } from "../../controllers/dto/user.dto"
import { validate } from "class-validator"
import { UserType } from "../../entities/UserType"


export class CreateUserService {
    
    async execute({name, email, password, user_type_id}:UserRequest): Promise<{}>{
        
        try{    
            //verificando erros
            const userReq = new UserRequest()
            userReq.name = name
            userReq.email = email
            userReq.password = password
            userReq.user_type_id = user_type_id
            
            const errors = await validate(userReq)
            if(errors.length > 0){
                return {
                    status:404,
                    message: errors
                }
            }

            
            //verificando se o email já existe
            const repo = getRepository(User)
            const isEmail = await repo.findOne({email})

            //verificando TypeID
            try{
                const validateID= getRepository(UserType)
                const id = user_type_id
                const IsUserTypeId = await validateID.findOne({id})

                if (!IsUserTypeId){
                    return {
                        status:400,
                        message: "Is User Type ID do not exists"
                    }
                }

            }catch{
                return {
                    status:400,
                    message: "Type Id not find"
                }
            }

            // SELECT * FROM CATEGORIES WHERE EMAIL = "EMAIL" LIMIT 1
            if (isEmail){
                return {
                    status:400,
                    message: "Email alredy exists"
                }
            }
            
           

            const user = repo.create({
                name,
                email,
                password,
                user_type_id            
            })

            await repo.save(user)
            delete user.password
            
            return {
                status:201,
                message: "Create Sucessifuly",
                data: user
            }

        } catch{
            return {
                status: 400,
                message: "Error"
            }
        }
    }

}
