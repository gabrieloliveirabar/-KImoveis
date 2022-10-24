import { MigrationInterface, QueryRunner } from "typeorm";

export class alterSchedule1666553129219 implements MigrationInterface {
    name = 'alterSchedule1666553129219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "scheduleId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD "propertieId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_137987426659ac1570c018c0711" FOREIGN KEY ("scheduleId") REFERENCES "schedule_user_propertie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD CONSTRAINT "FK_a83ed8f328eecd8c9c784a9b6d4" FOREIGN KEY ("propertieId") REFERENCES "propertie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP CONSTRAINT "FK_a83ed8f328eecd8c9c784a9b6d4"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_137987426659ac1570c018c0711"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP COLUMN "propertieId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "scheduleId"`);
    }

}
