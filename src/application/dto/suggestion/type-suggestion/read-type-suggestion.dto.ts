import { Exclude, Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
@Exclude()
export class ReadTypeSuggestionDto{
    @IsNumber()
    @Expose()
    id:number;
    @IsString()
    @Expose()
    name:string;
}