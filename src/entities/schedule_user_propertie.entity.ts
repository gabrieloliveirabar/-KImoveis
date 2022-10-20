import {
    Entity,
    Column,
    PrimaryColumn,
    OneToMany,
    ManyToOne,
  } from "typeorm"; 
import { Propertie } from "./propertie.entity";
import { User } from "./user.entity";

@Entity("schedule_user_propertie")
export class Schedule_user_propertie{

    @PrimaryColumn("uuid")
    id:string

    @ManyToOne(()=>Propertie)
    propertie:Propertie

    @ManyToOne(()=>User)
    user:User
}