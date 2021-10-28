import { EntityRepository, Repository } from 'typeorm';
import { Suggestion } from '../../domain/entities/suggestion.entity';

@EntityRepository(Suggestion)
export class SuggestionRepository extends Repository<Suggestion>{
}