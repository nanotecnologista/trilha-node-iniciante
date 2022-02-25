import {getRepository} from "typeorm"
import { User } from "../../entities/User"
import { AuthRequest } from "../../controllers/dto/AuthDto"
import { validate } from "class-validator"
import  bcrypt  from "bcrypt"
import jwt from 'jsonwebtoken'

export class CreateAuthService {
    
    async execute({email, password}:AuthRequest): Promise<{}>{
        
        try{    
            //verificando erros
            const userReq = new AuthRequest()
            userReq.email = email
            userReq.password = password
            
            const errors = await validate(userReq)
            if(errors.length > 0){
                return {
                    status:400,
                    message: errors
                }
            }

            
            //verificando se o email já existe
            const repo = getRepository(User)
            const user = await repo.findOne({email})
            
            if (!user.email){
                return {
                    status:404,
                    message: "Email not found"
                }
            }

            if (!(await bcrypt.compare(password, user.password))){
                return{
                    status: 401,
                    message: "Password incorrect"
                }
            }
            
            const secret = process.env.JWT_SECRET_KEY || ''

            const token = jwt.sign({id: user.id}, secret, {expiresIn: '1d'})
            
            return{
                status:200,
                message: "Logged",
                data: token
            }

        } catch{
            return {
                status: 400,
                message: "Error"
            }
        }
    }

}
