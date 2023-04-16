import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1678346729086 implements MigrationInterface {
    name = 'migration1678346729086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "service" TO "delivery"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "delivery" TO "service"`);
    }

}
