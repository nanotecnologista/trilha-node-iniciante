import { UserTypeUpdateRequest } from './../../controllers/dto/usertype.dto';
import { UserType } from './../../entities/UserType';
import { getRepository } from "typeorm"
import { validate } from "class-validator"

export class UpdateUserTypeService{
    async execute({id, name, description}: UserTypeUpdateRequest){
        const repo = getRepository(UserType)

        const user_type = await repo.findOne(id)

        if (!user_type){
            return new Error("Type doesn't exists!")
        }

        //validando as infos
        const userReq = new UserTypeUpdateRequest()
        userReq.name = name
        userReq.description = description
       

        const errors = await validate(userReq)
        if(errors.length > 0){
            return {
                status:400,
                message: errors,
                instanceof: Error
            }
        }

        //se o que algum argumento vier vazio, ele vai pegar o valor anterior
        user_type.name= name ? name : user_type.name
        user_type.description = description ? description : user_type.description
        await repo.save(user_type)

        return user_type
    }
}