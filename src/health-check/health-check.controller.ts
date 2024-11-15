import { Controller, Get } from '@nestjs/common';
import { ResponseDto } from '../common/response.template';
import { HealthCheckService } from './health-check.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('health-check')
export class HealthCheckController {
    constructor(private healthCheckService: HealthCheckService) {}

    @Get()
    @ApiResponse({
        status: 200,
        description: 'Health check',
        type: ResponseDto<string>
    })
    async healthCheck() : Promise<ResponseDto<string>> {
        return this.healthCheckService.healthCheck();
    }
}
