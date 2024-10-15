import {
  IsString,
  IsEmail,
  IsOptional,
  Length,
  IsBoolean,
  IsNumber,
  IsDate,
  IsNotEmpty,
} from 'class-validator';

export class CreateWorkerDto {
  @IsString()
  @Length(1, 100)
  full_name: string;

  @IsString()
  @IsNotEmpty()
  birth_date: string;

  @IsNumber()
  experience: number;

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
  @IsString()
  description: string;
}
