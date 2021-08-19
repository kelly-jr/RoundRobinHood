import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteSession1629319855031 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from "session" where "session"."sessionExpiry" < now()-'2 hour'::interval`);
  }

  public async down(): Promise<void> {}
}
