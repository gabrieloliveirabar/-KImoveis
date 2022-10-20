import {
    Entity,
    Column,
    PrimaryColumn,
    OneToMany,
  } from "typeorm"; 
import { Propertie } from "./propertie.entity";

@Entity("categorie")
export class Categorie{
    
    @PrimaryColumn("uuid")
    id:string

    @Column({length:30})
    name:string

    @OneToMany(()=>Propertie, propertie=>propertie.categorie)
    propertie:Propertie[]
}