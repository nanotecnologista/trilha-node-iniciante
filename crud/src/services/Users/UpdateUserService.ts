import { getRepository } from "typeorm"
import { User } from "../../entities/User"
import { UserUpdateRequest } from "../../controllers/dto/UserDto"
import { validate } from "class-validator"

export class UpdateUserService{
    async execute({id, name, email, password, user_type_id}: UserUpdateRequest){
        const repo = getRepository(User)

        const user = await repo.findOne(id)

        if (!user){
            return {
                status: 404,
                message: "User dnot found!"
            }
        }

        //validando as infos
        const userReq = new UserUpdateRequest()
        userReq.name = name
        userReq.email = email
        userReq.password = password
        userReq.user_type_id = user_type_id

        const errors = await validate(userReq)
        if(errors.length > 0){
            return {
                status:400,
                message: errors,
            }
        }

        //se o que algum argumento vier vazio, ele vai pegar o valor anterior
        user.name= name ? name : user.name
        user.email = email ? email: user.email
        user.password = password ? password : user.password
        user.user_type_id = user_type_id ? user_type_id : user.user_type_id

        await repo.save(user)
        delete user.password
        return {
            status: 200,
            message: "Update sucessifuly",
            data:user
        }
    }
}