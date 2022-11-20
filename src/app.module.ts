import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersModule} from './users/users.module';
import {AuthModule} from './auth/auth.module';
import {ConfigModule} from '@nestjs/config';
import {MulterModule} from '@nestjs/platform-express';

@Module({
    imports: [
        UsersModule,
        AuthModule,

        ConfigModule.forRoot({
            envFilePath: '.env',
            cache: true,
            isGlobal: true,
        }),
        MulterModule.register({
            dest: './storage',
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
