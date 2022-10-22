import {
    Entity,
    Column,
    PrimaryColumn,
    OneToMany,
    ManyToOne,
    ManyToMany,
    JoinTable,
  } from "typeorm"; 
import { Propertie } from "./propertie.entity";
import { User } from "./user.entity";

@Entity("schedule_user_propertie")
export class Schedule_user_propertie{

    @PrimaryColumn("uuid")
    id:string

    @Column()
    date:string

    @Column()
    hour:string

    @ManyToMany(type=>Propertie,{eager:true})
    @JoinTable()
    propertie:Propertie[]

    @ManyToMany(type=>User,{eager:true})
    @JoinTable()
    user:User[]
}