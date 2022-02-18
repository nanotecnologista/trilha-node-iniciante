import { Request, Response } from "express";
import { UpdateUserTypeService } from "../../services/UsersType/UpdateUserTypeService"; 

export class UpdateUserTypeController {
    async handle(request: Request, response: Response){
        
        const {id}= request.params;
        const {name, description} = request.body

        const service = new UpdateUserTypeService()

        const result = await service.execute({id, name, description})

        if (result instanceof Error){
            return response.status(400).json(result.message)
        }
        
        return response.json("update sucessifuly");
    }
}