import { UserType } from '../../entities/UserType';
import { getRepository } from "typeorm";


export class GetAllUsersTypesService{
   async execute(){

       const repo = getRepository(UserType)
       
       const users_types = await repo.find()

       return users_types
   }
}