import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginDto {
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
