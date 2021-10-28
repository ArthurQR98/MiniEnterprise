import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolController } from '../../../application/controllers/tool/tool.controller';
import { ToolService } from '../../../domain/services/tool/tool.service';
import { ToolRepository } from '../../repository/tool.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports:[TypeOrmModule.forFeature([ToolRepository]),AuthModule],
    controllers:[ToolController],
    providers:[ToolService],
})
export class ToolModule {}
