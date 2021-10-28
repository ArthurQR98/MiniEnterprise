import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database/database.module';
import { ConfigModule } from './appconfig/config.module';
import { ConfigService } from './appconfig/config.service';
import { Configuration } from './appconfig/config.keys';
import { BenefitModule } from './infrastructure/modules/benefit/benefit.module';
import { ToolModule } from './infrastructure/modules/tool/tool.module';
import { SuggestionModule } from './infrastructure/modules/suggestion/suggestion.module';
import { RoleModule } from './infrastructure/modules/role/role.module';
import { EmployeeModule } from './infrastructure/modules/employee/employee.module';
import { AuthModule } from './infrastructure/modules/auth/auth.module';
import { DocModule } from './infrastructure/modules/doc/doc.module';

@Module({
  imports: [DatabaseModule, ConfigModule,BenefitModule, ToolModule, SuggestionModule, RoleModule, EmployeeModule, AuthModule, DocModule],
})
export class AppModule {
  static port:number | string;

  constructor(private readonly _configService:ConfigService){
    AppModule.port = this._configService.get(Configuration.PORT)
  }
}
