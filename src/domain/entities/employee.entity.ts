import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from './role.entity';
import { EmployeeType } from '../../infrastructure/shared/employee_type.enum';
import { EmployeeStatus } from '../../infrastructure/shared/employee_status.enum';
import { Doc } from './doc.entity';

@Entity('employee')
export class Employee extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({type:"varchar", length: 50, nullable:false})
    name:string;

    @Column({type:"varchar", length:100, nullable:false})
    lastname:string;

    @Column({type:"varchar", length:100, unique:true, nullable:false})
    email:string;

    @Column({type:"varchar", length:8, unique:true, nullable:false})
    dni:string;

    @Column({type:"varchar", nullable:false})
    password:string;

    @Column({type:"datetime", nullable:false})
    creation_date:Date;
    
    @ManyToOne(()=>Role,(role:Role)=>role.employee,{cascade:true,nullable:false})
    role:Role;

    @OneToMany(()=>Doc,(doc:Doc)=>doc.employee)
    docs:Doc[];
    
    @Column({type:"enum", enum:EmployeeType})
    type_employee:EmployeeType;

    @Column({type:"enum",enum:EmployeeStatus,default:EmployeeStatus.Activo})
    status:EmployeeStatus;

    @CreateDateColumn({type:'timestamp', name: 'created_at'})
    createdAt: Date;
    
    @UpdateDateColumn({type:'timestamp', name: 'updated_at'})
    updatedAt: Date;
}