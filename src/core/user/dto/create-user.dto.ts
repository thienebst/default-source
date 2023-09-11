import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  public username: string;

  @ApiProperty()
  @IsEmail()
  public email: string;

  @ApiProperty()
  @IsString()
  public password: string;

  @ApiProperty({ required: false })
  @IsString()
  public readonly firstName: string;

  @ApiProperty({ required: false })
  @IsString()
  public readonly lastName: string;
}
