import { Employee } from '../../domain/entities/employee.entity';
import { EntityRepository, Repository } from 'typeorm';
import { SignUpDto } from '../../application/dto/auth/signUp.dto';
import { genSalt, hash } from "bcryptjs";


@EntityRepository(Employee)
export class AuthRepository extends Repository<Employee>{
    async signUp(signupDto:SignUpDto){
        const { name, lastname, email, dni, password, creation_date, roleId, type_employee } = signupDto;
        const employee = new Employee();
        employee.email = email;
        employee.name = name;
        employee.lastname = lastname;
        employee.dni = dni;
        employee.creation_date = creation_date;
        employee.type_employee = type_employee;
        employee.role = roleId;

        const salt = await genSalt(10);
        employee.password = await hash(password,salt);
        await employee.save();
    }
}