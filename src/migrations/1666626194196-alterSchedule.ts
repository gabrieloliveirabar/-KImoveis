import { MigrationInterface, QueryRunner } from "typeorm";

export class alterSchedule1666626194196 implements MigrationInterface {
    name = 'alterSchedule1666626194196'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_137987426659ac1570c018c0711"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "scheduleId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "scheduleId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_137987426659ac1570c018c0711" FOREIGN KEY ("scheduleId") REFERENCES "schedule_user_propertie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
