import { IsNotEmpty, IsString } from "class-validator";

export class CreateToolDto{
    @IsString()
    @IsNotEmpty()
    name:string;
    
    @IsString()
    serial:string;
    
    @IsString()
    @IsNotEmpty()
    username:string;
    
    @IsString()
    @IsNotEmpty()
    password:string;
}