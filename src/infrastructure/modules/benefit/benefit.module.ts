import { Module } from '@nestjs/common';
import { BenefitController } from '../../../application/controllers/benefit/benefit.controller';
import { BenefitService } from '../../../domain/services/benefit/benefit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BenefitRepository } from 'src/infrastructure/repository/benefit.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports:[TypeOrmModule.forFeature([BenefitRepository]), AuthModule],
    controllers:[BenefitController],
    providers:[BenefitService],
})
export class BenefitModule {}
