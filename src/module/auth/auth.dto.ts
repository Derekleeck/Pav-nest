import { IsNotEmpty, IsString } from 'class-validator';

export default class LoginUnregisteredDTO {
  // description: client app id //
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
