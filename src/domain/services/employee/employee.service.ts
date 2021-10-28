import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeRepository } from '../../../infrastructure/repository/employee.repository';
import { ReadEmployeeDto } from '../../../application/dto/employee/read-employee.dto';
import { Employee } from 'src/domain/entities/employee.entity';
import { plainToClass } from 'class-transformer';
import { UpdateEmployeeDto } from '../../../application/dto/employee/update-employee.dto';
import { RoleRepository } from '../../../infrastructure/repository/role.repository';
import { ReadRoleDto } from '../../../application/dto/role/read-role.dto';
import { Role } from 'src/domain/entities/role.entity';
import EmployeeNotFoundException from 'src/domain/error/employeeNotFound.exception';
import { EmployeeStatus } from '../../../infrastructure/shared/employee_status.enum';
import { EmployeeType } from '../../../infrastructure/shared/employee_type.enum';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(EmployeeRepository)
        private readonly _employeeRepository:EmployeeRepository,
        @InjectRepository(RoleRepository)
        private readonly _roleRepository:RoleRepository
    ) {}

    async getAllEmployee():Promise<ReadEmployeeDto[]>{
        const employees:Employee[] = await this._employeeRepository.find({where:{status:EmployeeStatus.Activo}});
        return employees.map((employee:Employee)=>plainToClass(ReadEmployeeDto,employee));
    }

    async getAllRole():Promise<ReadRoleDto[]>{
        const roles:Role[] = await this._roleRepository.find();
        return roles.map((role:Role)=>plainToClass(ReadRoleDto,role));
    }

    async updateEmployee(employeeId:number, employee:UpdateEmployeeDto):Promise<ReadEmployeeDto>{
        const foundEmployee = await this._employeeRepository.findOne(employeeId,{where:{status:EmployeeStatus.Activo}});
        if(!foundEmployee){
            throw new EmployeeNotFoundException(employeeId);
        }
        foundEmployee.name = employee.name;
        foundEmployee.lastname = employee.lastname; 
        foundEmployee.email = employee.email; 
        foundEmployee.dni = employee.dni; 
        foundEmployee.creation_date = employee.creation_date; 
        foundEmployee.role = employee.roleId;
        foundEmployee.type_employee = employee.type_employee
        
        const updatedEmployee = await this._employeeRepository.save(foundEmployee);
        return plainToClass(ReadEmployeeDto,updatedEmployee);
    }

    async deleteEmployee(employeeId:number):Promise<void>{
        const employeeExist = await this._employeeRepository.findOne(employeeId);
        if(!employeeExist){
            throw new EmployeeNotFoundException(employeeId);
        }
        await this._employeeRepository.delete(employeeId);
    }

    // Listar estados
    async getStatusEmployee(){
        return EmployeeStatus;
    }
    // listar tipos empleados
    async getTypeEmployee(){
        return EmployeeType;
    }
    // cambiar estado de empleado
    
    async changeStatusEmployeeInactive(employeeId):Promise<void>{
        const employeeExist = await this._employeeRepository.findOne(employeeId, {where:{status:EmployeeStatus.Activo}});
        if(!employeeExist){
            throw new EmployeeNotFoundException(employeeId);
        }
        await this._employeeRepository.update(employeeId,{status:EmployeeStatus.Inactivo});
    }

    async changeStatusEmployeeActive(employeeId):Promise<void>{
        const employeeExist = await this._employeeRepository.findOne(employeeId, {where:{status:EmployeeStatus.Inactivo}});
        if(!employeeExist){
            throw new EmployeeNotFoundException(employeeId);
        }
        await this._employeeRepository.update(employeeId,{status:EmployeeStatus.Activo});
    }

    // buscar empleado por DNI
    async getDNIEmployee(employeeDni:number):Promise<ReadEmployeeDto>{
        if(!employeeDni){
            throw new BadRequestException("DNI must be sent");
        }
        const employee:Employee = await this._employeeRepository.findOne({where:{status:EmployeeStatus.Activo, dni:employeeDni}});
        if(!employee){
            throw new NotFoundException("Employee not exists");
        }
        return plainToClass(ReadEmployeeDto, employee);
    }
    // buscar por fecha
    async getDateEmployee(){}
}












