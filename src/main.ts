import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {config} from 'dotenv';

const dotenv = config()
const port = process.env.PORT || 3002

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: true});

    app.useGlobalPipes(new ValidationPipe({whitelist: true, transform: true}));
    app.enableCors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept, Authorization',
        credentials: true,
    });
    await app.listen(port);
}

bootstrap();
