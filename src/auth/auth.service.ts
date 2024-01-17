import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { JwtService } from '@nestjs/jwt';
import axios from 'axios';
import { UserService } from 'src/core/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signIn(username, pass) {
    const user = await this.usersService.findOne({ username, password: pass });
    console.log(user);
    if (!user?.id) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user,
    };
  }
  async verifyGoogleToken(idToken: string): Promise<boolean> {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${idToken}`,
      );
      const { aud, email_verified } = response.data;
      return (
        aud === this.configService.get('google.GOOGLE_CLIENT_ID') &&
        email_verified
      );
    } catch (error) {
      console.error('Google token verification failed', error.message);
      return false;
    }
  }
}
