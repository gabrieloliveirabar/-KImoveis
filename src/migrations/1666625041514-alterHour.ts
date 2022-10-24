import { MigrationInterface, QueryRunner } from "typeorm";

export class alterHour1666625041514 implements MigrationInterface {
    name = 'alterHour1666625041514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD "hour" TIME NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD "hour" TIMESTAMP NOT NULL`);
    }

}
