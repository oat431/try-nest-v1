import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HealthCheckController } from './health-check/health-check.controller';
import { HealthCheckService } from './health-check/health-check.service';

@Module({
    imports: [ConfigModule.forRoot({
        envFilePath: ['.env.dev', '.env.prod'],
    })],
    controllers: [AppController, HealthCheckController],
    providers: [AppService, HealthCheckService, HealthCheckService],
})
export class AppModule { }
