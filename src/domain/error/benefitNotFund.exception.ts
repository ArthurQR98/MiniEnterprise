import { NotFoundException } from '@nestjs/common';
class BenefitNotFoundException extends NotFoundException{
    constructor(benefitId:number){
        super(`Benefit with id ${benefitId} not found.`);
    }
}

export default BenefitNotFoundException;