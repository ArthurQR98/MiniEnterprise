import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity('role')
export class Role extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;
    
    @Column({type:"varchar", length:50, nullable:false})
    name:string;

    @OneToMany(()=>Employee, (employee:Employee)=>employee.role)
    employee:Employee[];

    @CreateDateColumn({type:'timestamp', name: 'created_at'})
    createdAt: Date;
    
    @UpdateDateColumn({type:'timestamp', name: 'updated_at'})
    updatedAt: Date;
}