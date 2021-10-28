import { IsNotEmpty, IsString } from "class-validator";

export class CreateTypeSuggestionDto{
    @IsNotEmpty()
    @IsString()
    name:string;
}