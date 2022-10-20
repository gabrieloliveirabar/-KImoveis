import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  import { Exclude } from "class-transformer";
import { Schedule_user_propertie } from "./schedule_user_propertie.entity";
  
  @Entity()
  export class User {
    @PrimaryColumn("uuid")
    readonly id: string;
  
    @Column({ length: 60 })
    name: string;
  
    @Column({ length: 60 })
    email: string;
  
    @Column()
    isAdm: boolean;
  
    @Column({ default: true })
    isActive: boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @Column({ length: 120 })
    @Exclude()
    password: string;

    @OneToMany(()=>Schedule_user_propertie,schedule_user_propertie=>schedule_user_propertie.propertie)
  schedule_user_propertie:Schedule_user_propertie[]
  
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }