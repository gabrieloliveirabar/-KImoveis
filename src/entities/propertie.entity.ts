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
import { Adress } from "./adress.entity";
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

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToOne(()=>Adress)
  @JoinColumn()
  adress:Adress

  @OneToMany(()=>Schedule_user_propertie,schedule_user_propertie=>schedule_user_propertie.propertie)
  schedule_user_propertie:Schedule_user_propertie[]

  @ManyToOne(()=>Categorie)
  categorie:Categorie

}
