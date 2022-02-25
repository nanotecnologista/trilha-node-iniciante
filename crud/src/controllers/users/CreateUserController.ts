import { Request, Response } from 'express'
import { CreateUserService } from '../../services/users/CreateUserService'

export class CreateUserController{
    async handle(request: Request, response: Response){
        const {name, email, password, user_type_id} = request.body
        
        const service = new CreateUserService()

        const result = await service.execute({name, email, password, user_type_id})

        return response.status(result.status).json(result)
    }
}