import { Request, Response } from 'express'
import { DeleteUserService } from '../../services/Users/DeleteUserService'

export class DeleteUserController{
    async handle(request: Request, response: Response){
        
       const { id } = request.params
        
       const service = new DeleteUserService()
       
       const result = await service.execute(id)
       
       return response.status(result.status).json(result)
    }
}