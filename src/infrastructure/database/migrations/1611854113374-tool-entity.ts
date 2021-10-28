import {MigrationInterface, QueryRunner} from "typeorm";

export class toolEntity1611854113374 implements MigrationInterface {
    name = 'toolEntity1611854113374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `tool` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `serial` varchar(255) NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `tool`");
    }

}
