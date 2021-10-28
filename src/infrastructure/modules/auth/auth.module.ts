import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRepository } from '../../repository/auth.repository';
import { ConfigService } from '../../../appconfig/config.service';
import { ConfigModule } from '../../../appconfig/config.module';
import { Configuration } from '../../../appconfig/config.keys';
import { AuthController } from 'src/application/controllers/auth/auth.controller';
import { AuthService } from '../../../domain/services/auth/auth.service';
import { JwtStrategy } from '../../../domain/services/auth/jwt.strategy';
import { RoleRepository } from '../../repository/role.repository';

@Module({
    imports: [TypeOrmModule.forFeature([AuthRepository,RoleRepository]), PassportModule.register({
        defaultStrategy: 'jwt',
    }),
    JwtModule.registerAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory(config: ConfigService) {
            return {
                secret: config.get(Configuration.JWT_SECRET),
                signOptions: {
                    expiresIn: config.get(Configuration.JWT_EXPIRATION_TIME),
                }
            };
        },
    })
    ],
    controllers:[AuthController],
    providers:[AuthService, ConfigService, JwtStrategy],
    exports:[JwtStrategy, PassportModule]
})
export class AuthModule { }
