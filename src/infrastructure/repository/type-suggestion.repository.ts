import { TypeSuggestion } from 'src/domain/entities/type-suggestion.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(TypeSuggestion)
export class TypeSuggestionRepository extends Repository<TypeSuggestion>{
}