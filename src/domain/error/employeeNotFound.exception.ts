import { NotFoundException } from '@nestjs/common';
class EmployeeNotFoundException extends NotFoundException{
    constructor(employeeId:number){
        super(`Employee with id ${employeeId} not found.`);
    }
}

export default EmployeeNotFoundException;