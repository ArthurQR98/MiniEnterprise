import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '../../../appconfig/config.service';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRepository } from '../../../infrastructure/repository/auth.repository';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Configuration } from '../../../appconfig/config.keys';
import { IJwtPayload } from './jwt-payload.interface';
import { EmployeeStatus } from 'src/employee_status.enum';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly _configService: ConfigService,
        @InjectRepository(AuthRepository)
        private readonly _authRepository: AuthRepository,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: _configService.get(Configuration.JWT_SECRET),
        });
    }

    async validate(payload: IJwtPayload) {
        const { email } = payload;
        const user = await this._authRepository.findOne({
            where: { email, status: EmployeeStatus.Activo },
        });
        if(!user){
            throw new UnauthorizedException();
        }
        return payload;
    }
}