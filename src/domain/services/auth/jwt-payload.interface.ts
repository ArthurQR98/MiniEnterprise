import { Role } from '../../entities/role.entity';

export interface IJwtPayload{
    id:number;
    name:string;
    email:string;
    role: Role;
    iat? : Date;
}
