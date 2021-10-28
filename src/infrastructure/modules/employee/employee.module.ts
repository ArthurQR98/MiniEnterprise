import { Module } from '@nestjs/common';
import { EmployeeController } from 'src/application/controllers/employee/employee.controller';
import { EmployeeRepository } from '../../repository/employee.repository';
import { EmployeeService } from '../../../domain/services/employee/employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from '../../repository/role.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports:[TypeOrmModule.forFeature([EmployeeRepository, RoleRepository]),AuthModule],
    controllers:[EmployeeController],
    providers:[EmployeeService],
})
export class EmployeeModule {}
