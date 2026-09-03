import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateReceivedEmailDto {
  @IsString()
  @IsNotEmpty()
  messageId: string;

  @IsEmail()
  from: string;

  @IsEmail()
  to: string;

  @IsString()
  @IsNotEmpty()
  subject: string;

  @IsString()
  text: string | null;

  @IsOptional()
  @IsString()
  html: string | null;
}