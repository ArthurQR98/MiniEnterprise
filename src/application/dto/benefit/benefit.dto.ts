import { IsNotEmpty, IsString } from "class-validator";

export class BenefitDto{
    @IsNotEmpty()
    @IsString()
    name:string;
    
    @IsNotEmpty()
    @IsString()
    username:string;
    
    @IsNotEmpty()
    @IsString()
    password:string;
}