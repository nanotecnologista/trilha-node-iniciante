import { Request, Response } from 'express'
import { CreateUserService } from '../../services/Users/CreateUserService'

export class CreateUserController{
    async handle(request: Request, response: Response){
        const {name, email, password, user_type_id} = request.body
        
        const service = new CreateUserService()

        const result = await service.execute({name, email, password, user_type_id})

        if (result['status']==400){
            return response.status(400).json(result)
        }

        return response.json("Sucessifuly").status(200)
    }
}