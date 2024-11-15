import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto<T> {
    @ApiProperty()
    data: T;

    @ApiProperty({
        example: 404
    })
    statusCode: number;

    @ApiProperty({
        example: 'not found'
    })
    error: string;

    @ApiProperty({
        example: '2021-08-18T07:38:15.000Z'
    })
    timestamp: Date;
}