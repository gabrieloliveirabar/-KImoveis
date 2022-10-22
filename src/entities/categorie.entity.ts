import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Propertie } from "./propertie.entity";

@Entity("categorie")
export class Categorie {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column({ length: 30 })
  name: string;

  @OneToMany(() => Propertie, (propertie) => propertie.categorie)
  propertie: Propertie[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
