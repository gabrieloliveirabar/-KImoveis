import { MigrationInterface, QueryRunner } from "typeorm";

export class createSchedule1666301056725 implements MigrationInterface {
    name = 'createSchedule1666301056725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedule_user_propertie" ("id" uuid NOT NULL, "propertieId" uuid, "userId" uuid, CONSTRAINT "PK_cbd7a2a4ceeecc17d1e7cbe20eb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD CONSTRAINT "FK_a83ed8f328eecd8c9c784a9b6d4" FOREIGN KEY ("propertieId") REFERENCES "propertie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD CONSTRAINT "FK_a42eb3e1f2820c887f4a201c9d7" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP CONSTRAINT "FK_a42eb3e1f2820c887f4a201c9d7"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP CONSTRAINT "FK_a83ed8f328eecd8c9c784a9b6d4"`);
        await queryRunner.query(`DROP TABLE "schedule_user_propertie"`);
    }

}
