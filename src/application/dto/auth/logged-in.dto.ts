import { Exclude, Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { ReadEmployeeDto } from '../employee/read-employee.dto';

@Exclude()
export class LoggedInDto{
    @Expose()
    @IsString()
    token:string;

    @Expose()
    @Type(()=>ReadEmployeeDto)
    employee:ReadEmployeeDto;
}