import { Exclude, Expose, Type } from "class-transformer";
import { IsDate, IsEmail, IsNumber, IsString } from "class-validator";
import { ReadRoleDto } from '../role/read-role.dto';

@Exclude()
export class ReadEmployeeDto{
    @Exclude()
    readonly id:number;
    
    @Expose()
    @IsString()
    readonly name:string;
    
    @Expose()
    @IsString()
    readonly lastname:string;
    
    @Expose()
    @IsEmail()
    readonly email:string;
    
    @Expose()
    @IsNumber()
    readonly dni:number;
    
    @Expose()
    @IsDate()
    readonly creation_date:Date;
    
    @Expose()
    @Type(type => ReadRoleDto)
    readonly role_id:ReadRoleDto;      
}