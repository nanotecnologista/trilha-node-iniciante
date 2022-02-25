import { getRepository } from "typeorm";
import { User } from "../../entities/User";

export class GetAllUsersService{
   async execute(){

       const repo = getRepository(User)
       
       const users = await repo.find({select:["id", "name", "email", "user_type_id"]})

       return users
   }
}