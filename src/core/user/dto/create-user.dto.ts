import { IsString, IsEmail } from "class-validator";

export class CreateUserDto {
    @IsString()
    public username: string;
  
    @IsEmail()
    public email: string;
  
    @IsString()
    public password: string;
  
    @IsString()
    public readonly firstName: string;
  
    @IsString()
    public readonly lastName: string;
  
}
