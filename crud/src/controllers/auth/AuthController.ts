import { CreateAuthService } from '../../services/auth/AuthService';
import { Request, Response } from 'express'
import { ActivateService } from '../../services/auth/AuthService';


export class AuthController{
    async handle(request: Request, response: Response){
        const {email, password} = request.body
        
        const service = new CreateAuthService()

        const result = await service.execute({email, password})

        return response.status(result.status).json(result)
    }
}

export class ActivateController{
    async handle(request: Request, response: Response){
        const {email_token} = request.params
        
        const service = new ActivateService()

        const result = await service.execute({email_token})

        return response.status(result.status).json(result)
    }
}