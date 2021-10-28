import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateRoleDto{
    @IsString()
    @IsNotEmpty()
    @MaxLength(20,{message:'This name is not valid.'})
    name:string;
}