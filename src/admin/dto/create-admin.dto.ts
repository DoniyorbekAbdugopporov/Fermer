import {
  IsString,
  IsEmail,
  IsOptional,
  Length,
  IsBoolean,
} from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @Length(1, 100)
  full_name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Length(0, 15)
  phone_number?: string;

  @IsOptional()
  @IsString()
  tg_link?: string;

  @IsString()
  @Length(6, 50)
  password: string;

  @IsString()
  @Length(6, 50)
  confirm_password: string;

  @IsOptional()
  @IsString()
  hashed_refresh_token: string;

  @IsOptional()
  @IsBoolean()
  is_active: boolean;

  @IsOptional()
  @IsBoolean()
  is_creator: boolean;

  @IsOptional()
  @IsString()
  description: string;
}
