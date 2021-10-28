import { Body, Controller, Get, Param, Patch, Post, ParseIntPipe, Delete, UseGuards } from '@nestjs/common';
import { RoleService } from '../../../domain/services/role/role.service';
import { ReadRoleDto } from '../../dto/role/read-role.dto';
import { CreateRoleDto } from '../../dto/role/create-role.dto';
import { UpdateRoleDto } from '../../dto/role/update-role.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('role')
export class RoleController {
    constructor(
        private readonly _roleService:RoleService
    ) {}

    @Post()
    @UseGuards(AuthGuard())
    createRole(@Body() role:Partial<CreateRoleDto>):Promise<ReadRoleDto>{
        return this._roleService.create(role);
    }

    @Patch(':roleId')
    @UseGuards(AuthGuard())
    updateRole(@Param('roleId',ParseIntPipe) roleId:number, @Body() role:Partial<UpdateRoleDto>){
        return this._roleService.update(roleId, role);
    }

    @Delete('roleId')
    @UseGuards(AuthGuard())
    deleteRole(@Param('roleId', ParseIntPipe) roleId:number){
        return this._roleService.delete(roleId);
    }
        
}
