import {Entity, Column, CreateDateColumn, PrimaryColumn} from "typeorm";
import {v4 as uuid} from "uuid"
import bcrypt from 'bcrypt'

@Entity("Users")
export class User{
    
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}