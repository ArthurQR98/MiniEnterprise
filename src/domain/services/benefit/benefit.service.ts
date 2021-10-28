import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReadBenefitDto } from '../../../application/dto/benefit/read-benefit.dto';
import { plainToClass } from 'class-transformer';
import { CreateBenefitDto } from '../../../application/dto/benefit/create-benefit.dto';
import { UpdateBenefitDto } from '../../../application/dto/benefit/update-benefit.dto';
import { Benefit } from 'src/domain/entities/benefit.entity';
import { BenefitRepository } from '../../../infrastructure/repository/benefit.repository';
import BenefitNotFoundException from 'src/domain/error/benefitNotFund.exception';

@Injectable()
export class BenefitService {
    constructor(
        @InjectRepository(BenefitRepository)
        private readonly _benefitRepository:BenefitRepository
    ) {}

    async getAllBenefits():Promise<ReadBenefitDto[]>{
        const benefits:Benefit[] = await this._benefitRepository.find();
        return benefits.map((benefit:Benefit)=>plainToClass(ReadBenefitDto,benefit));
    }

    async createBenefit(benefit:Partial<CreateBenefitDto>):Promise<ReadBenefitDto>{
        const savedBenefit:Benefit = await this._benefitRepository.save(benefit);
        return plainToClass(ReadBenefitDto, savedBenefit);
    }

    async updateBenefit(benefitId:number, benefit:UpdateBenefitDto):Promise<ReadBenefitDto>{
        const foundBenefit = await  this._benefitRepository.findOne(benefitId);
        if(!foundBenefit){
            throw new BenefitNotFoundException(benefitId);
        }
        foundBenefit.name = benefit.name;
        foundBenefit.username = benefit.username;
        foundBenefit.password = benefit.password;

        const updatedBenefit = await this._benefitRepository.save(foundBenefit)
        return plainToClass(ReadBenefitDto,updatedBenefit);
    }

    async deleteBenefit(benefitId:number):Promise<void>{
        const benefitExist = await this._benefitRepository.findOne(benefitId);
        if(!benefitExist){
            throw new BenefitNotFoundException(benefitId);
        }
        await this._benefitRepository.delete(benefitId);
    }
}
