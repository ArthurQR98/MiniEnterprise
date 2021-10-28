import { IsString, MaxLength } from "class-validator"

export class CreateDocDto{
    @IsString()
    @MaxLength(8,{message:"DNI is not valid"})
    dni:string

    @IsString()
    name:string
}