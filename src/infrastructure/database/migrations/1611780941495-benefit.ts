import {MigrationInterface, QueryRunner} from "typeorm";

export class benefit1611780941495 implements MigrationInterface {
    name = 'benefit1611780941495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `benefit` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(25) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `benefit`");
    }

}
