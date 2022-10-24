import {
    Entity,
    Column,
    PrimaryColumn,
    OneToMany,
    ManyToOne,
  
  } from "typeorm"; 
  import { v4 as uuid } from "uuid";
import { Propertie } from "./propertie.entity";
import { User } from "./user.entity";

@Entity("schedule_user_propertie")
export class Schedule_user_propertie{

    @PrimaryColumn("uuid")
    readonly id:string

    @Column()
    date:Date

    @Column({type:"time"})
    hour:string

    @ManyToOne(type=>Propertie)
    propertie:Propertie

    @ManyToOne(type=>User)
    user:User

    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
}