import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ default: 'thienpham', required: true })
  @IsString()
  public username: string;

  @ApiProperty({ default: '123456', required: true })
  @IsString()
  public password: string;
}
