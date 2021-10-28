import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../../../domain/services/auth/auth.service';
import { SignUpDto } from '../../dto/auth/signUp.dto';
import { SignInDto } from '../../dto/auth/signIn.dto';
import { LoggedInDto } from '../../dto/auth/logged-in.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly _authService:AuthService
    ) {}
    
    @Post('signup')
    @UsePipes(ValidationPipe)
    signup(@Body() signupDto:SignUpDto):Promise<void>{
        return this._authService.signup(signupDto);
    }

    @Post('signin')
    @UsePipes(ValidationPipe)
    signin(@Body() signinDto:SignInDto):Promise<LoggedInDto>{
        return this._authService.signin(signinDto);
    }
}
