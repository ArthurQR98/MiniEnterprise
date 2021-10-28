import { EntityRepository, Repository } from 'typeorm';
import { Doc } from '../../domain/entities/doc.entity';

@EntityRepository(Doc)
export class DocRepository extends Repository<Doc>{}