import {MigrationInterface, QueryRunner} from "typeorm";

export class changeEntities1611869614737 implements MigrationInterface {
    name = 'changeEntities1611869614737'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `benefits` CHANGE `update_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `tool` CHANGE `update_at` `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `tool` CHANGE `updated_at` `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `benefits` CHANGE `updated_at` `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

}
