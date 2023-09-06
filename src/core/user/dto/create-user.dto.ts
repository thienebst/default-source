import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty( )
  @IsString()
  public username: string;

  @IsEmail()
  public email: string;

  @ApiProperty()
  @IsString()
  public password: string;

  @IsString()
  public readonly firstName: string;

  @IsString()
  public readonly lastName: string;
}
