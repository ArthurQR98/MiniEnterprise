import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Suggestion } from './suggestion.entity';

@Entity('type_suggestion')
export class TypeSuggestion extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({type:"varchar"})
    name:string;

    @OneToMany(()=> Suggestion, (suggestion:Suggestion)=> suggestion.type_suggestion)
    suggestion:Suggestion[];
}