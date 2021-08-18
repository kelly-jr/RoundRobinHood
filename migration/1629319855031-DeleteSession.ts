import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteSession1629319855031 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from "session" where "session"."sessionExpiry" < now() - interval '3 days'`);
  }

  public async down(): Promise<void> {}
}
