import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class ReadRoleDto{
    @IsNumber()
    readonly id:number;
    
    @IsString()
    readonly nombre:string;
}