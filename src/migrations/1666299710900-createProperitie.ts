import { MigrationInterface, QueryRunner } from "typeorm";

export class createProperitie1666299710900 implements MigrationInterface {
    name = 'createProperitie1666299710900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "propertie" ("id" uuid NOT NULL, "value" numeric NOT NULL, "size" integer NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "adressId" uuid, "categorieId" uuid, CONSTRAINT "REL_e0700c7be3d29dd2958719fe0c" UNIQUE ("adressId"), CONSTRAINT "PK_d8a9230c98ae28632ea9848db31" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "propertie" ADD CONSTRAINT "FK_e0700c7be3d29dd2958719fe0cd" FOREIGN KEY ("adressId") REFERENCES "adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "propertie" ADD CONSTRAINT "FK_1292996727d72ace172fa7ead1f" FOREIGN KEY ("categorieId") REFERENCES "categorie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "propertie" DROP CONSTRAINT "FK_1292996727d72ace172fa7ead1f"`);
        await queryRunner.query(`ALTER TABLE "propertie" DROP CONSTRAINT "FK_e0700c7be3d29dd2958719fe0cd"`);
        await queryRunner.query(`DROP TABLE "propertie"`);
    }

}
