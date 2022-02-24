import { getRepository } from "typeorm"
import { User } from "../../entities/User"


export class DeleteUserService{
    async execute(id:string){
        const repo = getRepository(User)

    if(!await repo.findOne(id)){
        return new Error("User does not exists!")
    }        
    await repo.delete(id)

    return {
        status: 204,
        message: "User delete Sucessifuly!"
    }
    
   }
}