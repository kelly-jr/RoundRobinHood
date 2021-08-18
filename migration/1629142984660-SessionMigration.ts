import {MigrationInterface, QueryRunner} from "typeorm";

export class SessionMigration1629142984660 implements MigrationInterface {
    name = 'SessionMigration1629142984660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."session" ALTER COLUMN "sessionExpiry" SET DEFAULT '"2021-08-16T20:43:08.043Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."session" ALTER COLUMN "sessionExpiry" SET DEFAULT '2021-08-16 20:41:28.438'`);
    }

}
