import { Injectable } from '@nestjs/common';
import { ResponseDto } from '../common/response.template';

@Injectable()
export class HealthCheckService {
    public async healthCheck() : Promise<ResponseDto<string>> {
        return {
            data: 'Service is running',
            statusCode: 200,
            error: '',
            timestamp: new Date(),
        };
    }
}
