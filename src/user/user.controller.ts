import { Controller, Get, UseGuards, Req, Patch, Body } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { editUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  // GET /users if blank else GET /users/me
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  edituser(@GetUser('id') userId: number, @Body() dto: editUserDto) {
    return this.userService.edituser(userId, dto);
  }
}
