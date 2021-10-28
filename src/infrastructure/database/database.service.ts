import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from '../../appconfig/config.module';
import { ConfigService } from '../../appconfig/config.service';
import { Configuration } from '../../appconfig/config.keys';
import { ConnectionOptions } from "typeorm";

export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports : [ConfigModule],
        inject : [ConfigService],
        async useFactory(config :ConfigService){
            return{
                type: 'mysql',
                host: config.get(Configuration.HOST),
                port: 3307,
                username : config.get(Configuration.USERNAME),
                password : config.get(Configuration.PASSWORD),
                database : config.get(Configuration.DATABASE),
                entities : [__dirname + '/../../**/*.entity{.ts,.js}'],
                synchronize: true,
            } as ConnectionOptions
        } 
    })
]