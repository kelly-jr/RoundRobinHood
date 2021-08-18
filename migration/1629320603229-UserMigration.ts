import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1629320603229 implements MigrationInterface {
    name = 'UserMigration1629320603229'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."session" ALTER COLUMN "sessionExpiry" SET DEFAULT '"2021-08-18T22:03:26.647Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."session" ALTER COLUMN "sessionExpiry" SET DEFAULT '2021-08-18 22:00:56.038'`);
    }

}
