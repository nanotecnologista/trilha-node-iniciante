import { Request, Response } from 'express'
import { CreateUserTypeService } from '../../services/UsersType/CreateUserTypeService' 

export class CreateUserTypeController{
    async handle(request: Request, response: Response){
        const {name, description} = request.body
        
        const service = new CreateUserTypeService()

        const result = await service.execute({name, description})

        if (result instanceof Error){
            return response.status(400).json(result)
        }

        return response.json("Sucessifuly").status(200)
    }
}