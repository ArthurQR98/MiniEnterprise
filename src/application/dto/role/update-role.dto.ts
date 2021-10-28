import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateRoleDto{
    @IsString()
    @IsNotEmpty()
    @MaxLength(20,{message:'This name is not valid.'})
    name:string;
}