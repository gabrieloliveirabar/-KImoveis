import { MigrationInterface, QueryRunner } from "typeorm";

export class alterSchedulUsee1666553267540 implements MigrationInterface {
    name = 'alterSchedulUsee1666553267540'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" ADD CONSTRAINT "FK_a42eb3e1f2820c887f4a201c9d7" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP CONSTRAINT "FK_a42eb3e1f2820c887f4a201c9d7"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_propertie" DROP COLUMN "userId"`);
    }

}
