import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { TypeSuggestion } from 'src/domain/entities/type-suggestion.entity';

export class CreateSuggestionDto{
    @IsString()
    @IsNotEmpty()
    message:string;
    @IsNotEmpty()
    type_suggestion:TypeSuggestion;  
}