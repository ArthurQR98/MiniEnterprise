import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { BenefitService } from '../../../domain/services/benefit/benefit.service';
import { ReadBenefitDto } from '../../dto/benefit/read-benefit.dto';
import { CreateBenefitDto } from '../../dto/benefit/create-benefit.dto';
import { UpdateBenefitDto } from '../../dto/benefit/update-benefit.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('benefit')
export class BenefitController {
    constructor(
        private readonly _benefitService:BenefitService
    ) {}

    @Get()
    @UseGuards(AuthGuard())
    getAllBenefits():Promise<ReadBenefitDto[]>{
        return this._benefitService.getAllBenefits();
    }

    @Post()
    @UseGuards(AuthGuard())
    createBenefit(@Body() benefit:Partial<CreateBenefitDto>):Promise<ReadBenefitDto>{
        return this._benefitService.createBenefit(benefit);
    }

    @Patch(':benefitId')
    @UseGuards(AuthGuard())
    updateBenefit(@Param('benefitId', ParseIntPipe) benefitId:number, @Body() benefit:UpdateBenefitDto){
        return this._benefitService.updateBenefit(benefitId,benefit);
    }

    @Delete(':benefitId')
    @UseGuards(AuthGuard())
    deleteBenefit(@Param('benefitId', ParseIntPipe) benefitId:number):Promise<void>{
        return this._benefitService.deleteBenefit(benefitId);
    }

}
