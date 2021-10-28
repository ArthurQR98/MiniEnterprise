import {MigrationInterface, QueryRunner} from "typeorm";

export class modifedEmployeeEnum1613577090277 implements MigrationInterface {
    name = 'modifedEmployeeEnum1613577090277'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `employee` DROP COLUMN `type_employee`");
        await queryRunner.query("ALTER TABLE `employee` ADD `type_employee` enum ('Locación de servicios', 'Planilla') NOT NULL");
        await queryRunner.query("ALTER TABLE `employee` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `employee` ADD `status` enum ('Activo', 'Inactivo') NOT NULL DEFAULT 'Activo'");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `employee` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `employee` ADD `status` varchar(8) NOT NULL DEFAULT 'ACTIVO'");
        await queryRunner.query("ALTER TABLE `employee` DROP COLUMN `type_employee`");
        await queryRunner.query("ALTER TABLE `employee` ADD `type_employee` varchar(255) NOT NULL");
    }

}
