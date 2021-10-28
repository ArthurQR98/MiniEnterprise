import { Module } from '@nestjs/common';
import { DocRepository } from '../../repository/doc.repository';
import { AuthModule } from '../auth/auth.module';
import { DocController } from '../../../application/controllers/doc/doc.controller';
import { DocService } from '../../../domain/services/doc/doc.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from '../../repository/employee.repository';
import { ConfigModule } from '../../../appconfig/config.module';

@Module({
    imports:[TypeOrmModule.forFeature([DocRepository,EmployeeRepository]), AuthModule, ConfigModule],
    controllers:[DocController],
    providers:[DocService],
})
export class DocModule {}
