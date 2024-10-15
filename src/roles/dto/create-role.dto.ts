import { IsString, IsOptional, Length } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @Length(1, 100)
  role_name: string;

  @IsOptional()
  @IsString()
  description: string;
}
