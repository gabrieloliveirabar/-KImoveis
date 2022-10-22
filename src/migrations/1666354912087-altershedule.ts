import { MigrationInterface, QueryRunner } from "typeorm";

export class altershedule1666354912087 implements MigrationInterface {
    name = 'altershedule1666354912087'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP CONSTRAINT "FK_a83ed8f328eecd8c9c784a9b6d4"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP CONSTRAINT "FK_a42eb3e1f2820c887f4a201c9d7"`);
        await queryRunner.query(`CREATE TABLE "schedule_user_propertie_propertie_propertie" ("scheduleUserPropertieId" uuid NOT NULL, "propertieId" uuid NOT NULL, CONSTRAINT "PK_4374416f5136711d85cf1c03d5c" PRIMARY KEY ("scheduleUserPropertieId", "propertieId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5c11ab9f4743e33cb4d240bdd7" ON "schedule_user_propertie_propertie_propertie" ("scheduleUserPropertieId") `);
        await queryRunner.query(`CREATE INDEX "IDX_eceb14c4744fa356229aa79d89" ON "schedule_user_propertie_propertie_propertie" ("propertieId") `);
        await queryRunner.query(`CREATE TABLE "schedule_user_propertie_user_user" ("scheduleUserPropertieId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_d24123dd0580bb38ce43576d835" PRIMARY KEY ("scheduleUserPropertieId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3ec8d19b1ec38785c98c82d9b3" ON "schedule_user_propertie_user_user" ("scheduleUserPropertieId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2053b5f7f36f87011a953d275a" ON "schedule_user_propertie_user_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP COLUMN "propertieId"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie_propertie_propertie" ADD CONSTRAINT "FK_5c11ab9f4743e33cb4d240bdd74" FOREIGN KEY ("scheduleUserPropertieId") REFERENCES "schedule_user_propertie"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie_propertie_propertie" ADD CONSTRAINT "FK_eceb14c4744fa356229aa79d899" FOREIGN KEY ("propertieId") REFERENCES "propertie"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie_user_user" ADD CONSTRAINT "FK_3ec8d19b1ec38785c98c82d9b30" FOREIGN KEY ("scheduleUserPropertieId") REFERENCES "schedule_user_propertie"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie_user_user" ADD CONSTRAINT "FK_2053b5f7f36f87011a953d275a6" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie_user_user" DROP CONSTRAINT "FK_2053b5f7f36f87011a953d275a6"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie_user_user" DROP CONSTRAINT "FK_3ec8d19b1ec38785c98c82d9b30"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie_propertie_propertie" DROP CONSTRAINT "FK_eceb14c4744fa356229aa79d899"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie_propertie_propertie" DROP CONSTRAINT "FK_5c11ab9f4743e33cb4d240bdd74"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD "propertieId" uuid`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2053b5f7f36f87011a953d275a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3ec8d19b1ec38785c98c82d9b3"`);
        await queryRunner.query(`DROP TABLE "schedule_user_propertie_user_user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_eceb14c4744fa356229aa79d89"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5c11ab9f4743e33cb4d240bdd7"`);
        await queryRunner.query(`DROP TABLE "schedule_user_propertie_propertie_propertie"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD CONSTRAINT "FK_a42eb3e1f2820c887f4a201c9d7" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD CONSTRAINT "FK_a83ed8f328eecd8c9c784a9b6d4" FOREIGN KEY ("propertieId") REFERENCES "propertie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
