import { Request, Response } from "express";
import { GetAllUsersTypesService } from "../../services/users_types/GetAllUsersTypesService"; 

export class GetAllUsersTypesController{
    async handle(request: Request, response: Response){
        const service = new GetAllUsersTypesService()

        const users_types = await service.execute()

        return response.json(users_types)
    }
}