import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity('doc')
export class Doc extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({type:'varchar', length:150})
    name:string;
    
    @Column()
    document_url:string;

    @Column()
    public key:string;

    @ManyToOne(()=>Employee, (employee:Employee)=>employee.docs, {nullable:false})
    employee:Employee;
    
    @CreateDateColumn({type:'timestamp', name: 'created_at'})
    createdAt: Date;
    
    @UpdateDateColumn({type:'timestamp', name: 'updated_at'})
    updatedAt: Date;
}