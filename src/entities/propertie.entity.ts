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
  readonly id: string;

  @Column({ type: "decimal" })
  value: number;

  @Column()
  size: number;

  @ManyToOne(() => Categorie, (category) => category.properties)
  category: string;

  @Column({ default: false })
  sold: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToMany(
    (type) => Schedule_user_propertie,
    (schedule_user_propertie) => schedule_user_propertie.propertie
  )
  schedules: Schedule_user_propertie[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
