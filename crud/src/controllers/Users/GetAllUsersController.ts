import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/Users/GetAllUsersService";

export class GetAllUsersController{
    async handle(request: Request, response: Response){
        const service = new GetAllUsersService()

        const users = await service.execute()

        return response.json(users)
    }
}