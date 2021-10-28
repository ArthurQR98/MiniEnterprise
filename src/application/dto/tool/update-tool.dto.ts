import { IsString } from "class-validator";

export class UpdateToolDto{
    @IsString()
    readonly name:string;
    
    @IsString()
    readonly serial:string;
    
    @IsString()
    readonly username:string;
    
    @IsString()
    readonly password:string;
}