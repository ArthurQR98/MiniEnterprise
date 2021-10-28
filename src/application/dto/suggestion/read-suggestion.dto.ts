import { Exclude, Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";
import { TypeSuggestion } from 'src/domain/entities/type-suggestion.entity';
@Exclude()
export class ReadSuggestionDto{
    @IsString()
    @Expose()
    message:string;
    
    @IsNotEmpty()
    @Expose()
    type_suggestion_id:TypeSuggestion;    
}