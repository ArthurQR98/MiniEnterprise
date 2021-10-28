import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateToolDto } from 'src/application/dto/tool/create-tool.dto';
import { ReadToolDto } from 'src/application/dto/tool/read-tool.dto';
import { UpdateToolDto } from 'src/application/dto/tool/update-tool.dto';
import { ToolService } from 'src/domain/services/tool/tool.service';

@Controller('tool')
export class ToolController {
    constructor(
        private readonly _toolService:ToolService
    ) {}

    @Get()
    @UseGuards(AuthGuard())
    getAllTools():Promise<ReadToolDto[]>{
        return this._toolService.getAllTools();
    }

    @Post()
    @UseGuards(AuthGuard())
    createBenefit(@Body() tool:Partial<CreateToolDto>):Promise<ReadToolDto>{
        return this._toolService.createTool(tool);
    }

    @Patch(':toolId')
    @UseGuards(AuthGuard())
    updateTool(@Param('toolId', ParseIntPipe) toolId:number, @Body() tool:UpdateToolDto){
        return this._toolService.updateTool(toolId,tool)
    }

    @Delete(':toolId')
    @UseGuards(AuthGuard())
    deleteTool(@Param('toolId', ParseIntPipe) toolId:number):Promise<void>{
        return this._toolService.deleteTool(toolId);
    }
    
}
