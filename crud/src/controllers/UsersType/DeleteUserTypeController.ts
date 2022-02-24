import { Request, Response } from 'express'
import { DeleteUserTypeService } from '../../services/UsersType/DeleteUserTypeService' 

export class DeleteUserTypeController{
    async handle(request: Request, response: Response){
        
       const { id } = request.params
        
       const service = new DeleteUserTypeService()
       
       const result = await service.execute(id)
       
       return response.status(result.status).json(result)
    }
}