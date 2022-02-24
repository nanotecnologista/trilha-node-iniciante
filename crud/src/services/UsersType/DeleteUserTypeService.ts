import { getRepository } from "typeorm"
import { UserType } from "../../entities/UserType" 


export class DeleteUserTypeService{
    async execute(id:string){
        const repo = getRepository(UserType)

    if(!await repo.findOne(id)){
        return {
            status: 404,
            message:"Type not find!"
        }
    }        
    await repo.delete(id)

    return {
        status:200,
        message: "delete Sucessifuly!"
    }
   }
}