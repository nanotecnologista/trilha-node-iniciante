import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";


export class UpdateUSerController {
    async handle(request: Request, response: Response){
        
        const {id}= request.params;
        const {name, email, password} = request.body

        const service = new UpdateUserService()

        const result = await service.execute({id, name, email, password})

        if (result instanceof Error){
            return response.status(400).json(result.message)
        }
        
        return response.json(result);
    }
}