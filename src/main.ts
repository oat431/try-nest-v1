import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ["error", "warn", "log", "debug"],
    });
    const config = new DocumentBuilder()
        .setTitle("Try NestJS V1")
        .setDescription("The Try NestJS API description")
        .setVersion("1.0")
        .build();
    const options: SwaggerDocumentOptions = {
        operationIdFactory: (
            controllerKey: string,
            methodKey: string
        ) => methodKey,
    }
    const documentFactory = () => SwaggerModule.createDocument(app, config, options);
    SwaggerModule.setup("swagger", app, documentFactory, {
        jsonDocumentUrl : "/api-docs",
    });
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
