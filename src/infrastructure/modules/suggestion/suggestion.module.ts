import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuggestionRepository } from '../../repository/suggestion.repository';
import { SuggestionController } from '../../../application/controllers/suggestion/suggestion.controller';
import { SuggestionService } from '../../../domain/services/suggestion/suggestion.service';
import { TypeSuggestionRepository } from '../../repository/type-suggestion.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports:[TypeOrmModule.forFeature([SuggestionRepository, TypeSuggestionRepository]), AuthModule],
    controllers:[SuggestionController],
    providers:[SuggestionService],
})
export class SuggestionModule {}
