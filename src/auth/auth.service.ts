import { Injectable, Logger } from '@nestjs/common';

const SERVICE_NAME = 'Auth Service';
@Injectable()
export class AuthService {
  private logger = new Logger(SERVICE_NAME);
}
