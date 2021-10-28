import { IsNotEmpty, IsString } from "class-validator";

export class CreateBenefitDto{
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    username:string;
    
    @IsString()
    password:string;
}