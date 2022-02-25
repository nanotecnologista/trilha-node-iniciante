import  jwt  from 'jsonwebtoken';
import {getRepository} from "typeorm"
import { User } from "../../entities/User"
import { UserRequest } from "../../controllers/dto/UserDto"
import { validate } from "class-validator"
import { UserType } from "../../entities/UserType"
import { ValidateMail } from "../../nodemail/sendMail"

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
                        status:404,
                        message: "Is User Type ID not found"
                    }
                }

            }catch{
                return {
                    status:400,
                    message: "External Error Server"
                }
            }

            // SELECT * FROM CATEGORIES WHERE EMAIL = "EMAIL" LIMIT 1
            if (isEmail){
                return {
                    status:400,
                    message: "Email alredy exists"
                }
            }
             

            const secret = process.env.JWT_SECRET_KEY || ''
            const email_token = jwt.sign({email: email}, secret)
            const is_validated = false

            const validateMail =  new ValidateMail()
            
            validateMail.sendMail(email_token, email)

            const user = repo.create({
                name,
                email,
                password,
                user_type_id,
                is_validated
            })

            await repo.save(user)
            delete user.password
            


            return {
                status:201,
                message: "Create Sucessifuly",
                data: {
                    user, 
                    email_token
                }
            }

        } catch{
            return {
                status: 400,
                message: "Error"
            }
        }
    }

}
