import { IsDateString, IsEmail, IsNotEmpty,IsString, MaxLength} from 'class-validator';
import { Role } from '../../../domain/entities/role.entity';
import { EmployeeType } from '../../../employee_type.enum';

export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    lastname:string;

    @IsNotEmpty()
    @IsEmail(undefined,{message:'Email not valid'})
    email:string;
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(8,{message:"DNI not valid"})
    dni:string;

    @IsNotEmpty()
    @IsString()
    password:string;
    
    @IsDateString()
    @IsNotEmpty()
    creation_date:Date;
    
    @IsNotEmpty()
    roleId:Role;
    
    @IsNotEmpty()
    @IsString()
    type_employee:EmployeeType;
}