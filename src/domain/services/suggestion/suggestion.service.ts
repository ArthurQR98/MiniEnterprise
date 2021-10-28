import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SuggestionRepository } from '../../../infrastructure/repository/suggestion.repository';
import { ReadSuggestionDto } from '../../../application/dto/suggestion/read-suggestion.dto';
import { Suggestion } from '../../entities/suggestion.entity';
import { plainToClass } from 'class-transformer';
import { CreateSuggestionDto } from '../../../application/dto/suggestion/create-suggestion.dto';
import { CreateTypeSuggestionDto } from '../../../application/dto/suggestion/type-suggestion/create-type-suggestion.dto';
import { TypeSuggestion } from 'src/domain/entities/type-suggestion.entity';
import { TypeSuggestionRepository } from 'src/infrastructure/repository/type-suggestion.repository';
import { ReadTypeSuggestionDto } from '../../../application/dto/suggestion/type-suggestion/read-type-suggestion.dto';
import { UpdateTypeSuggestionDto } from '../../../application/dto/suggestion/type-suggestion/update-type-suggestion.dto';
import TypeSuggestionNotFoundException from '../../error/typeSuggestionNotFund.exception';
import SuggestionNotFoundException from 'src/domain/error/suggestionNotFund.exception';


@Injectable()
export class SuggestionService {
    constructor(
        @InjectRepository(SuggestionRepository)
        private readonly _suggestionRepository:SuggestionRepository,
        @InjectRepository(TypeSuggestion)
        private readonly _typesuggestionRepository:TypeSuggestionRepository
    ){}

    async getAllSuggestions():Promise<ReadSuggestionDto[]>{
        const suggestions:Suggestion[] = await this._suggestionRepository.find({});
        return suggestions.map((suggestions:Suggestion)=>plainToClass(ReadSuggestionDto,suggestions));
    }
    
    async getAllTypeSuggestions():Promise<ReadTypeSuggestionDto[]>{
        const typeSuggestion:TypeSuggestion[] = await this._typesuggestionRepository.find({});
        return typeSuggestion.map((typeSuggestion:TypeSuggestion)=>plainToClass(ReadTypeSuggestionDto,typeSuggestion));
    }
    
    async getSuggestionByCategory(categoryId:number):Promise<ReadSuggestionDto[]>{
        if(!categoryId){
            throw new BadRequestException('id must  be sent');
        }
        const suggestions:Suggestion[] = await this._suggestionRepository.createQueryBuilder('suggestion')
        .where("suggestion.typeSuggestionId = :id" , { id:categoryId })
        .getMany()

        return suggestions.map(suggestion => plainToClass(ReadSuggestionDto, suggestion));
    }

    async createSuggestion(suggestion:Partial<CreateSuggestionDto>):Promise<ReadSuggestionDto>{
        const savedSuggestion:Suggestion = await this._suggestionRepository.save(suggestion);
        return plainToClass(ReadSuggestionDto,savedSuggestion)
    }

    async createTypeSuggestion(type_suggestion:Partial<CreateTypeSuggestionDto>):Promise<ReadSuggestionDto>{
        const savedTypeSuggestion:TypeSuggestion = await this._typesuggestionRepository.save(type_suggestion);
        return plainToClass(ReadSuggestionDto,savedTypeSuggestion);
    }

    async updateTypeSuggestion(typeSuggestionId:number, typeSuggestion:UpdateTypeSuggestionDto):Promise<ReadSuggestionDto>{
        const fountType = await this._typesuggestionRepository.findOne(typeSuggestionId);
        if(!fountType){
            throw new TypeSuggestionNotFoundException(typeSuggestionId);
        }
        fountType.name = typeSuggestion.name;
        const updateType = await this._typesuggestionRepository.save(fountType);
        return plainToClass(ReadSuggestionDto,updateType)
    }
    
    async deleteSuggestion(suggestionId:number):Promise<void>{
        const suggestionExist = await this._suggestionRepository.findOne(suggestionId);
        if(!suggestionExist){
            throw new SuggestionNotFoundException(suggestionId);
        }
        await this._suggestionRepository.delete(suggestionId);
    }


    async deleteTypeSuggestion(typeSuggestionId:number):Promise<void>{
        const typeExist = await this._typesuggestionRepository.findOne(typeSuggestionId);
        if(!typeExist){
            throw new TypeSuggestionNotFoundException(typeSuggestionId);
        }
        await this._typesuggestionRepository.delete(typeSuggestionId);
    }
}













