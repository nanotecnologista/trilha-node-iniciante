import { Request, Response } from "express";
import { UpdateUserTypeService } from "../../services/users_types/UpdateUserTypeService"; 

export class UpdateUserTypeController {
    async handle(request: Request, response: Response){
        
        const {id}= request.params;
        const {name, description} = request.body

        const service = new UpdateUserTypeService()

        const result = await service.execute({id, name, description})

        return response.status(result.status).json(result)
    }
}