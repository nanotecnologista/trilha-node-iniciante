import { CreateAuthService } from '../../services/auth/AuthService';
import { Request, Response } from 'express'


export class AuthController{
    async handle(request: Request, response: Response){
        const {email, password} = request.body
        
        const service = new CreateAuthService()

        const result = await service.execute({email, password})

        return response.status(result.status).json(result)
    }
}