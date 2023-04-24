import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {
  AUTH_API,
  LOGIN_USER,
  REGISTER_USER,
} from 'src/common/constants/apis-url';

@Controller(AUTH_API)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post(REGISTER_USER)
  async register(@Body() body: { email: string; password: string }) {
    const user = await this.authService.create(body.email, body.password);
    return { id: user.id, email: user.email };
  }

  @Post(LOGIN_USER)
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.findOneByEmail(body.email);
    if (!user) {
      throw new Error('User not found');
    }

    const passwordMatches = await bcrypt.compare(body.password, user.password);
    if (!passwordMatches) {
      throw new Error('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
