import { getRepository } from "typeorm"
import { UserType } from "../../entities/UserType" 


export class DeleteUserTypeService{
    async execute(id:string){
        const repo = getRepository(UserType)

    if(!await repo.findOne(id)){
        return new Error("Type does not exists!")
    }        
    await repo.delete(id)

   }
}