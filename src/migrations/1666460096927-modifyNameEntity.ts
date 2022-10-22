import { MigrationInterface, QueryRunner } from "typeorm";

export class modifyNameEntity1666460096927 implements MigrationInterface {
    name = 'modifyNameEntity1666460096927'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "propertie" DROP CONSTRAINT "FK_e0700c7be3d29dd2958719fe0cd"`);
        await queryRunner.query(`ALTER TABLE "propertie" RENAME COLUMN "adressId" TO "addressId"`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL, "district" character varying NOT NULL, "zipCode" character varying NOT NULL, "number" character varying, "city" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "propertie" ADD CONSTRAINT "FK_8e8d7f4fe5183390cc6cd8420c9" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "propertie" DROP CONSTRAINT "FK_8e8d7f4fe5183390cc6cd8420c9"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`ALTER TABLE "propertie" RENAME COLUMN "addressId" TO "adressId"`);
        await queryRunner.query(`ALTER TABLE "propertie" ADD CONSTRAINT "FK_e0700c7be3d29dd2958719fe0cd" FOREIGN KEY ("adressId") REFERENCES "adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
