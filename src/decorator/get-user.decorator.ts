import { UnauthorizedException } from "@nestjs/common";
import { createParamDecorator } from "@nestjs/common/decorators";
export const User = createParamDecorator((data, req) => {
  const user = req.user;
  if (!user) {
    throw new UnauthorizedException();
  }
    return user;
  });