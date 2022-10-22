import { MigrationInterface, QueryRunner } from "typeorm";

export class addingColumnSold1666465184753 implements MigrationInterface {
    name = 'addingColumnSold1666465184753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "propertie" ADD "sold" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "zipCode" character varying(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "state" character varying(2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "zipCode" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "propertie" DROP COLUMN "sold"`);
    }

}
