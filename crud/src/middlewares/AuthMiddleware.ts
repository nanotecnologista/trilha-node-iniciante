import  jwt  from 'jsonwebtoken';
import { Response, Request, NextFunction } from 'express';


interface TokenPayload{
    id: string
    iat: number
    exp: number
}

export default function AuthMiddleware(request: Request, response: Response, next: NextFunction){

    const { authorization } = request.headers

    if(!authorization){
        return response.sendStatus(401)
    }

    const token = authorization.replace('Bearer', '').trim()

    try{
        const data = jwt.verify(token, process.env.JWT_SECRET_KEY)

        const {id} = data as TokenPayload

        request.userId = id

        return next()
    
    } catch{
        return response.sendStatus(401)
    }

}