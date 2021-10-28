import { IsNotEmpty, IsString } from "class-validator";

export class UpdateBenefitDto{
    @IsString()
    @IsNotEmpty()
    readonly name:string;

    @IsString()
    readonly username:string;
    
    @IsString()
    readonly password:string;
    
}