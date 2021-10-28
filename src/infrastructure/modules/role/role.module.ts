import { Module } from '@nestjs/common';
import { RoleRepository } from '../../repository/role.repository';
import { RoleController } from '../../../application/controllers/role/role.controller';
import { RoleService } from '../../../domain/services/role/role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports:[TypeOrmModule.forFeature([RoleRepository]),AuthModule],
    controllers:[RoleController],
    providers:[RoleService],
})
export class RoleModule {}
