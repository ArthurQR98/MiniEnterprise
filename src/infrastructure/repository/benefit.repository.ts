import { EntityRepository, Repository } from "typeorm";
import { Benefit } from '../../domain/entities/benefit.entity';

@EntityRepository(Benefit)
export class BenefitRepository extends Repository<Benefit>{
}