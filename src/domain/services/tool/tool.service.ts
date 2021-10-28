import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ToolRepository } from '../../../infrastructure/repository/tool.repository';
import { Tool } from 'src/domain/entities/tool.entity';
import { ReadToolDto } from 'src/application/dto/tool/read-tool.dto';
import { plainToClass } from 'class-transformer';
import { CreateToolDto } from '../../../application/dto/tool/create-tool.dto';
import { UpdateToolDto } from '../../../application/dto/tool/update-tool.dto';
import ToolNotFoundException from 'src/domain/error/toolNotFound.exception';

@Injectable()
export class ToolService {
    constructor(
        @InjectRepository(ToolRepository)
        private readonly _toolRepository:ToolRepository
    ){}
    
    async getAllTools():Promise<ReadToolDto[]>{
        const tools:Tool[] = await this._toolRepository.find({});
        return tools.map((tool:Tool)=>plainToClass(ReadToolDto,tool));
    }

    async createTool(tool:Partial<CreateToolDto>):Promise<ReadToolDto>{
        const savedTool:Tool = await this._toolRepository.save(tool);
        return plainToClass(ReadToolDto, savedTool);
    }

    async updateTool(toolId:number, tool:UpdateToolDto):Promise<ReadToolDto>{
        const foundTool = await  this._toolRepository.findOne(toolId);
        if(!foundTool){
            throw new ToolNotFoundException(toolId);
        }
        foundTool.name = tool.name;
        foundTool.serial = tool.serial;
        foundTool.username = tool.username;
        foundTool.password = tool.password;

        const updatedTool = await this._toolRepository.save(foundTool)
        return plainToClass(ReadToolDto,updatedTool);
    }

    async deleteTool(toolId:number):Promise<void>{
        const ToolExist = await this._toolRepository.findOne(toolId);
        if(!ToolExist){
            throw new ToolNotFoundException(toolId);
        }
        await this._toolRepository.delete(toolId);
    }

}
