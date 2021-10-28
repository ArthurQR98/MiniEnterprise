import { IsDateString, IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Role } from '../../../domain/entities/role.entity';
import { EmployeeType } from '../../../employee_type.enum';

export class UpdateEmployeeDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    lastname:string;
    
    @IsNotEmpty()
    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(8,{message:"DNI not invalid"})
    dni:string;
    
    @IsNotEmpty()
    @IsDateString()
    creation_date:Date;

    @IsNotEmpty()
    roleId:Role;
    
    @IsString()
    @IsNotEmpty()
    type_employee:EmployeeType;        
}