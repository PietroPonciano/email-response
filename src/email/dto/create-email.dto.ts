import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEmailDto {
    @IsEmail()
    from: string;

    @IsEmail()
    to: string;

    @IsString()
    @IsNotEmpty()
    subject: string;

    @IsString()
    @IsNotEmpty()
    text: string;

    @IsOptional()
    @IsString()
    html?: string | null;
}