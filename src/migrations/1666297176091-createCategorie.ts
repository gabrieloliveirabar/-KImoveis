import { MigrationInterface, QueryRunner } from "typeorm";

export class createCategorie1666297176091 implements MigrationInterface {
    name = 'createCategorie1666297176091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categorie" ("id" uuid NOT NULL, "name" character varying(30) NOT NULL, CONSTRAINT "PK_a761331f20634c53bf660312062" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "categorie"`);
    }

}
