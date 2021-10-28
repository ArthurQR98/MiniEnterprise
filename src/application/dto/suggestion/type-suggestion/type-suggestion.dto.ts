import { IsNotEmpty, IsString } from "class-validator";

export class TypeSuggestionDto{
    @IsNotEmpty()
    @IsString()
    name:string;
}