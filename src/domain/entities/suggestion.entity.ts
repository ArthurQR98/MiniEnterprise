import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TypeSuggestion } from './type-suggestion.entity';

@Entity('suggestion')
export class Suggestion extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:string
    
    @Column({type:"varchar"})
    message:string;
    
    @CreateDateColumn({type:'timestamp', name: 'created_at'})
    createdAt: Date;
    
    @CreateDateColumn({type:'timestamp', name: 'updated_at'})
    updatedAt: Date;

    @ManyToOne(()=> TypeSuggestion, (type:TypeSuggestion)=> type.suggestion, {eager:true, cascade:true, nullable:false , onDelete:"CASCADE"})
    type_suggestion:TypeSuggestion;
}

