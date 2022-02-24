import { getRepository } from "typeorm"
import { User } from "../../entities/User"


export class DeleteUserService {
    async execute(id:string): Promise<{}>{
        const repo = getRepository(User)

    if(!await repo.findOne(id)){
        return {
            status:404,
            message:"User not found!"
        }
    }        
    await repo.delete(id)

    return {
        status: 200,
        message: "User delete Sucessifuly!",
    }
    
   }
}