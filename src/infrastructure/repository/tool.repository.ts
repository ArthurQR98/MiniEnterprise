import { Tool } from 'src/domain/entities/tool.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Tool)
export class ToolRepository extends Repository<Tool>{
}