import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from '../../../infrastructure/repository/role.repository';
import { CreateRoleDto } from '../../../application/dto/role/create-role.dto';
import { ReadRoleDto } from '../../../application/dto/role/read-role.dto';
import { plainToClass } from 'class-transformer';
import { Role } from '../../entities/role.entity';
import { UpdateRoleDto } from '../../../application/dto/role/update-role.dto';
import RoleNotFoundException from 'src/domain/error/roleNotFound.exception';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleRepository)
        private readonly _roleRepository:RoleRepository
    ) {}
 
    async create(role:Partial<CreateRoleDto>):Promise<ReadRoleDto>{
        const { name } = role;
        const roleExists = await this._roleRepository.findOne({where:[{name}]});
        if(roleExists){
            throw new ConflictException("Role name already exists.");
        }
        const savedRole:Role = await this._roleRepository.save(role);
        return plainToClass(ReadRoleDto, savedRole);
    }

    async update(roleId:number, role:Partial<UpdateRoleDto>):Promise<ReadRoleDto>{
        const foundRole:Role = await this._roleRepository.findOne(roleId);
        if(!foundRole){
            throw new RoleNotFoundException(roleId);
        }
        foundRole.name = role.name;
        const updatedRole:Role = await this._roleRepository.save(foundRole);
        return plainToClass(ReadRoleDto, updatedRole);
    }

    async delete(roleId:number):Promise<void>{
        const roleExists = await this._roleRepository.findOne(roleId);
        if(!roleExists){
            throw new RoleNotFoundException(roleId);
        }
        await this._roleRepository.delete(roleId);
    }
}
