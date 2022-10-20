import {
    Entity,
    Column,
    PrimaryColumn,
  } from "typeorm"; 

@Entity("adress")
export class Adress{

    @PrimaryColumn("uuid")
    id:string

    @Column()
    district:string

    @Column()
    zipCode:string

    @Column({nullable:true})
    number:string

    @Column()
    city:string

    @Column()
    state:string

}