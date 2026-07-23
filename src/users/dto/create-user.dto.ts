import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBoolean,
  MaxLength,
  MinLength,
} from 'class-validator';

import { Role } from '../enums/role.enum';

export class CreateUserDto {
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

  @IsOptional()
  @IsEnum(Role, { message: 'ROLE_INVALID' })
  role?: Role;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsBoolean()
  isVerified?: boolean;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20, { message: 'PHONE_MAX_20' })
  phone?: string;
}
