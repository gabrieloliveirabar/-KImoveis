import { MigrationInterface, QueryRunner } from "typeorm";

export class alterdateAndhour1666548631279 implements MigrationInterface {
    name = 'alterdateAndhour1666548631279'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD "date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD "hour" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP COLUMN "date"`);
    }

}
