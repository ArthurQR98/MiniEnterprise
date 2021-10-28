import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('benefits')
export class Benefit extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({type:"varchar", length:25, nullable:false})
    name:string

    @Column({type:"varchar", nullable:false})
    username:string

    @Column({type:"varchar", nullable:false})
    password:string;

    @CreateDateColumn({type:'timestamp', name: 'created_at'})
    createdAt: Date;
    
    @UpdateDateColumn({type:'timestamp', name: 'updated_at'})
    updatedAt: Date;
}
