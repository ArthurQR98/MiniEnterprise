import { IsNotEmpty, IsString } from "class-validator";
import { TypeSuggestion } from 'src/domain/entities/type-suggestion.entity';

export class SuggestionDto{
    @IsNotEmpty()
    @IsString()
    message:string;
    
    @IsNotEmpty()
    typeSuggestion:TypeSuggestion;
}