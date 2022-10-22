import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Address } from "./adress.entity";
import { Categorie } from "./categorie.entity";
import { Schedule_user_propertie } from "./schedule_user_propertie.entity";

@Entity("propertie")
export class Propertie {
  @PrimaryColumn("uuid")
  id: string;

  @Column({ type: "decimal" })
  value: number;

  @Column()
  size: number;

  @Column({default:false})
  sold:boolean

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToOne(()=>Address)
  @JoinColumn()
  address:Address

  @ManyToOne(()=>Categorie)
  categorie:Categorie
  
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
