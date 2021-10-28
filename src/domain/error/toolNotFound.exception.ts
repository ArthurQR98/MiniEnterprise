import { NotFoundException, Controller } from '@nestjs/common';
class ToolNotFoundException extends NotFoundException{
    constructor(toolId:number) {
        super(`Tool with id ${toolId} not found.`);
    }
}
export default ToolNotFoundException;