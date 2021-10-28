import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('tool')
export class Tool extends BaseEntity {
    @PrimaryGeneratedColumn('increment')    
    id:number;

    @Column({type:"varchar", length:50})
    name:string;
    
    @Column({type:"varchar", nullable:true})
    serial:string;
    
    @Column({type:"varchar"})
    username:string;
    
    @Column({type:"varchar"})
    password:string;

    @CreateDateColumn({type:'timestamp', name: 'created_at'})
    createdAt: Date;
    
    @UpdateDateColumn({type:'timestamp', name: 'updated_at'})
    updatedAt: Date;
}