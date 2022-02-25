import { User } from '../../entities/User';
import { Request, Response } from "express";
import { UpdateUserService } from '../../services/users/UpdateUserService'; 


export class UpdateUSerController {
    async handle(request: Request, response: Response){
        
        const {id}= request.params;
        const {name, email, password, user_type_id} = request.body

        const service = new UpdateUserService()

        const result = await service.execute({id, name, email, password, user_type_id})

        return response.status(result.status).json(result)
    }
}