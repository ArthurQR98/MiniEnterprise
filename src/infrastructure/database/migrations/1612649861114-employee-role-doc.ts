import {MigrationInterface, QueryRunner} from "typeorm";

export class employeeRoleDoc1612649861114 implements MigrationInterface {
    name = 'employeeRoleDoc1612649861114'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `role` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `employee` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `lastname` varchar(100) NOT NULL, `email` varchar(100) NOT NULL, `dni` varchar(8) NOT NULL, `password` varchar(255) NOT NULL, `creation_date` datetime NOT NULL, `type_employee` varchar(255) NOT NULL, `status` varchar(8) NOT NULL DEFAULT 'ACTIVO', `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `roleId` int NULL, UNIQUE INDEX `IDX_817d1d427138772d47eca04885` (`email`), UNIQUE INDEX `IDX_6323d6150f374a2f533d253028` (`dni`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `doc` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(150) NOT NULL, `document_url` varchar(255) NOT NULL, `key` varchar(255) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `employeeId` int NULL, UNIQUE INDEX `REL_952e61e1fd24b0657de9421894` (`employeeId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `employee` ADD CONSTRAINT `FK_646b91cc56d9fd9760973b4980d` FOREIGN KEY (`roleId`) REFERENCES `role`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `doc` ADD CONSTRAINT `FK_952e61e1fd24b0657de9421894c` FOREIGN KEY (`employeeId`) REFERENCES `employee`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `doc` DROP FOREIGN KEY `FK_952e61e1fd24b0657de9421894c`");
        await queryRunner.query("ALTER TABLE `employee` DROP FOREIGN KEY `FK_646b91cc56d9fd9760973b4980d`");
        await queryRunner.query("DROP INDEX `REL_952e61e1fd24b0657de9421894` ON `doc`");
        await queryRunner.query("DROP TABLE `doc`");
        await queryRunner.query("DROP INDEX `IDX_6323d6150f374a2f533d253028` ON `employee`");
        await queryRunner.query("DROP INDEX `IDX_817d1d427138772d47eca04885` ON `employee`");
        await queryRunner.query("DROP TABLE `employee`");
        await queryRunner.query("DROP TABLE `role`");
    }

}
