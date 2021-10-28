import {MigrationInterface, QueryRunner} from "typeorm";

export class suggestionType1612206906874 implements MigrationInterface {
    name = 'suggestionType1612206906874'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `suggestion` DROP FOREIGN KEY `FK_f08427465f560e9c76ee4f8647c`");
        await queryRunner.query("ALTER TABLE `suggestion` CHANGE `typeSuggestionId` `typeSuggestionId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `suggestion` ADD CONSTRAINT `FK_f08427465f560e9c76ee4f8647c` FOREIGN KEY (`typeSuggestionId`) REFERENCES `type_suggestion`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `suggestion` DROP FOREIGN KEY `FK_f08427465f560e9c76ee4f8647c`");
        await queryRunner.query("ALTER TABLE `suggestion` CHANGE `typeSuggestionId` `typeSuggestionId` int NULL");
        await queryRunner.query("ALTER TABLE `suggestion` ADD CONSTRAINT `FK_f08427465f560e9c76ee4f8647c` FOREIGN KEY (`typeSuggestionId`) REFERENCES `type_suggestion`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
