import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty({ message: 'USERNAME_REQUIRED' })
  @MaxLength(30, { message: 'USERNAME_MAX_30' })
  username!: string;

  @IsString()
  @IsNotEmpty({ message: 'EMAIL_REQUIRED' })
  @IsEmail({}, { message: 'EMAIL_INVALID' })
  @MaxLength(255, { message: 'EMAIL_MAX_255' })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: 'PASSWORD_REQUIRED' })
  @MinLength(6, { message: 'PASSWORD_MIN_6' })
  @MaxLength(100, { message: 'PASSWORD_MAX_100' })
  password!: string;
}
