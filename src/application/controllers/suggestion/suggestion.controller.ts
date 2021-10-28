import { Body, Controller, Get, Param, Post, ParseIntPipe, Patch, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { SuggestionService } from '../../../domain/services/suggestion/suggestion.service';
import { CreateSuggestionDto } from '../../dto/suggestion/create-suggestion.dto';
import { ReadSuggestionDto } from '../../dto/suggestion/read-suggestion.dto';
import { CreateTypeSuggestionDto } from '../../dto/suggestion/type-suggestion/create-type-suggestion.dto';
import { ReadTypeSuggestionDto } from '../../dto/suggestion/type-suggestion/read-type-suggestion.dto';
import { UpdateTypeSuggestionDto } from '../../dto/suggestion/type-suggestion/update-type-suggestion.dto';

@Controller('suggestion')
export class SuggestionController {
    constructor(
        private readonly _suggestionService:SuggestionService
    ){}

    @Get()
    @UseGuards(AuthGuard())
    getAllSuggestions():Promise<ReadSuggestionDto[]>{
        return this._suggestionService.getAllSuggestions();
    }
    
    @Get('types')
    @UseGuards(AuthGuard())
    getAllTypeSuggestions():Promise<ReadTypeSuggestionDto[]>{
        return this._suggestionService.getAllTypeSuggestions();
    }

    @Post()
    @UseGuards(AuthGuard())
    createSuggestion(@Body() suggestion:Partial<CreateSuggestionDto>):Promise<ReadSuggestionDto>{
        return this._suggestionService.createSuggestion(suggestion)
    }

    @Post('type')
    @UseGuards(AuthGuard())
    createTypeSuggestion(@Body() typeSuggestion:Partial<CreateTypeSuggestionDto>):Promise<ReadSuggestionDto>{
        return this._suggestionService.createTypeSuggestion(typeSuggestion);
    }

    @Get(':categoryId')
    @UseGuards(AuthGuard())
    getSuggestionById(@Param('categoryId', ParseIntPipe) categoryId:number):Promise<ReadSuggestionDto[]>{
        return this._suggestionService.getSuggestionByCategory(categoryId);
    }

    @Patch('type/:typeSuggestionId')
    @UseGuards(AuthGuard())
    updateTypeSuggestion(@Param('typeSuggestionId', ParseIntPipe) typeSuggestionId:number, @Body() typeSuggestion:UpdateTypeSuggestionDto){
        return this._suggestionService.updateTypeSuggestion(typeSuggestionId, typeSuggestion);
    }

    @Delete(':suggestionId')
    @UseGuards(AuthGuard())
    deleteSuggestion(@Param('suggestionId', ParseIntPipe) suggestionId:number):Promise<void>{
        return this._suggestionService.deleteSuggestion(suggestionId);
    }

    @Delete('type/:typeSuggestionId')
    @UseGuards(AuthGuard())
    deleteTypeSuggestion(@Param('typeSuggestionId', ParseIntPipe) typeSuggestionId:number):Promise<void>{
        return this._suggestionService.deleteTypeSuggestion(typeSuggestionId);
    }
}
