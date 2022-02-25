import {Entity, Column, CreateDateColumn, ManyToOne, JoinColumn, PrimaryColumn, BeforeInsert, BeforeUpdate} from "typeorm";
import {v4 as uuid} from "uuid"
import bcrypt from 'bcrypt'
import { UserType } from "./UserType";

@Entity("users")
export class User{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    password: string;
    
    @Column()
    user_type_id: string;
        
    @Column()
    is_validated: boolean;
    

    @ManyToOne(()=> UserType)
    @JoinColumn({name:"user_type_id"})
    user_type: UserType;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}