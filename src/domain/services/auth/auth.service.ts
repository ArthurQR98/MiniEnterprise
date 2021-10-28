import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRepository } from '../../../infrastructure/repository/auth.repository';
import { SignUpDto } from '../../../application/dto/auth/signUp.dto';
import { SignInDto } from '../../../application/dto/auth/signIn.dto';
import { LoggedInDto } from '../../../application/dto/auth/logged-in.dto';
import { Employee } from '../../entities/employee.entity';
import { compare } from 'bcryptjs';
import { IJwtPayload } from './jwt-payload.interface';
import { plainToClass } from 'class-transformer';
import { RoleRepository } from '../../../infrastructure/repository/role.repository';
import RoleNotFoundException from 'src/domain/error/roleNotFound.exception';


@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AuthRepository)
        private readonly _authRepository:AuthRepository,
        @InjectRepository(RoleRepository)
        private readonly _roleRepository:RoleRepository,
        private readonly _jwtService:JwtService,
    ) {}

    async signup(signupDto:SignUpDto):Promise<void>{
        const { email, dni, roleId } = signupDto;
        const userExists = await this._authRepository.findOne({where:[{email,dni}]});
        const roleExists = await this._roleRepository.findOne({where:{id:roleId}});
        if(userExists){
            throw new ConflictException("Email or DNI already exists.");
        }
        if(!roleExists){
            throw new RoleNotFoundException(Number(roleId));
        }
        return this._authRepository.signUp(signupDto);
    }

    async signin(signinDto:SignInDto):Promise<LoggedInDto>{
        const { email, password } = signinDto;
        const employee:Employee = await this._authRepository.findOne({where:{email}});
        if(!employee){
            throw new NotFoundException('Employee does not exist.');
        }
        const isMatch = await compare(password, employee.password);
        if(!isMatch){
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload:IJwtPayload = {
            id : employee.id,
            email : employee.email,
            name : employee.name,
            role : employee.role
        } 
        const token = this._jwtService.sign(payload);
        return plainToClass(LoggedInDto,{token, employee});
    }
}
