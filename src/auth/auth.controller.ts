import {Body, Controller, Get, HttpCode, HttpStatus, Post, Request, Res} from '@nestjs/common';
import {AuthService} from './auth.service';
import {Response} from 'express';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('signup')
    signup(@Body() request: any, @Res({passthrough: true}) res: Response) {
        const result = this.authService.signup(request)
        if (result) {
            res.status(HttpStatus.OK);
            return {
                result
            }
        } else {
            res.status(HttpStatus.BAD_REQUEST);
            return {
                "message": "Bad Request Error"
            }
        }
    }

    @Post('signin')
    signin(@Request() req: Request, @Res() res: Response) {
        return 'signin'
    }

    @Post('signout')
    signout(@Request() req: Request, @Res() res: Response) {
        return 'signout'
    }
}
