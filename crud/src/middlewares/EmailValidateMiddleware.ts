import { Response, Request, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import { ValidateMail } from '../nodemail/sendMail';
import  jwt  from 'jsonwebtoken';


export class ValidateMiddleware{
    
    async check(request: Request, response: Response, next: NextFunction){

        try{

            const {email, password}  = request.body
            const repo = getRepository(User)
            const user = await repo.findOne({email})

            if(!user){
                return response.status(404).json({ message: 'User do not exists'})
            }

            const is_validated = user.is_validated

            if(!is_validated){
                
                const secret = process.env.JWT_SECRET_KEY || ''
                const email_token = jwt.sign({email: email}, secret)

                const validateMail =  new ValidateMail()
            
                validateMail.sendMail(email_token, email)

                return response.status(400).json({
                    message: "email is not validated, please verify your email"
                })
        
            }
            return next()
        
        }catch{
            return response.status(500).json({
                message:"Error Server"
            })
        }

    }
}
export default new ValidateMiddleware();