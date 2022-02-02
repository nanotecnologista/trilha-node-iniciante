import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class TaskActive extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    done: boolean;
}