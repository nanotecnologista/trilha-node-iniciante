import { Request } from 'express';
declare namespace Express {
    export interface Request{
        userId: string
    }
}