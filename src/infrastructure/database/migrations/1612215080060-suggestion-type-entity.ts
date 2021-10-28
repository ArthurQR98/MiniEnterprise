import {MigrationInterface, QueryRunner} from "typeorm";

export class suggestionTypeEntity1612215080060 implements MigrationInterface {
    name = 'suggestionTypeEntity1612215080060'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `suggestion` DROP FOREIGN KEY `FK_f08427465f560e9c76ee4f8647c`");
        await queryRunner.query("ALTER TABLE `suggestion` ADD CONSTRAINT `FK_f08427465f560e9c76ee4f8647c` FOREIGN KEY (`typeSuggestionId`) REFERENCES `type_suggestion`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `suggestion` DROP FOREIGN KEY `FK_f08427465f560e9c76ee4f8647c`");
        await queryRunner.query("ALTER TABLE `suggestion` ADD CONSTRAINT `FK_f08427465f560e9c76ee4f8647c` FOREIGN KEY (`typeSuggestionId`) REFERENCES `type_suggestion`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
