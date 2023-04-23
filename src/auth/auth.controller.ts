import {
  Body,
  Controller,
  Logger,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  AUTH_API,
  LOGIN_UNREGESTERED_API,
} from 'src/common/constants/apis-url';
import { AuthService } from './auth.service';
import LoginUnregisteredDTO from './auth.dto';
import IApiResponse from 'src/common/interface/api-response.interface';

const CONTROLLER_NAME = `Auth Controller`;

@Controller(AUTH_API)
@UsePipes(ValidationPipe)
export class AuthController {
  private logger = new Logger(CONTROLLER_NAME);

  constructor(private readonly authService: AuthService) {}

  //   @Post(LOGIN_UNREGESTERED_API)
  //   async loginNoUser(@Body() dto: LoginUnregisteredDTO): Promise<IApiResponse> {
  //     this.logger.verbose(`${CONTROLLER_NAME} - loginNoUser`);
  //     this.logger.debug(`DTO : ${JSON.stringify(dto)}`);

  //     const result = 'need to create service function';
  //     // const result = await this.authService.loginNonMember(dto);
  //     return result;
  //   }
  // }
}
