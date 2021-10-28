import { EntityRepository, Repository } from 'typeorm';
import { Employee } from '../../domain/entities/employee.entity';

@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee>{}