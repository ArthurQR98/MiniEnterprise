import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@Exclude()
export class ReadBenefitDto{
    @Expose()
    @IsNumber()
    readonly id:number;

    @Expose()
    @IsString()
    readonly name:string;

    @Expose()
    @IsString()
    readonly username:string;

    @Expose()
    @IsString()
    readonly password:string;
    
}