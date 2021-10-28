import { Controller, Get, Param, Patch, ParseIntPipe, Body, Delete, UseGuards } from '@nestjs/common';
import { EmployeeService } from '../../../domain/services/employee/employee.service';
import { ReadEmployeeDto } from '../../dto/employee/read-employee.dto';
import { UpdateEmployeeDto } from '../../dto/employee/update-employee.dto';
import { ReadRoleDto } from '../../dto/role/read-role.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('employee')
export class EmployeeController {
    constructor(
        private readonly _employeeService:EmployeeService
    ) {}

    @Get()
    @UseGuards(AuthGuard())
    getAllEmployee():Promise<ReadEmployeeDto[]>{
        return this._employeeService.getAllEmployee();
    }

    @Get('typeEmployee')
    @UseGuards(AuthGuard())
    getTypeEmployee(){
        return this._employeeService.getTypeEmployee();        
    }

    @Get('statusEmployee')
    @UseGuards(AuthGuard())
    getStatusEmployee(){
        return this._employeeService.getStatusEmployee();
    }

    @Get('roles')
    @UseGuards(AuthGuard())
    getAllRoles():Promise<ReadRoleDto[]>{
        return this._employeeService.getAllRole();
    }

    @Get(':employeeDni')
    @UseGuards(AuthGuard())
    getDNIEmployee(@Param('employeeDni', ParseIntPipe) employeeDni:number):Promise<ReadEmployeeDto>{
        return this._employeeService.getDNIEmployee(employeeDni);
    }
    
    @Patch(':employeeId')
    @UseGuards(AuthGuard())
    updateEmployee(@Param('employeeId', ParseIntPipe) employeeId:number, @Body() employee:UpdateEmployeeDto){
        return this._employeeService.updateEmployee(employeeId,employee);
    }

    @Delete(':employeeId')
    @UseGuards(AuthGuard())
    deleteEmployee(@Param('employeeId', ParseIntPipe) employeeId:number):Promise<void>{
        return this._employeeService.deleteEmployee(employeeId);
    }

    @Patch(':employeeId/status')
    @UseGuards(AuthGuard())
    changeStatusEmployeeInactive(@Param('employeeId', ParseIntPipe) employeeId:number):Promise<void>{
        return this._employeeService.changeStatusEmployeeInactive(employeeId);
    }
    
    @Patch(':employeeId/statusActive')
    @UseGuards(AuthGuard())
    changeStatusEmployeeActive(@Param('employeeId', ParseIntPipe) employeeId:number):Promise<void>{
        return this._employeeService.changeStatusEmployeeActive(employeeId);
    }

}
