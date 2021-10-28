import { IsString } from "class-validator";

export class UpdateTypeSuggestionDto{
    @IsString()
    readonly name:string;
}