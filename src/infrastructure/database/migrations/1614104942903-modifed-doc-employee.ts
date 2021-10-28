import {MigrationInterface, QueryRunner} from "typeorm";

export class modifedDocEmployee1614104942903 implements MigrationInterface {
    name = 'modifedDocEmployee1614104942903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `doc` DROP FOREIGN KEY `FK_d89d43e198572a3286b48198786`");
        await queryRunner.query("ALTER TABLE `doc` CHANGE `employeeIdId` `employeeId` int NULL");
        await queryRunner.query("ALTER TABLE `doc` CHANGE `employeeId` `employeeId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `doc` ADD CONSTRAINT `FK_952e61e1fd24b0657de9421894c` FOREIGN KEY (`employeeId`) REFERENCES `employee`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `doc` DROP FOREIGN KEY `FK_952e61e1fd24b0657de9421894c`");
        await queryRunner.query("ALTER TABLE `doc` CHANGE `employeeId` `employeeId` int NULL");
        await queryRunner.query("ALTER TABLE `doc` CHANGE `employeeId` `employeeIdId` int NULL");
        await queryRunner.query("ALTER TABLE `doc` ADD CONSTRAINT `FK_d89d43e198572a3286b48198786` FOREIGN KEY (`employeeIdId`) REFERENCES `employee`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
