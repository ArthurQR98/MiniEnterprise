import { IsNotEmpty, IsString } from "class-validator";

export class ToolDto{
    @IsNotEmpty()
    @IsString()
    name:string;
    
    @IsString()
    serial:string;
    
    @IsNotEmpty()    
    @IsString()
    username:string;
    
    @IsNotEmpty()
    @IsString()
    password:string;
}