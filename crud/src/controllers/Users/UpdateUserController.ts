import { User } from './../../entities/User';
import { Request, Response } from "express";
import { UpdateUserService } from '../../services/Users/UpdateUserService'; 


export class UpdateUSerController {
    async handle(request: Request, response: Response){
        
        const {id}= request.params;
        const {name, email, password, user_type_id} = request.body

        const service = new UpdateUserService()

        const result = await service.execute({id, name, email, password, user_type_id})

        if (result instanceof Error){
            return response.status(400).json(result.message)
        }
        
        return response.json("update sucessifuly");
    }
}