import { Request, Response } from 'express'
import { DeleteUserTypeService } from '../../services/UsersType/DeleteUserTypeService' 

export class DeleteUserTypeController{
    async handle(request: Request, response: Response){
        
       const { id } = request.params
        
       const service = new DeleteUserTypeService()
       
       const result = await service.execute(id)
       
       if (result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.status(204).json('Deleted Sucessifuly')
    }
}